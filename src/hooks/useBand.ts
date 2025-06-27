import axios from "axios";
import {
  AddBandDetails,
  AllBandsResponse,
  BandResponse,
} from "../interfaces/bands";
import { useBandStore } from "../stores/bandStore";
import { useLoadingStore } from "../stores/loadingStore";
import { toast } from "react-toastify";
import { useAuthStore } from "../stores/authStore";

export const useBand = () => {
  const dbUrl = "https://bcu.candsyf.org/core/band";
  const { token } = useAuthStore();
  const { setBands, setTotalBand, setSelectedBand } = useBandStore();
  const { setIsLoading } = useLoadingStore();

  const addBand = async (bandDetails: AddBandDetails) => {
    try {
      await axios.post(`${dbUrl}`, bandDetails, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Band added successfully");
      window.location.reload();
    } catch (err) {
      console.error("Error: ", err);
      toast.error("Error adding band");
    }
  };

  const getAllBands = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${dbUrl}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const bandResponse = response.data as AllBandsResponse;
      setBands(bandResponse.data);
      setTotalBand(bandResponse.meta.total);
      setIsLoading(false);
    } catch (err: any) {
      setIsLoading(false);
      toast.error(err.message);
      console.error("Error: ", err);
    }
  };

  const getBand = async (bandId: string) => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${dbUrl}/${bandId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const bandResponse = response.data as BandResponse;
      setSelectedBand(bandResponse.data);
      setIsLoading(false);
    } catch (err: any) {
      setIsLoading(false);
      toast.error(err.message);
      console.error("Error: ", err);
    }
  };

  return { getAllBands, getBand, addBand };
};
