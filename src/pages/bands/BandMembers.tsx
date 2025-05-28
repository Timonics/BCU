import Loading from "../../components/loading";
import { useBandStore } from "../../stores/bandStore";
import { useLoadingStore } from "../../stores/loadingStore";

export default function BandMembers() {
  const { selectedBand } = useBandStore();
  const { isLoading } = useLoadingStore();

  const memberElements = selectedBand ? (
    selectedBand.members.map((member) => (
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
      <p className="text-2xl font-bold pops">Add Band Members to view</p>
    </div>
  );

  return (
    <div className="relative">
      {memberElements}
      {isLoading && <Loading />}
    </div>
  );
}
