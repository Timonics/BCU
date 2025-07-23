import axios from 'axios';
import { toast } from 'react-toastify';
import { useAuthStore } from '../stores/authStore';
import { useLoadingStore } from '../stores/loadingStore';
import { useUnitStore } from '../stores/unitStore';
import { AddUnit, UnitResponse, UnitsResponse } from '../interfaces/unit';
import { url } from '../utils/db_url';

export const useUnit = () => {
  const dbUrl = `${url}units/`;
  const { token } = useAuthStore();
  const { setIsLoading } = useLoadingStore();
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
      toast.error(err.message);
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
      toast.error(err.message);
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
      toast.success('Unit added successfully');
      window.location.reload();
    } catch (err: any) {
      setIsLoading(false);
      toast.error(err.message);
      console.error('Error: ', err);
    } finally {
      setIsLoading(false);
    }
  };

  return { getAllUnits, getUnit, addUnit };
};
