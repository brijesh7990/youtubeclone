import {
  mainsection,
  yousection,
  subscriptions,
  Explore,
  MoreFromYoutube,
} from "@/app/utils/sidebardata";
const Sidebar = () => {
  return (
    <>
      <div className="overflow-auto h-sidebar-height-brijesh ml-3">
        <div>
          {mainsection.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="flex gap-5 items-center hover:bg-[#3F3F3F] cursor-pointer h-10"
              >
                <IconComponent size={25} />
                <span className="hidden sm:block">{item.name}</span>
              </div>
            );
          })}
        </div>
        <hr />
        <div className="my-2">
          {yousection.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="flex gap-5 items-center hover:bg-[#3F3F3F] cursor-pointer h-10"
              >
                <IconComponent size={25} />
                <span className="hidden sm:block">{item.name}</span>
              </div>
            );
          })}
        </div>
        <hr />
        <div className="my-2 hidden sm:block">
          {subscriptions.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="flex gap-5 items-center hover:bg-[#3F3F3F] cursor-pointer h-10"
              >
                <IconComponent size={25} />
                <span className="hidden sm:block">{item.name}</span>
              </div>
            );
          })}
        </div>
        <hr />
        <div className="my-2 hidden sm:block">
          {Explore.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="flex gap-5 items-center hover:bg-[#3F3F3F] cursor-pointer h-10"
              >
                <IconComponent size={25} />
                <span className="hidden sm:block">{item.name}</span>
              </div>
            );
          })}
        </div>
        <hr />
        <div className="my-2 hidden sm:block">
          {MoreFromYoutube.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="flex gap-5 items-center hover:bg-[#3F3F3F] cursor-pointer h-10"
              >
                <IconComponent size={25} />
                <span className="hidden sm:block">{item.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
