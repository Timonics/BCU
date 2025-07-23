import axios from 'axios';
import { useAuthStore } from '../stores/authStore';
import { MemberDetails, MemberResponse } from '../interfaces/member';
import { useMembershipStore } from '../stores/membershipStore';
import { useLoadingStore } from '../stores/loadingStore';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import { url } from '../utils/db_url';

export const useMembership = () => {
  const navigate = useNavigate();
  const { token } = useAuthStore();
  const { setIsLoading, setMemberLoading } = useLoadingStore();
  const { setMembers, setMemberMetadata } = useMembershipStore();
  const dbUrl = `${url}members/`;

  const getAllMembers = async (
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

      const membershipResponse = response.data as MemberResponse;
      
      setMembers(
        typeof membershipResponse.data === 'object'
          ? membershipResponse.data.members
          : [],
      );
      setMemberMetadata(
        typeof membershipResponse.data === 'object'
          ? membershipResponse.data.meta
          : {},
      );
      setIsLoading(false);
    } catch (err: any) {
      toast.error(err.message ? err.message : 'Error fetching members');
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
