import searchIcon from "../../../assets/searchIcon.png";
import downIcon from "../../../assets/down.png";
import removeGrayIcon from "../../../assets/remove-gray.png";
function HomeSearchDiv() {
  return (
    <div className=" w-full h-30  fixed left-0 flex justify-start  bg-white  z-5">
      <div className=" h-full w-[calc(100%-150px)] flex items-center justify-center gap-2">
        <div className="h-12 min-w-100 rounded-xl bg-white border-2 border-gray-300 gap-3 pl-3 flex items-center justify-start">
          <img src={searchIcon} alt="search icon" className="h-5 " />
          <input
            placeholder="Search your note"
            className=" h-10 flex-1 focus:outline-none "
          ></input>
        </div>

        <div className="h-12 rounded-xl bg-white border-2 border-gray-300 gap-3 px-3 flex items-center justify-center hover:bg-gray-100 hover:border-gray-400 transition-colors duration-200 ">
          <p className="text-[#2A2A2A]">Filter by colour</p>
          <img src={downIcon} alt="extent" className="h-5 mt-1" />
        </div>
        <div className="h-12 rounded-xl bg-white border-2 border-gray-300 gap-3 px-3 flex items-center justify-center hover:bg-gray-100 hover:border-gray-400 transition-colors duration-200">
          <p className="text-[#2A2A2A]">Filter by tag</p>
          <img src={downIcon} alt="extent" className="h-5 mt-1" />
        </div>
        <div className="h-12 rounded-xl bg-gray-100 border-2 border-gray-300 gap-3 px-3 flex items-center justify-center hover:bg-gray-200 hover:border-gray-400 transition-colors duration-200">
          <img src={removeGrayIcon} alt="extent" className="h-5 " />
          <p className="text-[#7C7C7C]">Reset filter</p>
        </div>
      </div>
    </div>
  );
}
export default HomeSearchDiv;
