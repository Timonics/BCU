import React from "react";
import Analytics from "./Analytics";
import DashMembers from "./DashMembers";

const Dashboard: React.FC = () => {
  return (
    <div className="p-2 flex flex-col gap-5 w-full">
      <Analytics />
      <div className="p-2">
        <DashMembers />
      </div>
    </div>
  );
};

export default Dashboard;
