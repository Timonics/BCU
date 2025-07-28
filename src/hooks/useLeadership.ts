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
import { useNavigate } from 'react-router';

export const useLeadership = () => {
  const dbUrl = `${url}leadership/`;
  const navigate = useNavigate();
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
      navigate(location.pathname, { state: { shouldRefresh: true } });
    } catch (err: any) {
      toast.error(
        err.response
          ? (err.response.data.message as string).includes('duplicate')
            ? 'Leadership position already exists'
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
