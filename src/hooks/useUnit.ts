import axios from "axios";
import { toast } from "react-toastify";
import { useAuthStore } from "../stores/authStore";
import { useLoadingStore } from "../stores/loadingStore";
import { useUnitStore } from "../stores/unitStore";
import { AllUnitsResponse } from "../interfaces/unit";

export const useUnit = () => {
  const dbUrl = "https://bcu.candsyf.org/core/unit";
  const { token } = useAuthStore();
  const { setIsLoading } = useLoadingStore();
  const { setUnits, setTotalUnits } = useUnitStore();

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
  return { getAllUnits };
};
