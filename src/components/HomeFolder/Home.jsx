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
  });

  return (
    <div className="w-screen h-screen bg-sky-50  relative pb-3000 flex justify-center">
      <HomeSearchDiv />
      <HomeNavBar />
      <div className="h-100 w-300 mt-35 ml-20 bg-amber-300 flex flex-col">
        {loading ? (
          <div className=" "> loading....</div>
        ) : notes.length === 0 ? (
          <div className="h-60 w-full   bg-blue-300 flex flex-col ">
            <div className="h-20 w-full bg-red-300 flex items-center justify-between px-20">
              <p className="text-2xl font-bold">heading</p>
              <div className="flex items-center">
                <p className="p-5 text-2xl font-bold">00/00/0000</p>
                <div className="h-13 w-25 rounded-2xl bg-black "></div>
              </div>
            </div>
            <div className="flex-1 w-full  bg-green-300 p-10">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti
              maiores commodi cupiditate consectetur debitis molestias quidem
              harum sed dolores. Deleniti inventore, nobis rem ea consequatur
              autem sit quae quibusdam nemo Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Quis quibusdam quidem voluptas
              aliquam! Porro veniam corporis sapiente minus, magni labore
              deserunt enim, ea voluptatum, dolore accusantium dignissimos
              dolores. Repellendus, iste!Lorem
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
export default Home;
