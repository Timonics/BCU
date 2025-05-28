import Loading from "../../components/loading";
import { useLoadingStore } from "../../stores/loadingStore";
import { useUnitStore } from "../../stores/unitStore";

export default function UnitMembers() {
  const { selectedUnit } = useUnitStore();
  const { isLoading } = useLoadingStore();

  const memberElements = selectedUnit ? (
    selectedUnit.members.map((member) => (
      <div className="grid grid-cols-9 p-2 py-4">
        <p className="text-black/90 text-[10px] font-bold pops">{member._id}</p>
        <p className="text-black/90 col-span-2 text-[10px] font-bold pops">
          --
        </p>
        <p className="text-black/90 text-[10px] font-bold pops">
          {member.personalDetails.gender}
        </p>
        <p className="text-black/90 text-[10px] font-bold pops">--</p>
        <p className="text-black/90 text-[10px] font-bold pops">
          {member.personalDetails.dob}
        </p>
        <p className="text-black/90 text-[10px] font-bold pops">
          {member.status}
        </p>
        <p className="text-black/90 text-[10px] font-bold pops">--</p>
        <p className="text-black/90 text-[10px] font-bold pops">Action</p>
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
