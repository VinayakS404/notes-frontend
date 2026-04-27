import userIcon from "../../../assets/user.png";
const HomeNavBar = () => {
  return (
    <nav className=" h-screen w-10 py-5 fixed left-8 text-white drop-shadow-sm z-10">
      <div className="flex flex-col items-center justify-between bg-[#2A2A2A] h-full w-20 py-10 rounded-xl">
        <div className="flex flex-col items-center gap-2">
          <div className="pb-5 ">
            <a href="/">MyApp</a>
          </div>

          <img src={userIcon} alt="userIcon" className="h-10" />
    
       

          <div className="flex flex-col  gap-4 text-[#2A2A2A]">
            <div className="h-10 w-15 rounded-xl flex items-center justify-center bg-white">
              trash
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="flex flex-col  gap-4 text-[#2A2A2A]">
            <div className="h-10 w-15 rounded-xl flex items-center justify-center bg-white">
              setting
            </div>
          </div>
          <div className="flex flex-col  gap-4 text-[#2A2A2A]">
            <div className="h-13 w-13 rounded-full flex items-center justify-center bg-white">
              profile
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HomeNavBar;
