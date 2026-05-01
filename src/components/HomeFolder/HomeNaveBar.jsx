import homeIcon from "../../../assets/home_500dp_E3E3E3_FILL0_wght200_GRAD200_opsz48.png";
import gearIcon from "../../../assets/settings_500dp_E3E3E3_FILL0_wght200_GRAD200_opsz48.png";
import userIcon from "../../../assets/user.png";
import darkModeIcon from "../../../assets/dark_mode_500dp_E3E3E3_FILL0_wght200_GRAD200_opsz48.png";
import toolBarIcon from "../../../assets/toolbar_500dp_E3E3E3_FILL0_wght200_GRAD200_opsz48.png";
import plusIcon from "../../../assets/add_2_500dp_FFFFFF_FILL0_wght200_GRAD200_opsz48.png";


const HomeNavBar = () => {
  return (
    <nav className=" h-screen w-10 py-1 fixed left-1 text-white z-10">
      <div className="flex flex-col items-center justify-between bg-[#2A2A2A] h-full w-18 py-10 rounded-xl">
        <div className=" h-full flex flex-col items-center justify-between gap-4">
          <div className=" ">
            <a href="/">App</a>
          </div>

          <div className="flex flex-col gap-3">
            <div className="rounded hover:bg-[#404040] p-1 transition-colors duration-200">
              <img src={homeIcon} alt="home icon" className="h-9" />
            </div>
            <div className="rounded hover:bg-[#404040] p-1 transition-colors duration-200">
              <img src={toolBarIcon} alt="userIcon" className="h-9" />
            </div>
            <div className="rounded hover:bg-[#404040] p-1 transition-colors duration-200">
              <img src={darkModeIcon} alt="userIcon" className="h-9" />
            </div>
            <div className="rounded hover:bg-[#404040] p-1 transition-colors duration-200">
              <img src={gearIcon} alt="userIcon" className="h-9" />
            </div>
            <div className="rounded hover:bg-[#404040] p-1 transition-colors duration-200">
              <img src={plusIcon} alt="userIcon" className="h-9" />
            </div>
          </div>

          <div className="h-10 w-10 pr-0.5 rounded-full flex items-center justify-center bg-green-500">
            <img src={userIcon} alt="user image" className="h-5 pl-1.5 " />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HomeNavBar;
