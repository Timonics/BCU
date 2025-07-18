import axios from 'axios';
import { useAuthStore } from '../stores/authStore';
import { MemberDetails, MemberResponse } from '../interfaces/member';
import { useMembershipStore } from '../stores/membershipStore';
import { useLoadingStore } from '../stores/loadingStore';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';

export const useMembership = () => {
  const navigate = useNavigate();
  const { token } = useAuthStore();
  const { setIsLoading, setMemberLoading } = useLoadingStore();
  const { setMembers } = useMembershipStore();
  const dbUrl = 'https://bcu-backend-ckde.onrender.com/members';

  const getAllMembers = async (
    query?: string,
    page?: number,
    limit?: number,
  ) => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${dbUrl}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          query,
          page,
          limit,
        },
      });
      const membershipResponse = response.data as MemberResponse;
      setMembers(membershipResponse.data.members);
      setIsLoading(false);
    } catch (err) {
      toast.error('Error fetching members');
      console.error('Error: ', err);
    } finally {
      setIsLoading(false);
    }
  };

  const getMember = async (memberId: number) => {
    try {
      const response = await axios.get(`${dbUrl}/${memberId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const memberResponse = response.data;
      console.log(memberResponse);
    } catch (err) {
      toast.error('Error fetching member');
      console.error('Error: ', err);
    } finally {
      setIsLoading(false);
    }
  };

  const addMember = async (memberData: Partial<MemberDetails>) => {
    setMemberLoading(true);
    try {
      await axios.post(`${dbUrl}/add-member`, memberData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success('Successfully added member');
      navigate('/members', { state: { shouldRefresh: true } });
    } catch (err: any) {
      toast.error(
        err.response.data ? err.response.data.message : 'Internal Server Error',
      );
      console.error('Error: ', err);
    } finally {
      setMemberLoading(false);
    }
  };

  return { getAllMembers, getMember, addMember };
};
