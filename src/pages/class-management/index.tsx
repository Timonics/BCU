import React from "react";
import { classes } from "../../utils/listings";
import { Link, useLocation } from "react-router";
import useStates from "../../hooks/useStates";
import AllClassMembers from "./AllClassMembers";
import ClassInfo from "./ClassInfo";
import CreateNewClass from "./CreateNewClass";

const ClassManagement: React.FC = () => {
  const location = useLocation();
  const { isCreateNewClassOpen, setIsCreateNewClassOpen } = useStates();

  let classesName: string;
  const queryPathName = location.search.split("?").at(-1);
  if (queryPathName?.includes("%20"))
    classesName = queryPathName.replaceAll("%20", " ");
  else classesName = queryPathName!;

  const classesElements = classes.map((classname) => {
    return (
      <Link
        to={`?${classname.trim()}`}
        className={`text-[13px] text-[#344054] font-semibold ${
          classname === classesName &&
          "bg-[#009AF4]/30 text-[#009AF4] p-3 rounded-md transition ease-in-out duration-300 scale-105"
        }`}
      >
        {classname}
      </Link>
    );
  });
  return (
    <section className="flex flex-col relative h-full">
      {!location.search && (
        <div className="flex w-full gap-2 p-4">
          <div className="w-1/4 bg-[#F9FAFB] border-[1.42px] flex flex-col gap-2 border-black/30 p-4 rounded-xl">
            <p className="text-xs text-black/75">Total Classes</p>
            <p className="text-black/85 pops font-bold">4</p>
          </div>
          <div className="w-1/4 bg-[#F9FAFB] border-[1.42px] flex flex-col gap-2 border-black/30 p-4 rounded-xl">
            <p className="text-xs text-black/75">Total Leaders</p>
            <p className="text-black/85 pops font-bold">60</p>
          </div>
          <div className="w-1/4 bg-[#F9FAFB] border-[1.42px] flex flex-col gap-2 border-black/30 p-4 rounded-xl">
            <p className="text-xs text-black/75">Total Male</p>
            <p className="text-black/85 pops font-bold">1000</p>
          </div>
          <div className="w-1/4 bg-[#F9FAFB] border-[1.42px] flex flex-col gap-2 border-black/30 p-4 rounded-xl">
            <p className="text-xs text-black/75">Total Female</p>
            <p className="text-black/85 pops font-bold">1200</p>
          </div>
        </div>
      )}
      <div className="flex gap-4 px-4">
        <div className={`border-[1.42px] w-[230px] h-fit bg-[#F9FAFB] flex flex-col gap-2 border-black/30 rounded-xl ${location.search && "mt-4"}`}>
          <p className="border-b border-black/30 p-4 text-xl font-bold flex gap-3 items-center">
            Classes
          </p>
          <div className="flex flex-col p-4 gap-4 pops">
            <Link
              to={""}
              className={`text-[13px] text-[#344054] font-semibold ${
                !location.search &&
                "bg-[#009AF4]/30 text-[#009AF4] p-3 rounded-md transition ease-in-out duration-300 scale-105"
              }`}
            >
              All Classes
            </Link>
            {classesElements}
          </div>
        </div>
        {location.search ? (
          <ClassInfo
            classesName={classesName}
            classesYears={50}
            nextAnniversary="21/08/2025"
          />
        ) : (
          <div className="border-[1.42px] bg-[#F9FAFB] flex flex-col gap-2 border-black/30 rounded-xl w-full">
            <AllClassMembers />
          </div>
        )}
      </div>
      {isCreateNewClassOpen && (
        <>
          <div className="fixed inset-0 backdrop-blur-xs flex justify-center items-center border" onClick={() => setIsCreateNewClassOpen(false)}/>
          <CreateNewClass />
        </>
      )}
    </section>
  );
};

export default ClassManagement;
