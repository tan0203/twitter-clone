import { BiBell, BiHomeCircle, BiMessageMinus } from "react-icons/bi"
import { BsPersonFill, BsPerson } from "react-icons/bs"
import { CgMoreO } from "react-icons/cg"
import { FiBookmark } from "react-icons/fi"
import { HiOutlineHashtag } from "react-icons/hi"
import { RiFileListLine, RiHome7Fill } from "react-icons/ri"

export const listMenu = [
  {
    key: "home",
    title: "Home",
    iconOutline: <BiHomeCircle />,
    icon: <RiHome7Fill className="mr-3 text-2xl" />,
    path: '/',
    handleClick: 'home'
  },
  {
    key: "explore",
    title: "Explore",
    iconOutline: <HiOutlineHashtag />,
    icon: <HiOutlineHashtag className="mr-3 text-2xl" />,
    path: '/explore'
  },
  {
    key: "noitifications",
    title: "Noitifications",
    iconOutline: <BiBell />,
    icon: <BiBell className="mr-3 text-2xl" />,
    path: '/noitifications'
  },
  {
    key: "messages",
    title: "Messages",
    iconOutline: <BiMessageMinus />,
    icon: <BiMessageMinus className="mr-3 text-2xl" />,
    path: '/messages'
  },
  {
    key: "bookmarks",
    title: "Bookmarks",
    iconOutline: <FiBookmark />,
    icon: <FiBookmark className="mr-3 text-2xl" />,
    path: '/bookmarks'
  },
  {
    key: "lists",
    title: "Lists",
    iconOutline: <RiFileListLine />,
    icon: <RiFileListLine className="mr-3 text-2xl" />,
    path: '/lists'
  },
  {
    key: "profile",
    title: "Profile",
    iconOutline: <BsPersonFill />,
    icon: <BsPerson className="mr-3 text-2xl" />,
    path: '/profile'
  },
  {
    key: "more",
    title: "More",
    iconOutline: <CgMoreO />,
    icon: <CgMoreO className="mr-3 text-2xl" />,
    path: '/more'
  },

];
