import { useEffect, useState } from "react";
import HomeNavBar from "./HomeNaveBar.jsx";
import HomeSearchDiv from "./HomeSearchDiv.jsx";
import axios from "axios";
import downIcon from "../../../assets/down.png";

function Home() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  const bgColors = {
  "bg-red-100": "bg-red-100",
  "bg-blue-100": "bg-blue-100",
  "bg-green-100": "bg-green-100",
};


  useEffect(() => {
    const getNotes = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/notes");
        setNotes(response.data);
      } catch (err) {
        console.log(err);
        setNotes([]);
      } finally {
        setLoading(false);
      }
    };
    getNotes();
  }, []);
  

  return (
    <div className="w-screen h-screen bg-sky-50  relative pb-3000 ">
      <div className="  flex justify-center">
        <HomeSearchDiv />
        <HomeNavBar />
        <div className="flex flex-col w-300 mt-35 ml-20 rounded-xl">
          <div className="px-10 flex flex-col gap-3">
            <div className="flex  items-center justify-between ">
              <div className="flex gap-2 items-center">
                <img
                  src={downIcon}
                  alt="back arrow"
                  className="h-8 rotate-90 mt-"
                />
                <p className="text-2xl ">
                  <span className="text-[#7C7C7C]">Home</span> / All notes
                </p>
              </div>
              <div className="flex ">
                <img
                  src={downIcon}
                  alt="back arrow"
                  className="h-8 rotate-90 mt-"
                />
                <img
                  src={downIcon}
                  alt="back arrow"
                  className="h-8 rotate-90 mt-"
                />
              </div>
            </div>
            <div>
              <div className=" flex gap-2 ">
                <button className="bg-gray-100 border-2 border-gray-300 rounded-sm px-4 flex items-center justify-center">
                  All
                </button>
                <button className="bg-gray-100 border-2 border-gray-300 rounded-sm px-4">
                  Favorate
                </button>
                <button className="bg-gray-100 border-2 border-gray-300 rounded-sm px-4">
                  Pined
                </button>
              </div>
              <div></div>
            </div>
          </div>
          <div className="  grid grid-cols-2 gap-10 p-10 ">
            {loading ? (
              <div className=" "> loading....</div>
            ) : notes.length === 0 ? (
              <p>backend is not sending data...</p>
            ) : (
              notes.map((items) => {
                const dynamicColor = bgColors[items.colortag] || "bg-gray-100";
                console.log(items.colortag)
                return (
                  <div
                    className={` h-60 w-full ${dynamicColor} flex flex-col p-10 rounded-2xl shadow-sm`}
                    key={items.noteId}
                  >
                    <div className="h-20 w-full  flex items-center justify-between ">
                      <p className="text-xl font-bold">{items.noteHeading}</p>
                      <div className="flex items-center ">
                        <p className="p-5 text-sm font-bold">
                          {items.noteAddedDate}
                        </p>
                        <div className="h-13 w-25 rounded-xl bg-[#2A2A2A] text-white flex font-bold items-center justify-center">
                          Edit
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 w-full  pt-3">
                      {items.noteContent}
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
