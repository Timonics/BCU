import axios from 'axios';
import {
  AddBandDetails,
  BandResponse,
  BandsResponse,
} from '../interfaces/bands';
import { useBandStore } from '../stores/bandStore';
import { useLoadingStore } from '../stores/loadingStore';
import { toast } from 'react-toastify';
import { useAuthStore } from '../stores/authStore';

export const useBand = () => {
  const dbUrl = 'https://bcu-backend-ckde.onrender.com/bands';
  const { token } = useAuthStore();
  const { setBands,  setSelectedBand } = useBandStore();
  const { setIsLoading } = useLoadingStore();

  const addBand = async (bandDetails: AddBandDetails) => {
    try {
      await axios.post(`${dbUrl}`, bandDetails, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success('Band added successfully');
      window.location.reload();
    } catch (err) {
      console.error('Error: ', err);
      toast.error('Error adding band');
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
      const bandResponse = response.data as BandsResponse;
      setBands(bandResponse.data);
    } catch (err: any) {
      toast.error(err.message);
      console.error('Error: ', err);
    } finally {
      setIsLoading(false);
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
      console.error('Error: ', err);
    }
  };

  return { getAllBands, getBand, addBand };
};
