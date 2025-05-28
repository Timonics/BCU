export interface Member {
  id: number;
  name: string;
  gender: string;
  band: string;
  unit: string;
  class: string;
  status: string;
}

export interface MembershipState {
  members: MemberDetails[];
  setMembers: (value: MemberDetails[]) => void;
}

export interface MemberResponse {
  message: string;
  data: MemberDetails[];
  meta: MemberMetaData;
}

export interface MemberDetails {
  academicsQualification: {
    LGA: string;
    courseOfStudy: string;
    endDate: string;
    institution: string;
    officeAddress: string;
    origin: string;
    placeOfWork: string;
    professionalQualification: string;
    qualification: string;
    startDate: string;
    state: string;
    vocationalQualification: string;
  };
  churchInformation: {
    band: string;
    baptisimalLocation: string;
    baptisimalStatus: string;
    committee: string;
    nextKinName: string;
    nextKinPhone: string;
    nextKinRelationship: string;
    ordinationRank: string;
    unit: string;
  };
  createdAt: string;
  memberId: string;
  personalDetails: {
    LGA: string;
    address: string;
    city: string;
    country: string;
    dob: string;
    email: string;
    gender: string;
    maritalStatus: string;
    "name.first": string;
    "name.last": string;
    "name.other": string;
    origin: string;
    "phone.value": string;
    state: string;
  };
  status: string;
  updatedAt: string;
  __v: number;
  _id: string;
}

export interface MemberMetaData {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  limit: number | null;
  page: number | null;
  total: number;
  totalPages: number | null;
}
