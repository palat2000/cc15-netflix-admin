import axios from "axios";
import { useEffect, useState } from "react";
import { TiPencil } from "react-icons/ti";

function ListMovie() {
  const [movie, setMovie] = useState([]);
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const [dataEditModal, setDataEditModal] = useState(false);

  const [isOpenEditImage, setIsOpenEditImage] = useState(false);
  const [image, setIamge] = useState(null);

  const [title, setTitle] = useState(null);

  const [year, setYear] = useState(null);

  const [countWatch, setCountWatch] = useState(null);

  const [countLike, setCountLike] = useState(null);

  const [detail, setDetail] = useState(null);

  const [tvShow, setTvShow] = useState(false);
  const [isOpenTvShow, setIsOpenTvShow] = useState(false);

  const [isOpenEnumGen, setIsOpenEnumGen] = useState(false);
  const [enumGen, setEnumGen] = useState(null);

  const [trailer, setTrailer] = useState(null);

  const [editTargetId, setEditTargetId] = useState(null);

  const [movieTargetDel, setMovieTargetDel] = useState(null);
  useEffect(() => {
    console.log("first");
    axios
      .get("http://localhost:8080/admin/read-movieList")
      .then((res) => setMovie(res.data))
      .catch((err) => console.log(err));
  }, []);

  const deleteMovieList = () => {
    axios
      .post("http://localhost:8080/admin/delete-movieList", movieTargetDel)
      .then((res) => {
        const afterDelMovie = movie.findIndex((el) => {
          return el.id == res.data.id;
        });
        movie.splice(afterDelMovie, 1);
        return setIsOpenConfirmDelete(!isOpenConfirmDelete);
      })
      .catch((res) => console.log(res.data));
  };
  const isTvShowHandleChange = () => {
    return setTvShow(!tvShow);
  };
  const [isOpenConfirmDelete, setIsOpenConfirmDelete] = useState(false);

  const editMovieList = () => {
    const formData = new FormData();
    let subEnumGen;
    if (image !== null) formData.append("movieListImage", image);
    if (enumGen !== null) {
      formData.append("enumGen", enumGen);
    }
    if (title !== null) {
      formData.append("title", title);
    }
    if (year !== null) {
      formData.append("year", year);
    }
    if (countWatch !== null) {
      formData.append("countWatch", countWatch);
    }
    if (countLike !== null) {
      formData.append("countLike", countLike);
    }

    if (detail !== null) {
      formData.append("detail", detail);
    }

    formData.append("tvShow", tvShow);

    formData.append("subEnumGen", subEnumGen);

    formData.append("trailer", trailer);

    formData.append("editTargetId", editTargetId);

    const after = axios
      .patch("http://localhost:8080/admin/edit-movieList", formData)
      .then((res) => {
        const afterEditMovie = movie.findIndex((el) => {
          return el.id == res.data.id;
        });
        // movie.splice(afterEditMovie,1)
        movie[afterEditMovie] = res.data;
        // console.log(res.data)
        // console.log(movie)
        return setIsOpenEditModal(!isOpenEditModal);
      });
  };

  const defaultImage =
    "https://www.clipartbest.com/cliparts/dT8/on6/dT8on6qTe.jpeg";
  return (
    <div className="relative">
      {isOpenConfirmDelete && (
        <div className="bg-gray-300 absolute flex flex-col p-10  justify-center  items-center h-full w-full">
          <div className="justify-center font-extrabold text-4xl">
            Do you want to delete this item ?
          </div>
          <br />
          <div className="flex gap-2">
            <div
              className="cursor-pointer hover:bg-gray-400 text-2xl p-3 bg-gray-500 hover:text-white"
              onClick={deleteMovieList}
            >
              Confirm
            </div>
            <div
              className="cursor-pointer hover:bg-gray-400 text-2xl p-3 bg-gray-500 hover:text-white"
              onClick={() => setIsOpenConfirmDelete(!isOpenConfirmDelete)}
            >
              Cancel
            </div>
          </div>
        </div>
      )}
      {isOpenEditModal && (
        <table className="bg-gray-100   w-full h-full  absolute ">
          <thead className=" border-4">
            <tr className="border-4 border-gray-400">
              <th className="border-4 border-gray-400">COLUMN</th>
              <th>INFORMATION</th>
            </tr>
          </thead>
          <tbody className="border-4 ">
            <tr className="border-4">
              <td className="border-4">IMAGE</td>
              <td>
                <img className="h-40 border" src={dataEditModal.image} alt="" />
              </td>
              <img
                src={image ? URL.createObjectURL(image) : defaultImage}
                className="h-40 w-32 border"
                alt=""
              />
              {isOpenEditImage && (
                <td className="flex gap-2 border">
                  <input
                    onChange={(e) => {
                      if (e.target.files[0]) {
                        setIamge(e.target.files[0]);
                      }
                    }}
                    type="file"
                    name=""
                    id=""
                    className="border-4"
                  />
                  <div
                    className="cursor-pointer "
                    onClick={() => setIsOpenEditImage(!isOpenEditImage)}
                  >
                    SAVE
                  </div>
                  <div
                    className="cursor-pointer"
                    onClick={() => setIamge(null)}
                  >
                    DELETE
                  </div>
                  <div
                    className="cursor-pointer"
                    onClick={() => {
                      return setIsOpenEditImage(!isOpenEditImage);
                    }}
                  >
                    CANCEL
                  </div>
                </td>
              )}
              {!isOpenEditImage && (
                <td onClick={() => setIsOpenEditImage(!isOpenEditImage)}>
                  <TiPencil className="cursor-pointer " />
                </td>
              )}
            </tr>
            <tr className="border-4 ">
              <td className="border-4 p-1">ID</td>
              <td className="p-1">{dataEditModal.id}</td>
            </tr>
            <tr className="border-4">
              <td className="border-4 p-1 ">Title</td>
              <td className="border-4 p-1">{dataEditModal.title}</td>

              <td className="w-40 border-4 p-1">title</td>

              <input
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                value={title ? title : dataEditModal.title}
                type="text"
                className="p-1"
              />
            </tr>

            <tr className="border-4">
              <td className="border-4 p-1">Release year</td>
              <td className="border-4 p-1">{dataEditModal.release_year}</td>

              <td className="w-40 border-4 p-1">Release year </td>
              <input
                onChange={(e) => {
                  setYear(e.target.value);
                }}
                value={year ? year : dataEditModal.release_year}
                type="text"
                className="p-1"
              />
            </tr>

            <tr className="border-4">
              <td className="border-4 p-1">Counting watching</td>
              <td className="border-4 p-1">
                {dataEditModal.count_watching
                  ? dataEditModal.count_watching
                  : "0"}
              </td>

              <td className="w-40 border-4 p-1">Counting watching </td>
              <input
                onChange={(e) => {
                  setCountWatch(e.target.value);
                }}
                value={countWatch ? countWatch : dataEditModal.count_watching}
                type="text"
                name=""
                id=""
                className="p-1"
              />
            </tr>

            <tr className="border-4">
              <td className="border-4 p-1">Counting Liking</td>
              <td className="border-4 p-1">
                {dataEditModal.count_liked ? dataEditModal.count_liked : "0"}
              </td>

              <td className="w-40 border-4 p-1">Counting Liking </td>
              <input
                onChange={(e) => {
                  setCountLike(e.target.value);
                }}
                value={countLike ? countLike : dataEditModal.count_liked}
                type="text"
                name=""
                id=""
                className="p-1"
              />
            </tr>

            <tr className="border-4">
              <td className="border-4 p-1">Detail</td>
              <td className="w-96 border-4 p-1">
                {dataEditModal.detail ? dataEditModal.detail : "---"}
              </td>

              <td className="w-40 border-4 p-1">Detail </td>
              <textarea
                onChange={(e) => {
                  setDetail(e.target.value);
                }}
                value={detail ? detail : dataEditModal.detail}
                type="text"
                className="w-full h-full p-1"
              />
            </tr>

            <tr className="border-4">
              <td className="border-4 p-1">TVShow</td>
              <td className="border-4 p-1">
                {dataEditModal.isTVShow ? "YES" : " NO"}
              </td>

              <td className="w-40 border-4 p-1">TVShow</td>
                
          { tvShow ?  <div>
                {tvShow === "YES" ? "YES" : "NO"}
              </div>
              :
              <div
                className="cursor-pointer p-1"
                onClick={() => setIsOpenTvShow(!isOpenTvShow)}
              >
                {dataEditModal.isTVShow ? "YES" : " NO"}
              </div>
              }


              {isOpenTvShow && (
                <div className="flex flex-col absolute bg-gray-300 gap-1 p-1   w-48">
                  <div
                    className="cursor-pointer p-1"
                    onClick={() => {
                      setIsOpenTvShow(!isOpenTvShow);
                      return setTvShow("YES");
                    }}
                  >
                    YES
                  </div>
                  <div
                    className="cursor-pointer p-1"
                    onClick={() => {
                      setIsOpenTvShow(!isOpenTvShow);
                      return setTvShow("NO");
                    }}
                  >
                    NO
                  </div>
                </div>
              )}
            </tr>

            <tr className="border-4">
              <td className="border-4 p-1">Enum Genres</td>
              <td className="border-4 p-1">{dataEditModal.enumGenres}</td>

              <td className="w-40 border-4 p-1">Enum Genres :</td>
              <div
                onClick={() => setIsOpenEnumGen(!isOpenEnumGen)}
                className="cursor-pointer p-1"
                type="text"
              >
                {enumGen ? enumGen : dataEditModal.enumGenres}
              </div>

              {isOpenEnumGen && (
                <div className="flex flex-col absolute bg-gray-300 gap-1 p-1   w-48 ">
                  <div
                    onClick={() => {
                      setIsOpenEnumGen(!isOpenEnumGen);
                      return setEnumGen("COMEDIES");
                    }}
                    className="cursor-pointer hover:bg-gray-400"
                  >
                    COMEDIES
                  </div>
                  <div
                    onClick={() => {
                      setIsOpenEnumGen(!isOpenEnumGen);
                      return setEnumGen("ACTION");
                    }}
                    className="cursor-pointer hover:bg-gray-400"
                  >
                    ACTION
                  </div>
                  <div
                    onClick={() => {
                      setIsOpenEnumGen(!isOpenEnumGen);
                      return setEnumGen("HORROR");
                    }}
                    className="cursor-pointer hover:bg-gray-400"
                  >
                    HORROR
                  </div>
                  <div
                    onClick={() => {
                      setIsOpenEnumGen(!isOpenEnumGen);
                      return setEnumGen("SPORTS");
                    }}
                    className="cursor-pointer hover:bg-gray-400"
                  >
                    SPORTS
                  </div>
                  <div
                    onClick={() => {
                      setIsOpenEnumGen(!isOpenEnumGen);
                      return setEnumGen("KID");
                    }}
                    className="cursor-pointer hover:bg-gray-400"
                  >
                    KID
                  </div>
                  <div
                    onClick={() => {
                      setIsOpenEnumGen(!isOpenEnumGen);
                      return setEnumGen("ROMANCE");
                    }}
                    className="cursor-pointer hover:bg-gray-400"
                  >
                    ROMANCE
                  </div>
                  <div
                    onClick={() => {
                      setIsOpenEnumGen(!isOpenEnumGen);
                      return setEnumGen(null);
                    }}
                    className="cursor-pointer hover:bg-gray-400"
                  >
                    RESET
                  </div>
                </div>
              )}
            </tr>

            <tr className="border-4 	">
              <td className="border-4 p-1">Trailer</td>
              <td className="border-4 p-1">
                {dataEditModal.trailer ? dataEditModal.trailer : "---"}
              </td>

              <td className="p-1">Trailer </td>
              <input
                onChange={(e) => {
                  setTrailer(e.target.value);
                }}
                value={trailer ? trailer : dataEditModal.trailer}
                type="text"
                name=""
                id=""
                className="p-1"
              />
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td className="text-gray-300"></td>
              <td className="text-white"></td>
              <td className="text-white"></td>
              <td className="text-white"></td>
              <td
                onClick={editMovieList}
                className="bg-gray-500 w-20 p- text-lg font-semibold border-4 hover:bg-gray-400 cursor-pointer hover:text-white  pl-6"
              >
                ok
              </td>
              <td
                onClick={() => setIsOpenEditModal(!isOpenEditModal)}
                className="bg-gray-500 w-20 p- text-lg font-semibold hover:bg-gray-400 cursor-pointer hover:text-white pl-3"
              >
                cancel
              </td>
            </tr>
          </tbody>
        </table>
      )}
      <h1 className="text-2xl mb-2 p-2 font-extrabold ">Movie lists</h1>
      <table className="w-full ">
        <thead>
          <tr className="bg-gray-400 border-b-2 border border-white ">
            <th className="p-3 text-sm tracking-wide text-left border ">
              Image
            </th>
            <th className="p-3 text-sm tracking-wide text-left border ">ID</th>
            <th className="p-3 text-sm tracking-wide text-left border ">
              Title
            </th>
            <th className="p-3 text-sm tracking-wide text-left border ">
              Release year
            </th>
            <th className="p-3 text-sm tracking-wide text-left border ">
              Counting watching
            </th>
            <th className="p-3 text-sm tracking-wide text-left border ">
              Counting Liking
            </th>
            <th className="p-3 text-sm tracking-wide text-left border ">
              Detail
            </th>
            <th className="p-3 text-sm tracking-wide text-left border ">
              TVShow
            </th>
            <th className="p-3 text-sm tracking-wide text-left border ">
              Enum Genres
            </th>
            <th className="p-3 text-sm tracking-wide text-left border ">
              Trailer
            </th>
            <th className="p-3 text-sm tracking-wide text-left border ">
              EDIT TOOLS
            </th>
          </tr>
        </thead>
        {movie?.map((data, i) => {
          return (
            <tbody key={i}>
              <tr className="cursor-pointer  border-b-2">
                <td className="p-3 text-sm tracking-wide text-left ">
                  <img className="h-20 w-40" src={data.image} alt="" />
                </td>
                <td className="p-3 text-sm tracking-wide text-left border">
                  {data.id}
                </td>
                <td className="p-3 text-sm tracking-wide text-left border">
                  {data.title}
                </td>
                <td className="p-3 text-sm tracking-wide text-left border">
                  {data.release_year}
                </td>
                <td className="p-3 text-sm tracking-wide text-left border">
                  {data.count_watching ? data.count_watching : "0"}
                </td>
                <td className="p-3 text-sm tracking-wide text-left border">
                  {data.count_liked ? data.count_liked : "0"}
                </td>
                <td className="p-3 text-sm tracking-wide text-left border">
                  {data.detail ? data.detail : "---"}
                </td>
                <td className="p-3 text-sm tracking-wide text-left border">
                  {data.isTVShow ? "YES" : "NO"}
                </td>
                <td className="p-3 text-sm tracking-wide text-left border">
                  {data.enumGenres}
                </td>
                <td className="p-3 text-sm tracking-wide text-left border">
                  {data.trailer ? data.trailer : "---"}
                </td>
                <td className="flex items-center justify-center translate-y- gap-2">
                  <div
                    onClick={() => {
                      setDataEditModal(data);
                      setEditTargetId(data.id);
                      return setIsOpenEditModal(!isOpenEditModal);
                    }}
                    // onClick={()=>console.log(data)}
                    // onClick={()=>setDataEditModal(data)}
                    className="p-3 text-sm tracking-wide text-left border hover:bg-green-500 hover:text-white"
                  >
                    EDIT
                  </div>
                  <div
                    onClick={() => {
                      setMovieTargetDel({ id: data.id });
                      return setIsOpenConfirmDelete(!isOpenConfirmDelete);
                    }}
                    // onClick={()=>console.log(dataEditModal.enumGenres)}
                    className="p-3 text-sm tracking-wide text-left border hover:bg-red-500 hover:text-white"
                  >
                    DELETE
                  </div>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}

export default ListMovie;
