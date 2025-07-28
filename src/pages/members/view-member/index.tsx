import Logo from '../../../components/logo';
import { MemberDetails } from '../../../interfaces/member';

const ViewMember = ({
  member,
  setViewMemberIsOpen,
}: {
  member: MemberDetails;
  setViewMemberIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="absolute overflow-hidden rounded-lg top-1/2 bg-white -translate-y-1/2 right-1/2 translate-x-1/2 flex flex-col w-[60%] h-[85%] shadow-xl shadow-blue-200">
      <div className="absolute top-2 -right-50 opacity-5">
        <Logo size={700} width={800} />
      </div>
      <button
        onClick={() => setViewMemberIsOpen(false)}
        className="z-20 cursor-pointer w-fit ml-auto mt-2 mr-2 h-fit px-3 py-1.5 pops text-sm rounded-lg bg-[#009AF4] hover:bg-[#0086f4] text-white font-semibold"
      >
        Back
      </button>
      <div className="absolute top-2 left-2">
        <Logo size={50} />
      </div>
      <div className="w-full overflow-auto flex flex-col p-4 z-20">
        <div className="mt-4 overflow-auto flex flex-col p-4 gap-2">
          <p className="text-5xl font-bold">
            {member.firstName} {member.otherNames} {member.lastName}
          </p>
          <p className="p-1">{member.email}</p>
          <div className="p-2 space-y-6 overflow-auto scroll">
            <div className="flex flex-col gap-2 p-2 rounded-lg bg-blue-50/50">
              <h2 className="text-3xl font-semibold underline underline-offset-3">
                Bio Data
              </h2>
              <div className="flex flex-col gap-1 overflow-auto">
                <div className="flex items-center gap-2 mt-2">
                  <p className="text-lg font-medium">Name(s): </p>
                  <p className="text-xl pops">
                    {member.firstName} {member.otherNames} {member.lastName}
                  </p>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <p className="text-lg font-medium">Email Address: </p>
                  <p className="text-xl pops">{member.email}</p>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <p className="text-lg font-medium">Phone Number: </p>
                  <p className="text-xl pops">{member.phoneNumber}</p>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <p className="text-lg font-medium">Gender: </p>
                  <p className="text-xl pops">{member.gender}</p>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <p className="text-lg font-medium">Date of Birth: </p>
                  <p className="text-xl pops">{member.dateOfBirth}</p>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <p className="text-lg font-medium">Marital Status: </p>
                  <p className="text-xl pops">{member.maritalStatus}</p>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <p className="text-lg font-medium">State of Origin: </p>
                  <p className="text-xl pops">{member.stateOfOrigin}</p>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <p className="text-lg font-medium">Address: </p>
                  <p className="text-xl pops">{member.address}</p>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <p className="text-lg font-medium">Country: </p>
                  <p className="text-xl pops">{member.country}</p>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <p className="text-lg font-medium">Residential State: </p>
                  <p className="text-xl pops">{member.residentialState}</p>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <p className="text-lg font-medium">City: </p>
                  <p className="text-xl pops">{member.city}</p>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <p className="text-lg font-medium">Local Government Area: </p>
                  <p className="text-xl pops">{member.localGovernmentArea}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 p-2 rounded-lg bg-blue-50/50">
              <h2 className="text-3xl font-semibold underline underline-offset-3">
                Church Information
              </h2>
              <div className="flex flex-col gap-1 overflow-auto">
                <div className="flex items-center gap-2 mt-2">
                  <p className="text-lg font-medium">Present Band: </p>
                  <p className="text-xl pops">
                    {member.band ? member.band.name : '----'}
                  </p>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <p className="text-lg font-medium">Unit: </p>
                  <p className="text-xl pops">
                    {member.unit ? member.unit.name : '----'}
                  </p>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <p className="text-lg font-medium">Baptismal Status: </p>
                  <p className="text-xl pops">
                    {member.baptismalStatus
                      ? 'Already Baptized'
                      : 'Not yet Baptized'}
                  </p>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <p className="text-lg font-medium">Baptismal Location: </p>
                  <p className="text-xl pops">
                    {member.locationOfBaptism
                      ? member.locationOfBaptism
                      : '----'}
                  </p>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <p className="text-lg font-medium">Next of Kin Full Name: </p>
                  <p className="text-xl pops">
                    {member.nextOfKinFullName
                      ? member.nextOfKinFullName
                      : '----'}
                  </p>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <p className="text-lg font-medium">
                    Next of Kin Relationship:{' '}
                  </p>
                  <p className="text-xl pops">
                    {member.nextOfKinRelationship
                      ? member.nextOfKinRelationship
                      : '----'}
                  </p>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <p className="text-lg font-medium">
                    Next of Kin Phone Number:{' '}
                  </p>
                  <p className="text-xl pops">
                    {member.nextOfKinPhoneNumber
                      ? member.nextOfKinPhoneNumber
                      : '----'}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 p-2 rounded-lg bg-blue-50/50">
              <h2 className="text-3xl font-semibold underline underline-offset-3">
                Academics Information
              </h2>
              <div className="flex flex-col gap-1 overflow-auto">
                <div className="flex items-center gap-2 mt-2">
                  <p className="text-lg font-medium">Institution Name: </p>
                  <p className="text-xl pops">
                    {member.institutionName ? member.institutionName : '----'}
                  </p>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <p className="text-lg font-medium">Qualifications: </p>
                  <p className="text-xl pops">
                    {member.qualification ? member.qualification : '----'}
                  </p>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <p className="text-lg font-medium">Course Of Study: </p>
                  <p className="text-xl pops">
                    {member.courseOfStudy ? member.courseOfStudy : '----'}
                  </p>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <p className="text-lg font-medium">Start Date: </p>
                  <p className="text-xl pops">
                    {member.startDate ? member.startDate : '----'}
                  </p>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <p className="text-lg font-medium">End Date: </p>
                  <p className="text-xl pops">
                    {member.endDate ? member.endDate : '----'}
                  </p>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <p className="text-lg font-medium">
                    Professional Qualifications:{' '}
                  </p>
                  <p className="text-xl pops">
                    {member.professionalQualifications
                      ? member.professionalQualifications
                      : '----'}
                  </p>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <p className="text-lg font-medium">
                    Vocational Qualifications:{' '}
                  </p>
                  <p className="text-xl pops">
                    {member.vocationalQualification
                      ? member.vocationalQualification
                      : '----'}
                  </p>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <p className="text-lg font-medium">Place Of Work: </p>
                  <p className="text-xl pops">
                    {member.placeOfWork ? member.placeOfWork : '----'}
                  </p>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <p className="text-lg font-medium">Office Address: </p>
                  <p className="text-xl pops">
                    {member.officeAddress ? member.officeAddress : '----'}
                  </p>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <p className="text-lg font-medium">Country: </p>
                  <p className="text-xl pops">
                    {member.country ? member.country : '----'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewMember;
