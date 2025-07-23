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
import { url } from '../utils/db_url';

export const useBand = () => {
  const dbUrl = `${url}bands/`;
  const { token } = useAuthStore();
  const { setBands, setSelectedBand, setBandMetadata } = useBandStore();
  const { setIsLoading } = useLoadingStore();

  const addBand = async (bandDetails: AddBandDetails) => {
    setIsLoading(true);
    try {
      await axios.post(`${dbUrl}add-band`, bandDetails, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success('Band added successfully');
      window.location.reload();
    } catch (err) {
      console.error('Error: ', err);
      toast.error('Error adding band');
    } finally {
      setIsLoading(false);
    }
  };

  const getAllBands = async (
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
      const bandResponse = response.data as BandsResponse;
      setBands(
        typeof bandResponse.data === 'object' ? bandResponse.data.bands : [],
      );
      setBandMetadata(
        typeof bandResponse.data === 'object' ? bandResponse.data.meta : {},
      );
    } catch (err: any) {
      toast.error(err.message);
      console.error('Error: ', err);
    } finally {
      setIsLoading(false);
    }
  };

  const getBand = async (bandId: number) => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${dbUrl}${bandId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const bandResponse = response.data as BandResponse;
      setSelectedBand(bandResponse.data);
    } catch (err: any) {
      setIsLoading(false);
      toast.error(err.message);
      console.error('Error: ', err);
    } finally {
      setIsLoading(false);
    }
  };

  return { getAllBands, getBand, addBand };
};
