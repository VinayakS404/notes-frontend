const HomeNavBar = () => {
  return (
    <nav className=" h-screen w-10 py-5 fixed left-8 text-white drop-shadow-sm z-10">
      <div className="flex flex-col items-center justify-start bg-[#2A2A2A] h-full w-20 py-10 rounded-xl">
        <div className="pb-5 ">
          <a href="/">MyApp</a>
        </div>
        <div className="flex flex-col  gap-4">
          <div className="h-10 w-10 rounded-full bg-white"></div>
        </div>
      </div>
    </nav>
  );
};

export default HomeNavBar;
