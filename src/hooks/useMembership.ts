import axios from "axios";
import { useAuthStore } from "../stores/authStore";
import { MemberResponse } from "../interfaces/member";
import { useMembershipStore } from "../stores/membershipStore";
import { useLoadingStore } from "../stores/loadingStore";

export const useMembership = () => {
  const { token } = useAuthStore();
  const { setIsLoading } = useLoadingStore();
  const { setMembers } = useMembershipStore();
  const dbUrl = "https://bcu.candsyf.org/membership";

  const getAllMembers = async (q?: string, page?: number, limit?: number) => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${dbUrl}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          q,
          page,
          limit,
        },
      });
      const membershipResponse = response.data as MemberResponse;
      console.log(membershipResponse.data);
      setMembers(membershipResponse.data);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      console.error("Error: ", err);
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
      console.error("Error: ", err);
    }
  };

  return { getAllMembers, getMember };
};
