import Graph from "../components/home/Graph";
import LatestMovie from "../components/home/LatestMovie";
import NewestMembers from "../components/home/NewestMembers";

function HomePage() {
  return (
    <div className="flex flex-col h-full p-6 gap-4">
      <div className="flex-1">
        <Graph />
      </div>
      <div className="flex-1 flex gap-4">
        <div className="flex-1">
          <NewestMembers />
        </div>
        <div className="flex-1">
          <LatestMovie />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
