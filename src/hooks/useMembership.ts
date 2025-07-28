import axios from 'axios';
import { useAuthStore } from '../stores/authStore';
import { MemberDetails, MemberResponse } from '../interfaces/member';
import { useMembershipStore } from '../stores/membershipStore';
import { useLoadingStore } from '../stores/loadingStore';
import { useLocation, useNavigate } from 'react-router';
import { url } from '../utils/db_url';
import { showError, showSuccess } from '../utils/toast';

export const useMembership = () => {
  const navigate = useNavigate();
  const location = useLocation();
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
      showError(
        err.response ? err.response.data.message : 'Error fetching members',
      );
      console.error('Error: ', err);
    } finally {
      setIsLoading(false);
    }
  };

  const getMember = async (memberId: number) => {
    try {
      const response = await axios.get(`${dbUrl}${memberId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const memberResponse = response.data;
      console.log(memberResponse);
    } catch (err) {
      showError('Error fetching member');
      console.error('Error: ', err);
    } finally {
      setIsLoading(false);
    }
  };

  const addMember = async (memberData: Partial<MemberDetails>) => {
    setMemberLoading(true);
    try {
      await axios.post(`${dbUrl}add-member`, memberData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      showSuccess('Successfully added member');
      navigate(`${location.pathname}`, { state: { shouldRefresh: true } });
    } catch (err: any) {
      showError(
        err.response.data ? err.response.data.message : 'Internal Server Error',
      );
      console.error('Error: ', err);
    } finally {
      setMemberLoading(false);
    }
  };

  const updateMember = async (
    memberId: number,
    memberData: Partial<MemberDetails>,
  ) => {
    try {
      await axios.put(`${dbUrl}update-member/${memberId}`, memberData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      showSuccess('Successfully updated member');
      navigate(`${location.pathname}?${location.search}`, {
        state: { shouldRefresh: true },
      });
    } catch (err: any) {
      showError(
        err.response.data ? err.response.data.message : 'Internal Server Error',
      );
      console.error('Error: ', err);
    }
  };

  return { getAllMembers, getMember, addMember, updateMember };
};
