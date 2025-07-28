import axios from 'axios';
import { useAuthStore } from '../stores/authStore';
import { useLoadingStore } from '../stores/loadingStore';
import { useUnitStore } from '../stores/unitStore';
import {
  AddUnit,
  UnitMembersResponse,
  UnitResponse,
  UnitsResponse,
} from '../interfaces/unit';
import { url } from '../utils/db_url';
import { showSuccess, showError } from '../utils/toast';
import { useNavigate } from 'react-router';
import useStates from './useStates';

export const useUnit = () => {
  const dbUrl = `${url}units/`;
  const navigate = useNavigate();
  const { token } = useAuthStore();
  const { setIsLoading } = useLoadingStore();
  const { setIsCreateNewUnitOpen } = useStates();
  const { setUnits, setSelectedUnit, setUnitMetadata } = useUnitStore();

  const getAllUnits = async (
    page?: number,
    limit?: number,
    sortBy?: string,
    sortOrder?: string,
  ) => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${dbUrl}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          ...(page && { page }),
          ...(limit && { limit }),
          ...(sortBy && { sortBy }),
          ...(sortOrder && { sortOrder }),
        },
      });
      const unitsResponse = response.data as UnitsResponse;
      setUnits(
        typeof unitsResponse.data === 'object' ? unitsResponse.data.units : [],
      );
      setUnitMetadata(
        typeof unitsResponse.data === 'object' ? unitsResponse.data.meta : {},
      );
    } catch (err: any) {
      showError(err.message);
      console.error('Error: ', err);
    } finally {
      setIsLoading(false);
    }
  };

  const getUnit = async (unitId: number) => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${dbUrl}${unitId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const unitResponse = response.data as UnitResponse;
      setSelectedUnit(unitResponse.data);
    } catch (err: any) {
      showError(err.message);
      console.error('Error: ', err);
    } finally {
      setIsLoading(false);
    }
  };

  const addUnit = async (unitData: AddUnit) => {
    setIsLoading(true);
    try {
      await axios.post(`${dbUrl}add-unit`, unitData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      showSuccess('Unit added successfully');
      setIsCreateNewUnitOpen(false);
      navigate(location.pathname, { state: { shouldRefresh: true } });
    } catch (err: any) {
      setIsLoading(false);
      showError(err.message);
      console.error('Error: ', err);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchUnitMembersWithoutHead = async (unitId: number) => {
    try {
      const response = await axios.get(
        `${dbUrl}unit-members/${unitId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      const membersResponse = response.data as UnitMembersResponse;
      return membersResponse.data;
    } catch (err: any) {
      setIsLoading(false);
      showError(
        err.response
          ? err.response.data.message
          : 'Error fetching band members',
      );
      console.error('Error: ', err);
    }
  };

  const updateUnit = async (unitId: number, unitData: Partial<AddUnit>) => {
    try {
      await axios.put(`${dbUrl}update-unit/${unitId}`, unitData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      showSuccess('Successfully updated unit');
      navigate(location.pathname, { state: { shouldRefresh: true } });
    } catch (err: any) {
      showError(
        err.response.data ? err.response.data.message : 'Internal Server Error',
      );
      console.error('Error: ', err);
    }
  };

  return {
    getAllUnits,
    getUnit,
    addUnit,
    fetchUnitMembersWithoutHead,
    updateUnit,
  };
};
