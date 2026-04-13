import plusIcon from "../assets/plus.png";
function Header() {
  return <div className="flex items-center justify-center">
    <div className=" w-350 h-20 bg-[#D2F401] mt-10 rounded-2xl flex justify-end items-center ">
      <button className="w-30 h-16 bg-black text-white text-3xl flex items-center justify-center rounded-xl mr-10  hover:bg-red-950 active:bg-red-800">
        <img  className="h-10" src={plusIcon} alt="plus icon" />
      </button>
    </div>
  </div>;
}
export default Header;
