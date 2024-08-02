import Image from "next/image";
import Furthersidebar from "./components/shared/Furthersidebar";
import FurtherSidebardata from "./utils/FurtherSidebar";
import VideoComponent from "./components/VideoComponent";

export default function Home() {
  return (
    <>
      <div className="relative w-[100%] hidden sm:block">
        <div className="flex items-center gap-2 ml-2 overflow-auto w-[100%] ">
          {FurtherSidebardata.map((data, index) => {
            return <Furthersidebar key={index} content={data.content} />;
          })}
        </div>
      </div>
      <div>
        <VideoComponent />
      </div>
    </>
  );
}
