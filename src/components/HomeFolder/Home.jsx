import { useEffect, useState } from "react";
import HomeNavBar from "./HomeNaveBar.jsx";
import HomeSearchDiv from "./HomeSearchDiv.jsx";
import axios from "axios";
import downIcon from "../../../assets/down.png";
import fourSquare from "../../../assets/four-squares.png";
import row from "../../../assets/row.png";
import SideBar from "./SideBar.jsx";

function Home() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  const arr1 = [0, 1, 2, 3];

  const bgColors = {
    red: {
      bg: "bg-red-100",
      text: "text-red-700",
      border: "border-red-300",
    },
    blue: {
      bg: "bg-blue-100",
      text: "text-blue-700",
      border: "border-blue-300",
    },
    green: {
      bg: "bg-green-100",
      text: "text-green-700",
      border: "border-green-300",
    },
    pink: {
      bg: "bg-pink-100",
      text: "text-pink-700",
      border: "border-pink-300",
    },
    yellow: {
      bg: "bg-yellow-100",
      text: "text-yellow-700",
      border: "border-yellow-300",
    },
    white: {
      bg: "bg-gray-100",
      text: "text-gray-700",
      border: "border-gray-300",
    },
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
    <div className="w-screen h-screen bg-white  relative ">
      <div className="  flex justify-center">
        <HomeSearchDiv />
        <HomeNavBar />
        <SideBar />
        <div className="flex flex-col w-300 mt-35 ml-20 rounded-xl pl-30">
          <div className="px-10 flex flex-col gap-3">
            <div className="flex  items-center justify-between ">
              <div className="flex gap-2 items-center">
                <img
                  src={downIcon}
                  alt="back arrow"
                  className="h-8 rotate-90 z-1"
                />
                <p className="text-2xl ">
                  <span className="text-[#7C7C7C]">Home</span> / All notes
                </p>
              </div>
              <div className="flex items-center gap-3">
                <img
                  src={row}
                  alt="back arrow"
                  className="h-10  z-1 hover:bg-gray-200 p-1 rounded-md"
                />
                <img
                  src={fourSquare}
                  alt="back arrow"
                  className="h-10 rotate-90 z-1 hover:bg-gray-200 p-1.5 rounded-md"
                />
              </div>
            </div>
            <div>
              <div className=" flex gap-2 ">
                <button className="bg-gray-100 border-2 border-gray-300 rounded-sm px-4 flex items-center justify-center hover:bg-gray-200 hover:border-gray-400 transition-colors duration-200">
                  All
                </button>
                <button className="bg-gray-100 border-2 border-gray-300 rounded-sm px-4 hover:bg-gray-200 hover:border-gray-400 transition-colors duration-200">
                  Favorate
                </button>
                <button className="bg-gray-100 border-2 border-gray-300 rounded-sm px-4 hover:bg-gray-200 hover:border-gray-400 transition-colors duration-200">
                  Pined
                </button>
              </div>
              <div></div>
            </div>
          </div>

          {loading ? (
            <div className="flex items-center justify-center h-100">
              <div className="relative w-14 h-14">
                <div className="absolute inset-0 rounded-full border-4 border-gray-300"></div>
                <div className="absolute inset-0 rounded-full border-4 border-[#2A2A2A] border-t-transparent animate-spin"></div>
              </div>
            </div>
          ) : notes.length === 0 ? (
            <div className="  grid grid-cols-3 gap-10 p-10 ">
              {arr1.map(() => {
                return (
                  <div className="h-100 w-full flex flex-col p-5 rounded-2xl  bg-gray-50">
                    <div className="h-20 w-full flex items-center justify-between">
                      <div className="h-7 w-32 bg-gray-200 rounded shimmer-box"></div>
                      <div className="h-7 w-20 bg-gray-200 rounded shimmer-box"></div>
                    </div>

                    <div className="flex-1 w-full bg-white rounded-xl p-5">
                      <div className="flex gap-2">
                        <div className="h-7 w-16 bg-gray-200 rounded shimmer-box"></div>
                        <div className="h-7 w-16 bg-gray-200 rounded shimmer-box"></div>
                      </div>

                      <div className="space-y-2 mt-5">
                        <div className="h-4 w-56 bg-gray-200 rounded shimmer-box shimmer-box"></div>
                        <div className="h-4 w-56 bg-gray-200 rounded shimmer-box"></div>
                        <div className="h-4 w-56 bg-gray-200 rounded shimmer-box"></div>
                        <div className="h-4 w-56 bg-gray-200 rounded shimmer-box"></div>
                        <div className="h-4 w-40 bg-gray-200 rounded shimmer-box"></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="  grid grid-cols-3 gap-10 p-10 ">
              {notes.map((items) => {
                const dynamicColor = bgColors[items.colortag] || "bg-gray-100";
                console.log(items.colortag);
                return (
                  <div
                    className={` h-100 w-full ${dynamicColor.bg} flex flex-col p-5 rounded-2xl shadow-sm border ${dynamicColor.border}`}
                    key={items.noteId}
                  >
                    <div className="h-20 w-full  flex items-center justify-between ">
                      <p className={` text-xl font-bold ${dynamicColor.text} `}>
                        {items.noteHeading}
                      </p>
                      <div className="flex items-center ">
                        <p className=" text-sm font-bold">
                          {items.noteAddedDate}
                        </p>
                      </div>
                    </div>
                    <div className="flex-1 w-full overflow-hidden bg-white rounded-xl p-5">
                      <div className=" flex ">
                        {
                          for iitems.length()
                        }
                      </div>
                      <p className=" line-clamp-9">{items.noteContent}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default Home;
