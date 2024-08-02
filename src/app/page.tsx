import Image from "next/image";
import Furthersidebar from "./components/shared/Furthersidebar";
import FurtherSidebardata from "./utils/FurtherSidebar";
import VideoComponent from "./components/VideoComponent";

export default function Home() {
  return (
    <>
      <div className="container overflow-auto h-sidebar-height-brijesh">
        <div className="hidden sm:block  sticky top-0">
          <div className="flex items-center gap-2 ml-2 overflow-auto max-w-[85%]">
            {FurtherSidebardata.map((data, index) => {
              return <Furthersidebar key={index} content={data.content} />;
            })}
          </div>
        </div>
        <div className="relative">
          <div className="fixed h-videocomponent-height overflow-auto">
            <VideoComponent />
          </div>
        </div>
      </div>
    </>
  );
}
