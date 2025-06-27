import axios from "axios";
import { toast } from "react-toastify";
import { useAuthStore } from "../stores/authStore";
import { useLoadingStore } from "../stores/loadingStore";
import { useUnitStore } from "../stores/unitStore";
import { AllUnitsResponse, UnitsResponse } from "../interfaces/unit";

export const useUnit = () => {
  const dbUrl = "https://bcu.candsyf.org/core/unit";
  const { token } = useAuthStore();
  const { setIsLoading } = useLoadingStore();
  const { setUnits, setTotalUnits, setSelectedUnit } = useUnitStore();

  const getAllUnits = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${dbUrl}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const bandResponse = response.data as AllUnitsResponse;
      setUnits(bandResponse.data);
      setTotalUnits(bandResponse.meta.total);
      setIsLoading(false);
    } catch (err: any) {
      setIsLoading(false);
      toast.error(err.message);
      console.error("Error: ", err);
    }
  };

  const getUnit = async (unitId: string) => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${dbUrl}/${unitId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const unitResponse = response.data as UnitsResponse;
      setSelectedUnit(unitResponse.data);
      setIsLoading(false);
    } catch (err: any) {
      setIsLoading(false);
      toast.error(err.message);
      console.error("Error: ", err);
    }
  };

  const addUnit = async () => {
    try {
      await axios.get(`${dbUrl}`)
    } catch(err: any) {
      setIsLoading(false);
      toast.error(err.message);
      console.error("Error: ", err);
    }
  }

  return { getAllUnits, getUnit, addUnit };
};
