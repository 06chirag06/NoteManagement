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
    method:"handleArchiveClick",
},
{
    icon: <FaPalette />,
    title: "Theme",
    size: "30",
    method:"handleThemeClick",
},
{
    icon: <FaUserPlus />,
    title: "Add Collaborator",
    size: "30",
    method:"handleCollaboratorClick",
},
{
    icon: <FaCopy />,
    title: "Copy Notes",
    size: "30",
    method:"handleCopyClick",
},
{
    icon: <FaTrash />,
    title: "Move To Bin",
    size: "30",
    method:"handleTrashClick",
},
];
