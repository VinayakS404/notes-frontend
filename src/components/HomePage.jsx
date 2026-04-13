import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from "./Header";

//import note from "./data";
function HomePage() {
  const [loading, setLoading] = useState(false);
  const [note, setNote] = useState([]);

  useEffect(() => {
    const getNote = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/notes");
        if (Array.isArray(response.data)) {
          setNote(response.data);
        } else {
          setNote([]);
        }
      } catch (err) {
        console.log(err);
        setNote([]);
      } finally {
        setLoading(false);
      }
    };
    getNote();
  }, []);

  return (
    <div className="h-screen w-screen">
      <Header />

      {loading ? (
        <div className="text-center mt-10">Loading...</div>
      ) : note.length === 0 ? (
        <div className="text-center mt-10">No notes available</div>
      ) : (
        note.map((item, index) => (
          <Link to={`/note/${item.id || index}`} key={item.id || index}>
            <div className="flex flex-col items-center">
              <div className="bg-gray-300 mt-10 rounded-2xl overflow-hidden">
                <div className="bg-blue-200 h-20 px-10 flex items-center justify-between text-2xl font-bold border-b-2 border-white">
                  <p>{item.heading}</p>
                  <div className="flex items-center">
                    <p className="text-xl">{item.date}</p>
                    <button className="w-20 h-10 bg-black text-white text-xl rounded-lg ml-5">
                      Edit
                    </button>
                  </div>
                </div>
                <div className="min-h-20 p-5 text-xl">{item.actualNote}</div>
              </div>
            </div>
          </Link>
        ))
      )}
    </div>
  );
}
export default HomePage;
