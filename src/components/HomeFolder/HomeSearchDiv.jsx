function HomeSearchDiv() {
  return (
    <div className=" w-full h-15   fixed top-10 flex justify-center pl-20">
      <div className=" h-full w-[calc(100%-150px)] flex items-center justify-center gap-10">
        <div className="h-13 min-w-200 rounded-full bg-white drop-shadow-sm/5 border border-gray-200 flex items-center justify-end gap-5 px-5 ">
          <div className="h-11 w-11  rounded-full bg-white border border-gray-200 drop-shadow-sm/5 "></div>
        </div>
        <div className="h-13  rounded-3xl bg-white border border-gray-200 drop-shadow-sm/5 flex items-center gap-4 px-2">
          <div className="h-11 w-11  rounded-full bg-white border border-gray-200 drop-shadow-sm/5"></div>
          <div className="h-11 w-11 rounded-full bg-white border border-gray-200 drop-shadow-sm/5"></div>
          <div className="h-11 w-11 rounded-full bg-white border border-gray-200 drop-shadow-sm/5"></div>
        </div>
      </div>
    </div>
  );
}
export default HomeSearchDiv;
