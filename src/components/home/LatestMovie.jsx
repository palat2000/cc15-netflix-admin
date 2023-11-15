function LatestMovie({ top10 }) {
  top10 = top10.slice(0,5)
  return (
    <div className=" p-4 border shadow flex flex-col gap-4 ">
      <h2 className="font-bold text-xl">Latest Content</h2>
      <div className="border p-2" >
        <div className="grid grid-cols-7">
          <div className="border border-black font-bold pl-1 pt-2 border-r-0 ">ID</div>
          <div className="border border-black font-bold pl-1 pt-2 border-r-0 ">Title</div>
          <div className="border border-black font-bold pl-1 pr-1 pt-2 border-r-0 ">Count Watched</div>
          <div className="border border-black font-bold pl-1 pt-2 border-r-0">Count Liked</div>
          <div className="border border-black font-bold pl-1 pt-2 border-r-0">Genres</div>
          <div className="border border-black font-bold pl-1 pt-2 border-r-0">Tv Show</div>
          <div className="border border-black font-bold pl-1 pt-2 ">release_year</div>
        </div>
        {top10?.map((e,index) => {
          console.log(e)
          return (<div className="grid grid-cols-7" key={index}>
            <div className="pb-1 pt-1 border border-black pl-1 border-r-0 border-t-0">{1+index}</div>
            <div className="pb-1 pt-1 border border-black pl-1 border-r-0 border-t-0">{e.title}</div>
            <div className="border border-black pl-1 border-r-0 border-t-0">{e.count_watching}</div>
            <div className="border border-black pl-1 border-r-0 border-t-0">{e.count_liked}</div>
            <div className="border border-black pl-1 border-r-0 border-t-0">{e.enumGenres.toLowerCase()}</div>
            <div className="border border-black pl-1 border-r-0 border-t-0">{e.isTVShow.toString()}</div>
            <div className="border border-black pl-1 border-t-0">{e.release_year}</div>
          </div>
          )

        })}

      </div>
    </div>
  );
}

export default LatestMovie;
