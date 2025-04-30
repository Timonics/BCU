import React from "react";

import Analytics from "./Analytics";
import PendingApprovals from "./PendingApprovals";
import MembersListing from "../members/MembersListing";

const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-col gap-6 p-4">
      <Analytics />
      <PendingApprovals />
      <MembersListing />
    </div>
  );
};

export default Dashboard;
