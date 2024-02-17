import {
  FaCopy,
  FaPalette,
  FaTrash,
  FaUserPlus,
} from "react-icons/fa6";
import { FaArchive } from "react-icons/fa";

export const notesHomeIcons = [
  {
    icon: <FaArchive />,
    title: "Archive",
    size: "30",
    method:"Archive",
},
{
    icon: <FaPalette />,
    title: "Theme",
    size: "30",
    method:"Theme",
},
{
    icon: <FaUserPlus />,
    title: "Add Collaborator",
    size: "30",
    method:"Collaborator",
},
{
    icon: <FaCopy />,
    title: "Copy Notes",
    size: "30",
    method:"Copy",
},
{
    icon: <FaTrash />,
    title: "Move To Bin",
    size: "30",
    method:"Trash",
},
];
