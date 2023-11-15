import Chart1 from "./Chart1";


function Graph({top10}) {
  return (
    <div className="shadow border p-4 h-full w-full flex flex-col gap-2">
      <h2 className="font-bold text-xl">User analytics</h2>
      <div>
        <Chart1 top10={top10}/>
        </div>
    </div>
  );
}

export default Graph;
