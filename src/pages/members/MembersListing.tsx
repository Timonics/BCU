import { useEffect, useState } from 'react';
import { LuCloudDownload } from 'react-icons/lu';
import { TbPlus, TbUser } from 'react-icons/tb';
import { viewOptions } from '../../constants/viewOptions';
import { Link, useLocation, useNavigate } from 'react-router';
import { useMembership } from '../../hooks/useMembership';
import { useMembershipStore } from '../../stores/membershipStore';
import Loading from '../../components/loader';
import { useLoadingStore } from '../../stores/loadingStore';
import { colorCode } from '../../utils/colorCode';
import { MdKeyboardArrowDown } from 'react-icons/md';
import Pagination from '../../components/pagination';
import useStates from '../../hooks/useStates';
import UpdateMember from './update-member';
import Action from '../../components/action';
import ViewMember from './view-member';

interface MemberProps {
  gender: string | null;
  band: string | null;
  unit: string | null;
  churchclass: string | null;
  filterIsSelected: boolean;
  searchTerm: string;
  genderIsOpen?: boolean;
  bandIsOpen?: boolean;
  unitIsOpen?: boolean;
  classIsOpen?: boolean;
  setGenderIsOpen?: (value: React.SetStateAction<boolean>) => void;
  setBandIsOpen?: (value: React.SetStateAction<boolean>) => void;
  setUnitIsOpen?: (value: React.SetStateAction<boolean>) => void;
  setClassIsOpen?: (value: React.SetStateAction<boolean>) => void;
}

