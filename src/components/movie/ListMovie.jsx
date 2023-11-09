import useMovie from "../../hooks/useMovie";

export default function ListMovie() {
  const { data } = useMovie()
  console.log(data)
  return (<>
    <div>ListMovie</div>
    <div className=" border">
      <table className="w-full">
        <thead>
          <tr className="flex justify-between ">
            <th>Title</th>
            <th>Is TV Show</th>
            <th>Image</th>
            <th>Release Year</th>
            <th>Genres</th>
            <th>Trailer</th>
            <th>Detail</th>
            <th>Actor Name</th>
            <th>Video Episode Name</th>
            <th>Video Episode No</th>
            <th>Video</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((e) =>{
            return <tr className="flex justify-between">
              <td>{e.title}</td>
              <td>{e.isTVShow.toString()}</td>
              <td>
                <a className="text-blue-500" href={e.image}>Image</a>
              </td>
              <td>{e.release_year}</td>
              <td>{e.genres}</td>
              <td>
                <a className="text-blue-500" href={e.trailer}>Trailer</a>
              </td>
              <td>{e.detail}</td>
            <td>{e.actorName?.map((el) => {
              return <div>{el}</div>
            })}</td>
            {e?.video.map((el) => {
              return <>
                <td> {el.videoEpisodeName} </td>
                <td> {el.videoEpisodeNo} </td>
                <td><a href={el.videoUrl}>Video</a></td>
              </>
                
               
            })}
            </tr>

          })}
      </tbody>
    </table>

  </div >
  </>
  )


}



// {data?.map((e) => {
//   console.log(e)
//   return (
//     <table key={e.id}>
//       <thead>
//         <tr className="flex gap-4 p-4">
//           <td >
//             <div>Actors</div>
//             <div>{e.actorName?.map((el) => {
//               return <div>{el}</div>
//             })}</div>
//           </td>
//           <td>
//             <div>Detail</div>
//             <div>{e.detail}</div>
//           </td>
//           <td>
//             <div>genres</div>
//             <div>{e.genres}</div>
//           </td>
//           <td>
//             <div>Img</div>
//             <a href={e.image} className="text-blue-700">Image</a>
//           </td>
//           <td>
//             <div>IsTvShow</div>
//             <div>{e.isTVShow.toString()}</div>
//           </td>
//           <td>
//             <div>release_year</div>
//             <div>{e.release_year}</div>
//           </td>
//           <td>
//             <div>title</div>
//             <div>{e.title}</div>
//           </td>
//           <td>
//             <div>trailer</div>
//             <a href={e.trailer} className="text-blue-700">trailer</a>
//           </td>
//           <td>
//             {e.video?.map((el) => {
//               return <div className="flex gap-4">

//                 <div>
//                   <div>videoEpisodeName</div>
//                   <div>{el.videoEpisodeName}</div>
//                 </div>
//                 <div>
//                   <div>videoEpisodeNo</div>
//                   <div>{el.videoEpisodeNo}</div>
//                 </div>
//                 <div>
//                   <div>videoUrl</div>
//                   <a href={e.videoUrl} className="text-blue-700">videoUrl</a>
//                 </div>

//               </div>
//             })}
//           </td>
//         </tr>