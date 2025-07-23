import { toast } from 'react-toastify';
import axios from 'axios';
import {
  AddLeaderShipData,
  LeadershipResponse,
} from '../interfaces/leadership';
import { useAuthStore } from '../stores/authStore';
import { useLeaderStore } from '../stores/leadershipStore';
import { useLoadingStore } from '../stores/loadingStore';
import { url } from '../utils/db_url';

export const useLeadership = () => {
  const dbUrl = `${url}leadership/`;

  const { token } = useAuthStore();
  const { setIsLoading } = useLoadingStore();
  const { setLeaderPositions } = useLeaderStore();

  const getAllLeadershipPosition = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${dbUrl}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const leadershipResponse = response.data as LeadershipResponse;
      setLeaderPositions(leadershipResponse.data);
    } catch (err: any) {
      toast.error(err.message);
      console.error('Error: ', err);
    } finally {
      setIsLoading(false);
    }
  };

  const addLeadershipPosition = async (
    addLeadershipData: AddLeaderShipData,
  ) => {
    setIsLoading(true);
    try {
      await axios.post(`${dbUrl}`, addLeadershipData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success('Successfully added leadership');
      window.location.reload();
    } catch (err: any) {
      toast.error(
        err.response
          ? (err.response.data.message as string).includes('duplicate')
            ? 'Leadership positon already exists'
            : err.response.data.message
          : err.message,
      );
      console.error('Error: ', err);
    } finally {
      setIsLoading(false);
    }
  };

  return { getAllLeadershipPosition, addLeadershipPosition };
};
