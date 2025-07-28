import Loading from '../../components/loader';
import { useLoadingStore } from '../../stores/loadingStore';
import { useUnitStore } from '../../stores/unitStore';
import Action from '../../components/action';
import useStates from '../../hooks/useStates';

export default function UnitMembers() {
  const { selectedUnit } = useUnitStore();
  const { isLoading } = useLoadingStore();

  const {
    setUpdateUnitMemberIsOpen,
    setSelectedMember,
    setViewUnitMemberIsOpen,
  } = useStates();

  const memberElements = selectedUnit?.members?.length ? (
    selectedUnit.members?.map((member) => (
      <div className="grid grid-cols-9 p-4">
        <p className="text-black/90 text-[12px] font-medium pops">
          {member.id}
        </p>
        <p className="text-black/90 col-span-2 text-[12px] font-medium pops">
          {member.firstName} {member.lastName}
        </p>
        <p className="text-black/90 text-[12px] font-medium pops">
          {member.gender}
        </p>
        <p className="text-black/90 text-[12px] font-medium pops">
          {member.phoneNumber}
        </p>
        <p className="text-black/90 text-[12px] font-medium pops">
          {member.dateOfBirth}
        </p>
        <p className="text-black/90 text-[12px] font-medium pops">
          {member.maritalStatus}
        </p>
        <p className="text-black/90 text-[12px] font-medium pops">
          {member.country}
        </p>
        <Action
          onEdit={() => {
            setUpdateUnitMemberIsOpen(true);
            setSelectedMember(member);
          }}
          onView={() => {
            setSelectedMember(member);
            setViewUnitMemberIsOpen(true);
          }}
          onDelete={() => {
            setSelectedMember(member);
          }}
        />
      </div>
    ))
  ) : (
    <div className="h-[210px] flex justify-center items-center">
      <p className="text-2xl font-bold pops">Add Unit Members to view</p>
    </div>
  );

  return (
    <div className="relative">
      {memberElements}
      {isLoading && <Loading />}
    </div>
  );
}
