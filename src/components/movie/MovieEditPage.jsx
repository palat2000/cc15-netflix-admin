import axios from "axios"
import { useState } from "react"

export default function MovieEditPage({ openBox, movie, setOpenModal }) {

  const [uploadField, setUploadField] = useState({})
  let actor = ""
  for (const ab of movie.actorName) {
    actor += (ab + " ")
  }
  const uploadMovie = async e => {
    e.preventDefault()
    try {

      const formData = new FormData();

      formData.append("title", uploadField.title || movie.title)
      formData.append("detail", uploadField.detail || movie.detail)
      formData.append("actorName", uploadField.actorName || movie.actorName)
      formData.append("genres", uploadField.genres || movie.genres)
      formData.append("isTVShow", uploadField.isTVShow || movie.isTVShow)
      formData.append("release_year", uploadField.release_year || movie.release_year)
      formData.append("releaseDateForNetflix", uploadField.releaseDateForNetflix || movie.releaseDateForNetflix)
      formData.append('coverImage', uploadField.coverImage || movie.image)
      formData.append("trailer", uploadField.trailer || movie.trailer);
      formData.append("videoEpisodeNo", uploadField.videoEpisodeNo || movie.video[0].videoEpisodeNo)
      formData.append("videoEpisodeName", uploadField.videoEpisodeName || movie.video[0].videoEpisodeName)
      formData.append("video", uploadField.videoUrl || movie.video[0].videoUrl);
      for (var pair of formData) {
        console.log(pair[0] + ', ' + pair[1]);
      }
      const res = await axios.post("http://localhost:8080/admin/upload", formData)
      if(res.data.message){
        alert(res.data.message)
      }
    }
    catch (err) {
      console.log(err)
    }
  }
  return (
    <form onSubmit={uploadMovie}>
      <div className="flex flex-col">
        <div
          className={`  ${openBox ? "hidden" : ""
            }`} >
          <div className="flex flex-row border justify-between">
            <div className="justify-between items-end border border-black border-b-0 w-3/12 bg-slate-200">
              <div className=" pl-2 text-xl font-bold">Title</div>
              <textarea type="text"
                placeholder={movie.title}
                defaultValue={uploadField.title}
                onChange={(e) =>
                  setUploadField(prev => ({ ...prev, title: e.target.value }))}
                className="w-full  pl-2" />

            </div>
            <div className="border  w-7/12 bg-slate-200  border-black border-b-0">
              <div className="pl-2  text-xl font-bold">Detail</div>
              <textarea type="text" placeholder={movie.detail}
                defaultValue={uploadField.detail}
                onChange={(e) =>
                  setUploadField(prev => ({ ...prev, detail: e.target.value }))}
                className="w-full  pl-2"
              />

            </div>
            <div className="justify-between items-end  w-3/12 bg-slate-200 border border-black border-b-0">
              <div className="pl-2  text-xl font-bold" >Actor name</div>
              <textarea type="text" placeholder={actor}
                defaultValue={uploadField.actorName}
                onChange={(e) =>
                  setUploadField(prev => ({ ...prev, actorName: e.target.value }))}
                className="w-full pl-2 "
              />

            </div>
          </div>
          <div className="flex w-full ">
            <div className="justify-between items-end w-2/12 border border-black">
              <div className="pl-2  text-xl font-bold bg-slate-200">Genres</div>

              <select
                defaultValue={uploadField.genres}
                onChange={(e) =>
                  setUploadField(prev => ({ ...prev, genres: e.target.value }))}
                name="cars" id="cars">
                <option value={movie.genres}>{movie.genres}</option>
                <option value="COMEDIES">COMEDIES</option>
                <option value="SPORTS">SPORTS</option>
                <option value="ACTION">ACTION</option>
                <option value="HORROR">HORROR</option>
                <option value="SPORTS">SPORTS</option>
                <option value="KID">KID</option>
                <option value="ROMANCE">ROMANCE</option>
              </select>
            </div>
            <div className="justify-between items-end  w-2/12 border border-black ">
              <div className="pl-2  text-xl font-bold bg-slate-200 " >isTVShow</div>

              <input type="checkbox" value={movie.isTVShow}
                defaultValue={uploadField.isTVShow}
                onChange={(e) =>
                  setUploadField(prev => ({ ...prev, isTVShow: e.target.checked }))}
                className=" ml-2 " />

            </div>
            <div className="justify-between items-end w-4/12 border border-black">
              <div className="pl-2  text-xl font-bold  bg-slate-200" >Release Year</div>
              <input type="text" placeholder={"" + movie.release_year}
                defaultValue={uploadField.release_year}
                onChange={(e) =>
                  setUploadField(prev => ({ ...prev, release_year: e.target.value }))}
                className="w-full  pl-2" />

            </div>
            <div className="justify-between items-end  w-4/12 border border-black">
              <div className="  text-xl font-bold bg-slate-200 pl-2 " >Release Date for Netflix</div>
              <input type="date" placeholder={"" + movie.releaseDateForNetflix}
                defaultValue={uploadField.releaseDateForNetflix}
                onChange={(e) =>
                  setUploadField(prev => ({ ...prev, releaseDateForNetflix: e.target.value }))}
                className="w-full pl-2 " />

            </div>
          </div>
        </div>
        <div>
          <div className="flex " >

            <div className="border flex-1 pb-2 border-black">
              <div className="text-xl font-bold bg-slate-200 pl-2 ">Cover Image</div>
              <div className="flex justify-center items-center pt-2 gap-2 pr-2">
                <a
                  className="hover:underline text-blue-700 pl-2 text-[13px] "
                  href="https://res.cloudinary.com/diyiw4pvv/image/upload/v1699433204/ajljjugi3r5t9iqw5tab.jpg">OriginImage</a>
                <input
                  defaultValue={uploadField.coverImage}
                  type="text" placeholder="Add Link" className="w-96 border pl-2" onChange={(e) =>
                    setUploadField(prev => ({ ...prev, coverImage: e.target.value }))} />
              </div>
            </div>
            <div className="border flex-1 pb-2 border-black">
              <div className="text-xl font-bold bg-slate-200 pl-2">Trailer</div>
              <div className="flex justify-center items-center pt-2 gap-2 pr-2">
                <a
                  className="hover:underline text-blue-700 pl-2 text-[13px]"
                  href="https://res.cloudinary.com/diyiw4pvv/video/upload/v1698596684/sport/zqz7rdrzdcmx93u3wrds.mp6">Origintrailer</a>
                <input
                  defaultValue={uploadField.trailer}
                  type="text" placeholder="Add Link" className="w-96 border pl-2" onChange={(e) =>
                    setUploadField(prev => ({ ...prev, trailer: e.target.value }))} />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>{movie.video.map((e) => {
            console.log(e)
            return <div key={e.videoEpisodeNo}
              className="flex ">
              <div className="border flex flex-col border-black  bg-slate-200 w-3/12">

                <div className="text-xl font-bold bg-slate-200 pl-2 pr-2">Episode Name</div>
                <textarea type="text" placeholder={e?.videoEpisodeName}
                  className="w-full pl-2 "
                  defaultValue={uploadField.e?.videoEpisodeName}
                  onChange={(e) =>
                    setUploadField(prev => ({ ...prev, videoEpisodeName: e.target.value }))} />
              </div>
              <div className="border flex flex-col  border-black w-3/12">

                <div className="text-xl font-bold bg-slate-200  pl-2" >Episode No.</div>
                <input type="number" placeholder={e?.videoEpisodeNo}
                  className="w-full pl-2 "
                  defaultValue={uploadField.e?.videoEpisodeNo}
                  onChange={(e) =>
                    setUploadField(prev => ({ ...prev, videoEpisodeNo: e.target.value }))} />

              </div>
              <div className="border flex flex-col w-6/12 border-black">

                <div className="text-xl font-bold bg-slate-200 pl-2">videoUrl</div>
                <div className="gap-2 flex pt-2">

                  <a
                    className="hover:underline text-blue-700 pl-2 text-[13px]"
                    href="https://res.cloudinary.com/diyiw4pvv/video/upload/v1698596684/sport/zqz7rdrzdcmx93u3wrds.mp6">Origin trailer</a>
                  <input
                    type="text" placeholder="Add Link" className="w-96 border pl-2"
                    defaultValue={uploadField.e?.videoUrl}
                    onChange={(e) =>
                      setUploadField(prev => ({ ...prev, videoUrl: e.target.value }))} />

                </div>
              </div>
            </div>
          })}</div>
        </div>
        <div className="justify-end flex pt-2 gap-2">

          <button type="submit" className="bg-green-600 p-2 rounded-md text-white">Addmovie</button>
          <button
            className="bg-red-700 p-2 rounded-md text-white"
            onClick={() => {
              setOpenModal(false)
            }}>
            <div> cancel</div>
          </button>
        </div>
      </div>
    </form>
  )
}