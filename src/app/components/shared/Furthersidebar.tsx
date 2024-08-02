import FurtherTypes from "@/app/types/FurtherTypes";
const Furthersidebar = ({
  content,
  bgColor = "#0F0F0F",
  fgColor = "white",
}: FurtherTypes) => {
  return (
    <>
      <div
        style={{
          backgroundColor: `${bgColor}`,
          padding: "10px",
          borderRadius: "10px",
        }}
      >
        <span className={`flex justify-center text-xl w-[100%] cursor-pointer`}>
          {content}
        </span>
      </div>
    </>
  );
};

export default Furthersidebar;
