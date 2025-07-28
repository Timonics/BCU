import axios from 'axios';
import {
  AddBandDetails,
  BandMembersResponse,
  BandResponse,
  BandsResponse,
} from '../interfaces/bands';
import { useBandStore } from '../stores/bandStore';
import { useLoadingStore } from '../stores/loadingStore';
import { useAuthStore } from '../stores/authStore';
import { url } from '../utils/db_url';
import { useNavigate } from 'react-router';
import useStates from './useStates';
import { showError, showSuccess } from '../utils/toast';

export const useBand = () => {
  const dbUrl = `${url}bands/`;
  const navigate = useNavigate();
  const { token } = useAuthStore();
  const { setBands, setSelectedBand, setBandMetadata } = useBandStore();
  const { setIsCreateNewBandOpen } = useStates();
  const { setIsLoading } = useLoadingStore();

  const addBand = async (bandDetails: AddBandDetails) => {
    setIsLoading(true);
    try {
      await axios.post(`${dbUrl}add-band`, bandDetails, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      showSuccess('Band added successfully');
      setIsCreateNewBandOpen(false);
      navigate('/bands', { state: { shouldRefresh: true } });
    } catch (err) {
      console.error('Error: ', err);
      showError('Error adding band');
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
      showError(err.message);
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
      showError(err.message);
      console.error('Error: ', err);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchBandMembersWithoutCaptain = async (bandId: number) => {
    try {
      const response = await axios.get(
        `${dbUrl}band-members/${bandId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      const membersResponse = response.data as BandMembersResponse;

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

  const updateBand = async (
    bandId: number,
    bandData: Partial<AddBandDetails>,
  ) => {
    try {
      await axios.put(`${dbUrl}update-band/${bandId}`, bandData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      showSuccess('Successfully updated band');
      navigate(location.pathname, { state: { shouldRefresh: true } });
    } catch (err: any) {
      showError(
        err.response.data ? err.response.data.message : 'Internal Server Error',
      );
      console.error('Error: ', err);
    }
  };

  return {
    getAllBands,
    getBand,
    addBand,
    fetchBandMembersWithoutCaptain,
    updateBand,
  };
};
