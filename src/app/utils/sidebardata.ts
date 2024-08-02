import { IoHomeOutline } from "react-icons/io5";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { GrChannel } from "react-icons/gr";
import { FaHistory } from "react-icons/fa";
import { CgPlayList } from "react-icons/cg";
import { BiSolidVideos } from "react-icons/bi";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { FaFireAlt } from "react-icons/fa";
import { HiShoppingBag } from "react-icons/hi2";
import { IoLogoYoutube } from "react-icons/io5";
import { SiYoutubestudio } from "react-icons/si";
import { SiYoutubemusic } from "react-icons/si";

const mainsection = [
  {
    icon: IoHomeOutline,
    name: "Home",
  },
  {
    icon: SiYoutubeshorts,
    name: "Shorts",
  },
  {
    icon: MdOutlineSubscriptions,
    name: "Subscriptions",
  },
];

const yousection = [
  {
    icon: GrChannel,
    name: "Channel",
  },
  {
    icon: FaHistory,
    name: "History",
  },
  {
    icon: CgPlayList,
    name: "PlayList",
  },
  {
    icon: BiSolidVideos,
    name: "Your Videos",
  },
  {
    icon: MdOutlineWatchLater,
    name: "Watch Later",
  },
  {
    icon: AiOutlineLike,
    name: "Liked videos",
  },
];

const subscriptions = [
  {
    icon: BiUser,
    name: "Abhi & Niyu",
  },
  {
    icon: BiUser,
    name: "Dhruv Rathee",
  },
  {
    icon: BiUser,
    name: "CodeWithHarry",
  },
  {
    icon: BiUser,
    name: "CyberZeel",
  },
  {
    icon: BiUser,
    name: "Code Help",
  },
  {
    icon: BiUser,
    name: "Code-yug",
  },
];

const Explore = [
  {
    icon: FaFireAlt,
    name: "Trending",
  },
  {
    icon: HiShoppingBag,
    name: "Shopping",
  },
];

const MoreFromYoutube = [
  {
    icon: IoLogoYoutube,
    name: "YouTube Premium",
  },
  {
    icon: IoLogoYoutube,
    name: "Youtubestudio",
  },
  {
    icon: SiYoutubemusic,
    name: "Youtubemusic",
  },
];

export { mainsection, yousection, subscriptions, Explore, MoreFromYoutube };
