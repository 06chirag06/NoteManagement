import {
  FaBold,
  FaUnderline,
  FaItalic,
  FaFont,
  FaAlignLeft,
  FaAlignCenter,
  FaAlignRight,
  FaAlignJustify,
  FaPalette,
} from "react-icons/fa6";
import { AiOutlineFontSize } from "react-icons/ai";

export const settingsBar = [
  {
    icon: <FaBold />,
    isDropdown: false,
    title:"Bold",
  },
  {
    icon: <FaUnderline />,
    isDropdown: false,
    title:"Underline",
  },
  {
    icon: <FaItalic />,
    isDropdown: false,
    title:"Italic",
  },
  {
    icon: <AiOutlineFontSize />,
    isDropdown: true,
    isFontSize: true,
    title:"Font Size",
  },
  {
    icon: <FaFont />,
    isDropdown: true,
    title:"Fonts",
  },
  {
    icon: <FaAlignLeft />,
    isDropdown: false,
    title:"Left Align",
  },
  {
    icon: <FaAlignCenter />,
    isDropdown: false,
    title:"Center Align",
  },
  {
    icon: <FaAlignRight />,
    isDropdown: false,
    title:"Right Align",
  },
  {
    icon: <FaAlignJustify />,
    isDropdown: false,
    title:"Justify",
  },
  {
    icon: <FaPalette />,
    isDropdown: false,
    title:"Theme",
  },
];

export const fontSize = [
  {
    size: "11px",
  },
  {
    size: "12px",
  },
  {
    size: "14px",
  },
  {
    size: "16px",
  },
  {
    size: "18px",
  },
  {
    size: "20px",
  },
];

export const fontStyles = [
  {
    fontFamily: "Arial",
  },
  {
    fontFamily: "Courier",
  },
  {
    fontFamily: "Garamond",
  },
  {
    fontFamily: "Georgia",
  },
  {
    fontFamily: "Tahoma",
  },
  {
    fontFamily: "Times New Roman",
  },
  {
    fontFamily: "Verdana",
  },
];