const MembersListing = ({
  gender,
  band,
  unit,
  filterIsSelected,
  searchTerm,
  genderIsOpen,
  bandIsOpen,
  unitIsOpen,
  classIsOpen,
  setGenderIsOpen,
  setBandIsOpen,
  setUnitIsOpen,
  setClassIsOpen,
}: MemberProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { getAllMembers } = useMembership();
  const {
    setUpdateMemberIsOpen,
    setSelectedMember,
    updateMemberIsOpen,
    selectedMember,
    viewMemberIsOpen,
    setViewMemberIsOpen,
  } = useStates();
  const { isLoading, setIsLoading } = useLoadingStore();
  const { members, memberMetadata } = useMembershipStore();
  let memberPageIsActive: boolean = false;
  if (location.pathname === '/members') memberPageIsActive = true;

  const [orderSortOpen, setOrderSortOpen] = useState<boolean>(false);
  const [valueSortOpen, setValueSortOpen] = useState<boolean>(false);
  const [entriesSortOpen, setEntiresSortOpen] = useState<boolean>(false);
  const [filterSelected, setFilterSelected] = useState<string>('View all');
  const [sortOrderSelected, setSortOrderSelected] = useState<string>('');
  const [numberOfEntriesSelected, setNumberOfEntriesSelected] =
    useState<string>('');
  const [sortValueSelected, setSortValueSelected] = useState<string>('');
  const [sortOrder, setSortOrder] = useState<string>('');
  const [sortValue, setSortValue] = useState<string>('');
  const [entriesValue, setEntriesValue] = useState<number>(10);

  useEffect(() => {
    if (location.state?.shouldRefresh) setIsLoading(true);
    getAllMembers();

    navigate(location.pathname, { state: { shouldRefresh: false } });
  }, [location.state?.shouldRefresh]);

  const viewOptionsElement = viewOptions.map((option, index) => (
    <button
      key={index}
      className={`border-gray-950/30 py-1.5 px-2 ${
        index === 0 ? 'rounded-l-lg border' : 'border border-l-0'
      } ${index === 3 && 'rounded-r-lg'} cursor-pointer ${
        filterSelected.toLowerCase() === option.type.toLowerCase() &&
        'bg-black/15 font-semibold'
      }`}
      onClick={() => setFilterSelected(option.type)}
    >
      {option.type}
    </button>
  ));

  const filteredMembers = members.filter(
    (member) =>
      (gender === '' ||
        member.gender.toLowerCase() === gender?.toLowerCase()) &&
      (band === '' ||
        member.band?.name?.toLowerCase() === `${band} band`.toLowerCase()) &&
      (unit === '' || member.unit?.name?.toLowerCase() === unit?.toLowerCase()),
    // (churchclass === '' ||
    //   member.churchInformation.committee.toLowerCase() ===
    //     churchclass?.toLowerCase()),
  );

  const baseMembers = filterIsSelected
    ? searchTerm
      ? filteredMembers.filter((member) =>
          `${member.firstName}${' '}${member.lastName}`
            .replace(' ', '')
            .toLowerCase()
            .includes(searchTerm.replace(' ', '').toLowerCase()),
        )
      : filteredMembers
    : searchTerm
      ? members.filter((member) =>
          `${member.firstName}${' '}${member.lastName}`
            .replace(' ', '')
            .toLowerCase()
            .includes(searchTerm.replace(' ', '').toLowerCase()),
        )
      : members;

  const statusFilteredMembers =
    filterSelected === 'View all'
      ? baseMembers
      : baseMembers.filter(
          (member) =>
            member.status.toLowerCase() === filterSelected.toLowerCase(),
        );

  const membersElements = statusFilteredMembers.length ? (
    statusFilteredMembers.map((member) => {
      const { color, background } = colorCode(member.status);
      return (
        <div className="grid grid-cols-9 items-center px-2 py-4 text-xs font-medium text-black/75">
          <p className="">{member.id}</p>
          <div className="col-span-2 flex items-center gap-1">
            <div className="flex items-center justify-center size-8 rounded-full bg-slate-400">
              <TbUser size={13} />
            </div>
            <p>
              {member.firstName} {member.lastName}
            </p>
          </div>
          <p className="">{member.gender}</p>
          <p className="">{member.band?.name ?? '--'}</p>
          <p className="">{member.unit?.name ?? '--'}</p>
          <p className="">--</p>
          <p
            className="border w-fit text-[10px] p-2 rounded-3xl"
            style={{
              color,
              backgroundColor: background,
            }}
          >
            {member.status.split('')[0].toUpperCase() + member.status.slice(1)}
          </p>
          <Action
            onEdit={() => {
              setUpdateMemberIsOpen(true);
              setSelectedMember(member);
            }}
            onView={() => {
              setViewMemberIsOpen(true);
              setSelectedMember(member);
            }}
          />
        </div>
      );
    })
  ) : (
    <div className="h-[210px] relative flex items-center justify-center">
      {isLoading && <Loading />}
      <p className="text-3xl font-bold pops">
        {filterSelected === 'View all'
          ? filterIsSelected && !filteredMembers.length
            ? 'No Data found for the selected filter'
            : 'Add Members to view'
          : `No ${filterSelected} Members`}
      </p>
    </div>
  );

  const sortByOrderElements = (
    <div className="absolute top-[35px] rounded-lg bg-white left-0 w-full shadow-2xl">
      {[
        { name: 'Ascending Order', sortOrder: 'ASC' },
        { name: 'Descending Order', sortOrder: 'DESC' },
      ].map((order, index) => (
        <div
          key={index}
          className="p-2 hover:bg-gray-100 cursor-pointer rounded-lg"
          onClick={() => {
            setOrderSortOpen(false);
            setSortOrderSelected(order.name);
            setSortOrder(order.sortOrder);
            getAllMembers(
              memberMetadata ? memberMetadata.currentPage : 1,
              entriesValue,
              sortValue ? sortValue : '',
              order.sortOrder,
            );
          }}
        >
          {order.name}
        </div>
      ))}
    </div>
  );

  const sortByValueElements = (
    <div className="absolute top-[35px] z-10 rounded-lg bg-white left-0 w-full shadow-2xl">
      {[
        { name: 'ID', sortValue: 'id' },
        { name: 'Gender', sortValue: 'gender' },
        { name: 'First name', sortValue: 'firstName' },
        { name: 'Last name', sortValue: 'lastName' },
      ].map((value, index) => (
        <div
          key={index}
          className="p-2 hover:bg-gray-100 cursor-pointer rounded-lg"
          onClick={() => {
            setValueSortOpen(false);
            setSortValueSelected(value.name);
            setSortValue(value.sortValue);
            getAllMembers(
              memberMetadata ? memberMetadata.currentPage : 1,
              entriesValue,
              value.sortValue,
              sortOrder ? sortOrder : '',
            );
          }}
        >
          {value.name}
        </div>
      ))}
    </div>
  );

  const numberOfEntriesElements = (
    <div className="absolute top-[35px] z-10 rounded-lg bg-white left-0 w-full shadow-2xl">
      {[
        { name: '5 entries', entries: 5 },
        { name: '10 entries', entries: 10 },
        { name: '20 entries', entries: 20 },
        { name: '30 entries', entries: 30 },
        { name: '40 entries', entries: 40 },
        { name: '50 entries', entries: 50 },
      ].map((entries, index) => (
        <div
          key={index}
          className="p-2 hover:bg-gray-100 cursor-pointer rounded-lg"
          onClick={() => {
            setEntiresSortOpen(false);
            setNumberOfEntriesSelected(entries.name);
            setEntriesValue(entries.entries);
            getAllMembers(
              memberMetadata ? memberMetadata.currentPage : 1,
              entries.entries,
              sortValue ? sortValue : '',
              sortOrder ? sortOrder : '',
            );
          }}
        >
          {entries.name}
        </div>
      ))}
    </div>
  );

  return (
    <div
      className="section mb-6"
      onClick={() => {
        orderSortOpen && setOrderSortOpen(false);
        valueSortOpen && setValueSortOpen(false);
        entriesSortOpen && setEntiresSortOpen(false);
        genderIsOpen && setGenderIsOpen?.(false);
        bandIsOpen && setBandIsOpen?.(false);
        unitIsOpen && setUnitIsOpen?.(false);
        classIsOpen && setClassIsOpen?.(false);
      }}
    >
      <div className="flex justify-between items-center p-4 border-b border-black/30 ">
        <p className="text-base font-bold flex gap-3 items-center">
          Members Listing
        </p>
        {memberPageIsActive ? (
          <Link
            to={'add-member'}
            className="flex items-center gap-1 cursor-pointer text-white text-sm bg-[#009AF4] px-6 py-2.5 rounded-lg"
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
      <div className=" flex items-center justify-between px-2 py-4 border-b border-black/30">
        <div className="flex text-xs">{viewOptionsElement}</div>
        <div className="flex items-center gap-4 text-sm mr-4 font-semibold">
          <div className="flex flex-col items-center justify-center gap-1">
            <p className="text-xs">Sort by Order</p>
            <div
              className="bg-blue-50 rounded-lg px-6 py-1.5 flex items-center justify-between gap-4 relative cursor-pointer"
              onClick={() => {
                setOrderSortOpen(!orderSortOpen);
              }}
            >
              {sortOrderSelected ? sortOrderSelected : 'Ascending Order'}
              <MdKeyboardArrowDown />
              {orderSortOpen && sortByOrderElements}
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-1">
            <p className="text-xs">Sort by value</p>
            <div
              className="bg-blue-50 rounded-lg px-8 py-1.5 flex items-center justify-between gap-4 relative cursor-pointer"
              onClick={() => {
                setValueSortOpen(!valueSortOpen);
              }}
            >
              {sortValueSelected ? sortValueSelected : 'ID'}
              <MdKeyboardArrowDown />
              {valueSortOpen && sortByValueElements}
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-1">
            <p className="text-xs">Number of entries</p>
            <div
              className="bg-blue-50 rounded-lg px-8 py-1.5 flex items-center justify-between gap-4 relative cursor-pointer"
              onClick={() => {
                setEntiresSortOpen(!entriesSortOpen);
              }}
            >
              {numberOfEntriesSelected ? numberOfEntriesSelected : '10 entries'}
              <MdKeyboardArrowDown />
              {entriesSortOpen && numberOfEntriesElements}
            </div>
          </div>
        </div>
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
        <div className="relative">
          {isLoading && <Loading />}
          {membersElements}
        </div>
        <Pagination
          currentPage={memberMetadata?.currentPage!}
          totalPages={memberMetadata?.totalPages!}
          hasNext={memberMetadata?.hasNext!}
          hasPrev={memberMetadata?.hasPrev!}
          onPageChange={(page: number = memberMetadata?.currentPage!) =>
            getAllMembers(
              page,
              entriesValue ? entriesValue : 10,
              sortOrder ? sortOrder : '',
              sortValue ? sortValue : '',
            )
          }
        />
      </div>
      {updateMemberIsOpen && (
        <>
          <div
            onClick={() => setUpdateMemberIsOpen(false)}
            className="fixed top-0 right-0 w-full backdrop-blur-sm h-full"
          />
          <UpdateMember
            member={selectedMember}
            setUpdateMemberIsOpen={setUpdateMemberIsOpen}
          />
        </>
      )}
      {viewMemberIsOpen && (
        <>
          <div
            onClick={() => setViewMemberIsOpen(false)}
            className="fixed top-0 right-0 w-full backdrop-blur-sm h-full"
          />
          <ViewMember
            member={selectedMember!}
            setViewMemberIsOpen={setViewMemberIsOpen}
          />
        </>
      )}
    </div>
  );
};

export default MembersListing;
