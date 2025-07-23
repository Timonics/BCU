import { TbEdit, TbEye, TbTrash } from 'react-icons/tb';
import Loading from '../../components/loading';
import { useLoadingStore } from '../../stores/loadingStore';
import { useUnitStore } from '../../stores/unitStore';

export default function UnitMembers() {
  const { selectedUnit } = useUnitStore();
  const { isLoading } = useLoadingStore();

  console.log(selectedUnit);

  const memberElements = selectedUnit?.members?.length ? (
    selectedUnit.members?.map((member) => (
      <div className="grid grid-cols-9 p-4">
        <p className="text-black/90 text-[12px] font-medium pops">{member.id}</p>
        <p className="text-black/90 col-span-2 text-[12px] font-medium pops">
          {member.firstName} {member.lastName}
        </p>
        <p className="text-black/90 text-[12px] font-medium pops">
          {member.gender}
        </p>
        <p className="text-black/90 text-[12px] font-medium pops">
          {member.phoneNumber}
        </p>
        <p className="text-black/90 text-[12px] font-medium pops">{member.dateOfBirth}</p>
        <p className="text-black/90 text-[12px] font-medium pops">
          {member.maritalStatus}
        </p>
        <p className="text-black/90 text-[12px] font-medium pops">
          {member.country}
        </p>
        <p className="p-1 bg-gray-100 w-fit rounded-full items-center justify-center flex">
          <button className="hover:bg-gray-200 p-1.5 rounded-full cursor-pointer transition ease-in-out duration-300 hover:text-blue-500 text-gray-600">
            <TbEdit size={20} />
          </button>
          <hr />
          <div className="hover:bg-gray-200 p-1.5 rounded-full  cursor-pointer transition ease-in-out duration-300 hover:text-purple-800 text-gray-600">
            <TbEye size={20} />
          </div>
          <button className="hover:bg-gray-200 p-1.5 rounded-full  cursor-pointer transition ease-in-out duration-300 hover:text-red-500 text-gray-600">
            <TbTrash size={20} />
          </button>
        </p>
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
