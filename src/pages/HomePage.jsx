import { useEffect } from "react";
import Graph from "../components/home/Graph";
import LatestMovie from "../components/home/LatestMovie";
import NewestMembers from "../components/home/NewestMembers";
import axios from "axios";
import { useState } from "react";

function HomePage() {
  const [top10, setTop10] = useState([]);
  const [newest, setNewest] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/admin/user_movie").then((res) => {
      setTop10(res.data.topMovie);
      setNewest(res.data.newestUser);
    });
  }, []);

  return (
    <div className="flex flex-col p-6 gap-4 ">
      <div className="flex ">
        <Graph top10={top10} />
      </div>
      <div className="flex gap-1 justify-between">
        <div className="flex  border w-5/12">
          <NewestMembers newest={newest} />
        </div>
        <div className="flex ">
          <LatestMovie top10={top10} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
