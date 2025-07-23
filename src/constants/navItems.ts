import { LuBoxes, LuCrown, LuLayers } from "react-icons/lu";
import { PiNotebookBold } from "react-icons/pi";
import { TbUsers } from "react-icons/tb";

export const navItems = [
    {
      name: "Members",
      icon: TbUsers,
      link: "members",
      dropdown: [
        {
          name: "Add Member",
          link: "/members/add-member",
        },
        {
          name: "Members List",
          link: "/members-list",
        },
      ],
    },
    {
      name: "Leadership",
      icon: LuCrown ,
      link: "leadership",
      dropdown: [
        {
          name: "Leadership Title",
          link: "/add-leadership",
        },
        {
          name: "All Assigned Leaders",
          link: "/assigned-leaders",
        },
      ],
    },
    {
      name: "Bands",
      icon: LuBoxes ,
      link: "bands",
      dropdown: [
        {
          name: "Create Band",
          link: "/create-band",
        },
        {
          name: "Band List",
          link: "/bands-list",
        },
      ],
    },
    {
      name: "Units",
      icon: LuLayers ,
      link: "units",
      dropdown: [
        {
          name: "Create Unit",
          link: "/create-unit",
        },
        {
          name: "Unit List",
          link: "/units-list",
        },
      ],
    },
    {
      name: "Class Management",
      icon: PiNotebookBold ,
      link: "class-management",
      dropdown: [
        {
          name: "Add New Class",
          link: "/add-class",
        },
        {
          name: "Baptismal",
          link: "/baptismal",
        },
        {
          name: "ETS",
          link: "/ets",
        },
        {
          name: "Pre-Youth",
          link: "/pre-youth",
        },
      ],
    },
    // {
    //   name: "Comittees",
    //   icon: TbUsersGroup ,
    //   link: "comittees",
    //   dropdown: [
    //     {
    //       name: "Add New Committee",
    //       link: "/add-committee",
    //     },
    //   ],
    // },
  ];