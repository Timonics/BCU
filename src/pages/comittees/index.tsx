import React from "react";
import { classes } from "../../constants/listings";
import { Link, useLocation } from "react-router";
import useStates from "../../hooks/useStates";
import ComitteeInfo from "./ComitteeInfo";
import CreateNewComittee from "./CreateNewComittee";

const Comittee: React.FC = () => {
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
      <div className="flex gap-4 px-4">
        <div
          className={`border-[1.42px] w-[230px] h-fit bg-[#F9FAFB] flex flex-col gap-2 border-black/30 rounded-xl mt-4`}
        >
          <p className="border-b border-black/30 p-4 text-xl font-bold flex gap-3 items-center">
            Comittees
          </p>
          <div className="flex flex-col p-4 gap-4 pops">
            <Link
              to={""}
              className={`text-[13px] text-[#344054] font-semibold ${
                !location.search &&
                "bg-[#009AF4]/30 text-[#009AF4] p-3 rounded-md transition ease-in-out duration-300 scale-105"
              }`}
            >
              All Comittees
            </Link>
            {classesElements}
          </div>
        </div>
        <ComitteeInfo
          comitteeName={classesName}
          comitteeYears={50}
          nextAnniversary="21/08/2025"
        />
      </div>
      {isCreateNewClassOpen && (
        <>
          <div
            className="fixed inset-0 backdrop-blur-xs flex justify-center items-center border"
            onClick={() => setIsCreateNewClassOpen(false)}
          />
          <CreateNewComittee />
        </>
      )}
    </section>
  );
};

export default Comittee;
