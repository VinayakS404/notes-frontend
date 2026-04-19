import { useEffect, useState } from "react";
import HomeNavBar from "./HomeNaveBar.jsx";
import HomeSearchDiv from "./HomeSearchDiv.jsx";
import axios from "axios";

function Home() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

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
        <div className="flex flex-col bg-red-100 w-300 mt-35 ml-20 rounded-xl">
          <div className="bg-green-200">
            <p className="text-2xl">The Note</p>
            <div><button>all</button> <button></button>Favorate  <button>pin</button> </div>
          </div>
          <div className="  grid grid-cols-2 gap-10 p-10 ">
            {loading ? (
              <div className=" "> loading....</div>
            ) : notes.length === 0 ? (
              <p>backend is not sending data...</p>
            ) : (
              notes.map((items) => {
                return (
                  <div
                    className="h-60 w-full   bg-sky-50 flex flex-col p-10 rounded-2xl rounded-b-sm border-b-5 border-black shadow-sm"
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
