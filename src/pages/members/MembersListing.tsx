import { useEffect, useState } from "react";
import { LuCloudDownload } from "react-icons/lu";
import {
  TbArrowLeft,
  TbArrowRight,
  TbEdit,
  TbEye,
  TbPlus,
  TbTrash,
  TbUser,
} from "react-icons/tb";
import { viewOptions } from "../../utils/viewOptions";
import { Link, useLocation } from "react-router";
import { useMembership } from "../../hooks/useMembership";
import { useMembershipStore } from "../../stores/membershipStore";
import Loading from "../../components/loading";
import { useLoadingStore } from "../../stores/loadingStore";
import { colorCode } from "../../utils/colorCode";

const MembersListing = ({
  gender,
  band,
  unit,
  churchclass,
  filterIsSelected,
  searchTerm,
}: {
  gender: string | null;
  band: string | null;
  unit: string | null;
  churchclass: string | null;
  filterIsSelected: boolean;
  searchTerm: string;
}) => {
  const { isLoading } = useLoadingStore();
  const location = useLocation();
  const { getAllMembers } = useMembership();
  const { members } = useMembershipStore();
  let memberPageIsActive: boolean = false;
  if (location.pathname === "/members") memberPageIsActive = true;

  //const [addMemberOpen, setAddMemberOpen] = useState<boolean>(false);
  const [filterSelected, setFilterSelected] = useState<string>("View all");

  useEffect(() => {
    getAllMembers();
  }, [members.length, gender, band, unit]);

  const viewOptionsElement = viewOptions.map((option, index) => (
    <button
      key={index}
      className={`border-gray-950/30 py-1.5 px-2 ${
        index === 0 ? "rounded-l-lg border" : "border border-l-0"
      } ${index === 3 && "rounded-r-lg"} cursor-pointer ${
        filterSelected.toLowerCase() === option.type.toLowerCase() &&
        "bg-black/15 font-semibold"
      }`}
      onClick={() => setFilterSelected(option.type)}
    >
      {option.type}
    </button>
  ));

  const filteredMembers = members.filter(
    (member) =>
      (gender === "" ||
        member.personalDetails.gender.toLowerCase() ===
          gender?.toLowerCase()) &&
      (band === "" ||
        member.churchInformation.band.toLowerCase() === band?.toLowerCase()) &&
      (unit === "" ||
        member.churchInformation.unit.toLowerCase() === unit?.toLowerCase()) &&
      (churchclass === "" ||
        member.churchInformation.committee.toLowerCase() ===
          churchclass?.toLowerCase())
  );

  const baseMembers = filterIsSelected
    ? searchTerm
      ? filteredMembers.filter((member) =>
          `${member.personalDetails["name.last"]}${" "}${member.personalDetails["name.last"]}`
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
        )
      : filteredMembers
    : searchTerm
    ? members.filter((member) =>
        `${member.personalDetails["name.last"]}${" "}${member.personalDetails["name.last"]}`
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      )
    : members;

  const statusFilteredMembers =
    filterSelected === "View all"
      ? baseMembers
      : baseMembers.filter(
          (member) =>
            member.status.toLowerCase() === filterSelected.toLowerCase()
        );

  const membersElements = statusFilteredMembers.length ? (
    statusFilteredMembers.map((member) => {
      const { color, background } = colorCode(member.status);
      return (
        <div className="grid grid-cols-9 items-center px-2 py-4 text-xs font-medium text-black/75">
          <p className="">{member.memberId}</p>
          <div className="col-span-2 flex items-center gap-1">
            <div className="flex items-center justify-center size-8 rounded-full bg-slate-400">
              <TbUser size={13} />
            </div>
            <p>
              {member.personalDetails["name.last"]}{" "}
              {member.personalDetails["name.first"]}
            </p>
          </div>
          <p className="">{member.personalDetails.gender}</p>
          <p className="">{member.churchInformation.band}</p>
          <p className="">{member.churchInformation.unit}</p>
          <p className="">--</p>
          <p
            className="border w-fit text-[10px] p-2 rounded-3xl"
            style={{
              color,
              backgroundColor: background,
            }}
          >
            {member.status.split("")[0].toUpperCase() + member.status.slice(1)}
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
      );
    })
  ) : (
    <div className="h-[210px] relative flex items-center justify-center">
      {isLoading && <Loading />}
      <p className="text-3xl font-bold pops">
        {filterSelected === "View all"
          ? filterIsSelected && !filteredMembers.length
            ? "No Data found for the selected filter"
            : "Add Members to view"
          : `No ${filterSelected} Members`}
      </p>
    </div>
  );

  return (
    <div className="section">
      <div className="flex justify-between items-center p-4 border-b border-black/30 ">
        <p className="text-base font-bold flex gap-3 items-center">
          Members Listing
        </p>
        {memberPageIsActive ? (
          <Link
            to={"add-member"}
            className="flex items-center gap-1 cursor-pointer text-white text-sm bg-[#009AF4] px-6 py-2.5 rounded-lg"
            //onClick={() => setAddMemberOpen(true)}
          >
            <TbPlus className="border-[1.4px] p-[0.4px] font-bold rounded-full" />
            <h3 className="text-sm font-semibold pops">Add Member</h3>
          </Link>
        ) : (
          <div className="flex items-center gap-1 text-sm border-2 border-[#009AF4] text-[#009AF4] px-6 py-2.5 rounded-lg">
            <LuCloudDownload size={20} />
            <h3 className="text-sm font-semibold pops">Export report</h3>
          </div>
        )}
      </div>
      <div className=" flex items-center px-2 py-4 border-b border-black/30">
        <div className="flex text-xs">{viewOptionsElement}</div>
      </div>
      <div className="grid grid-cols-9 p-2 py-4 border-b border-black/20 bg-black/5">
        <p className="text-black/90 text-[13px] font-bold pops">Member ID</p>
        <p className="text-black/90 col-span-2 text-[13px] font-bold pops">
          Member Name
        </p>
        <p className="text-black/90 text-[13px] font-bold pops">Gender</p>
        <p className="text-black/90 text-[13px] font-bold pops">Band</p>
        <p className="text-black/90 text-[13px] font-bold pops">Unit</p>
        <p className="text-black/90 text-[13px] font-bold pops">Class</p>
        <p className="text-black/90 text-[13px] font-bold pops">Status</p>
        <p className="text-black/90 text-[13px] font-bold pops">Action</p>
      </div>
      <div>
        {membersElements}
        <div className="p-4 flex justify-around items-center my-7">
          <button className="nav-btn">
            <TbArrowLeft size={20} />
            Previous
          </button>
          <div></div>
          <button className="nav-btn">
            Next
            <TbArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MembersListing;
