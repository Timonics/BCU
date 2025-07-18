import axios from 'axios';
import { toast } from 'react-toastify';
import { useAuthStore } from '../stores/authStore';
import { useLoadingStore } from '../stores/loadingStore';
import { useUnitStore } from '../stores/unitStore';
import { AddUnit, UnitResponse, UnitsResponse } from '../interfaces/unit';

export const useUnit = () => {
  const dbUrl = 'https://bcu-backend-ckde.onrender.com/units';
  const { token } = useAuthStore();
  const { setIsLoading } = useLoadingStore();
  const { setUnits, setSelectedUnit } = useUnitStore();

  const getAllUnits = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${dbUrl}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const bandResponse = response.data as UnitsResponse;
      setUnits(bandResponse.data);
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
      const response = await axios.get(`${dbUrl}/${unitId}`, {
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
    try {
      await axios.post(`${dbUrl}add-unit`, unitData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (err: any) {
      setIsLoading(false);
      toast.error(err.message);
      console.error('Error: ', err);
    }
  };

  return { getAllUnits, getUnit, addUnit };
};
