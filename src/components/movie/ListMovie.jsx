import axios from "axios";
import { useEffect, useState } from "react";
import { TiPencil } from "react-icons/ti";

function ListMovie() {
  const [movie, setMovie] = useState([]);
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const [dataEditModal, setDataEditModal] = useState(false);

  const [isOpenEditImage, setIsOpenEditImage] = useState(false);
  const [image, setIamge] = useState(null);

  const [isOpenEditTitle, setIsOpenEditTitle] = useState(false);
  const [title, setTitle] = useState(movie.title);

  const [isOpenYear, setIsOpenYear] = useState(false);
  const [year, setYear] = useState(null);

  const [isOpenCounWatch, setIsOpenCountWatch] = useState();
  const [countWatch, setCountWatch] = useState(null);

  const [isOpenCountLike, setIsOpenCountLike] = useState(false);
  const [countLike, setCountLike] = useState(null);

  const [isOpenDetail, setIsOpenDetail] = useState(false);
  const [detail, setDetail] = useState(null);

  const [isOpenTvShow, setIsOpenTvShow] = useState(false);
  const [tvShow, setTvShow] = useState(false);

  const [isOpenEnumGen, setIsOpenEnumGen] = useState(false);
  const [enumGen, setEnumGen] = useState(null);

  const [isOpenTrailer, setIsOpenTrailer] = useState(false);
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
      .post("http://localhost:8080/admin/delete-movieList", movieTargetDel.id)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const isTvShowHandleChange = () => {
    return setTvShow(!tvShow);
  };
const [isOpenConfirmDelete, setIsOpenConfirmDelete] =useState(false)
  const [test, setTest] = useState(null);

  const editMovieList = () => {
    const formData = new FormData();

    if (image !== null) formData.append("movieListImage", image);
    formData.append("title", title);
    formData.append("year", year);
    formData.append("countWatch", countWatch);
    formData.append("countLike", countLike);
    formData.append("detail", detail);
    formData.append("tvShow", tvShow);
    formData.append("enumGen", enumGen);
    formData.append("trailer", trailer);
    formData.append("editTargetId", editTargetId);

    const resEdit = axios
      .patch("http://localhost:8080/admin/edit-movieList", formData)
      .then((res) => setTest(res));
  };
  console.log(test);

  const defaultImage =
  "https://www.clipartbest.com/cliparts/dT8/on6/dT8on6qTe.jpeg";
  return (
    <div className="relative">
      {   isOpenConfirmDelete && <div className="bg-gray-300 absolute flex flex-col p-10  mx-44  items-center m-40 translate-x-full">
            <div
            className="justify-center"
            >Do you want to delete this item ?</div>
            <br />
            <div className="flex gap-2">
              <div
              className="cursor-pointer hover:bg-gray-400"
         onClick={deleteMovieList}
              >Confirm</div>
              <div
              className="cursor-pointer hover:bg-gray-400"
               onClick={()=>setIsOpenConfirmDelete(!isOpenConfirmDelete)}
              >Cancel</div>
            </div>
          </div>}
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
                  {data.count_watching}
                </td>
                <td className="p-3 text-sm tracking-wide text-left border">
                  {data.count_liked}
                </td>
                <td className="p-3 text-sm tracking-wide text-left border">
                  {data.detail}
                </td>
                <td className="p-3 text-sm tracking-wide text-left border">
                  {data.isTVShow}
                </td>
                <td className="p-3 text-sm tracking-wide text-left border">
                  {data.enumGenres}
                </td>
                <td className="p-3 text-sm tracking-wide text-left border">
                  {data.trailer}
                </td>
                <td className="flex items-center justify-center translate-y- gap-2">
                  <div
                    onClick={() => {
                      setDataEditModal(data);
                      setEditTargetId(data.id);
                      return setIsOpenEditModal(!isOpenEditModal);
                    }}
                    className="p-3 text-sm tracking-wide text-left border hover:bg-green-500 hover:text-white"
                  >
                    EDIT
                  </div>
                  <div
                    // onClick={() => {
                    //   return deleteMovieList({ id: data.id });
                    // }}
                    // onClick={()=>console.log(data)}
                    onClick={()=>{
                      setMovieTargetDel({id:data.id})
                     return setIsOpenConfirmDelete(!isOpenConfirmDelete)}}
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
      {isOpenEditModal && (
        <table className="bg-gray-100   w-full h-full  absolute -translate-y-full">
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
            <tr className="border-4">
              <td className="border-4">ID</td>
              <td className="">{dataEditModal.id}</td>
            </tr>
            <tr className="border-4">
              <td className="border-4">Title</td>
              <td className="border-4">{dataEditModal.title}</td>
              <div>title {title ? title : "---"} </div>
              {isOpenEditTitle && (
                <td className="flex gap-2">
                  <input
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                    value={title}
                    type="text"
                    name=""
                    id=""
                  />
                  <div
                    className="cursor-pointer"
                    onClick={() => setIsOpenEditTitle(!isOpenEditTitle)}
                  >
                    SAVE
                  </div>
                  <div
                    className="cursor-pointer"
                    onClick={() => setTitle(null)}
                  >
                    DELETE
                  </div>
                  <div
                    className="cursor-pointer"
                    onClick={() => {
                      return setIsOpenEditTitle(!isOpenEditTitle);
                    }}
                  >
                    CANCEL
                  </div>
                </td>
              )}
              {!isOpenEditTitle && (
                <td>
                  <TiPencil
                    onClick={() => setIsOpenEditTitle(!isOpenEditTitle)}
                    className="cursor-pointer"
                  />
                </td>
              )}
            </tr>

            <tr className="border-4">
              <td className="border-4">Release year</td>
              <td className="border-4">{dataEditModal.release_year}</td>
              <div>Release year {year ? year : "---"}</div>
              {isOpenYear && (
                <td className="flex gap-2">
                  <input
                    onChange={(e) => {
                      setYear(e.target.value);
                    }}
                    value={year}
                    type="text"
                    name=""
                    id=""
                  />
                  <div
                    className="cursor-pointer"
                    onClick={() => setIsOpenYear(!isOpenYear)}
                  >
                    SAVE
                  </div>
                  <div className="cursor-pointer" onClick={() => setYear(null)}>
                    DELETE
                  </div>
                  <div
                    className="cursor-pointer"
                    onClick={() => {
                      return setIsOpenYear(!isOpenYear);
                    }}
                  >
                    CANCEL
                  </div>
                </td>
              )}
              {!isOpenYear && (
                <td>
                  <TiPencil
                    onClick={() => setIsOpenYear(!isOpenYear)}
                    className="cursor-pointer"
                  />
                </td>
              )}
            </tr>

            <tr className="border-4">
              <td className="border-4">Counting watching</td>
              <td className="border-4">{dataEditModal.count_watching}</td>
              <div>Counting watching {countWatch ? countWatch : "---"}</div>
              {isOpenCounWatch && (
                <td className="flex gap-2 ">
                  <input
                    onChange={(e) => {
                      setCountWatch(e.target.value);
                    }}
                    value={countWatch}
                    type="text"
                    name=""
                    id=""
                  />
                  <div
                    className="cursor-pointer"
                    onClick={() => setIsOpenCountWatch(!isOpenCounWatch)}
                  >
                    SAVE
                  </div>
                  <div
                    className="cursor-pointer"
                    onClick={() => setCountWatch(null)}
                  >
                    DELETE
                  </div>
                  <div
                    className="cursor-pointer"
                    onClick={() => setIsOpenCountWatch(!isOpenCounWatch)}
                  >
                    CANCEL
                  </div>
                </td>
              )}
              {!isOpenCounWatch && (
                <td>
                  <TiPencil
                    onClick={() => setIsOpenCountWatch(!isOpenCounWatch)}
                    className="cursor-pointer"
                  />
                </td>
              )}
            </tr>

            <tr className="border-4">
              <td className="border-4">Counting Liking</td>
              <td className="border-4">{dataEditModal.count_liked}</td>
              <div>Counting Liking {countLike ? countLike : "---"}</div>
              {isOpenCountLike && (
                <td className="flex gap-2">
                  <input
                    onChange={(e) => {
                      setCountLike(e.target.value);
                    }}
                    value={countLike}
                    type="text"
                    name=""
                    id=""
                  />
                  <div
                    className="cursor-pointer"
                    onClick={() => setIsOpenCountLike(!isOpenCountLike)}
                  >
                    SAVE
                  </div>
                  <div
                    className="cursor-pointer"
                    onClick={() => setCountLike(null)}
                  >
                    DELETE
                  </div>
                  <div
                    className="cursor-pointer"
                    onClick={() => setIsOpenCountLike(!isOpenCountLike)}
                  >
                    CANCEL
                  </div>
                </td>
              )}
              {!isOpenCountLike && (
                <td>
                  <TiPencil
                    onClick={() => setIsOpenCountLike(!isOpenCountLike)}
                    className="cursor-pointer"
                  />
                </td>
              )}
            </tr>

            <tr className="border-4">
              <td className="border-4">Detail</td>
              <td className="w-96 border-4">{dataEditModal.detail}</td>
              <div>Detail {detail ? detail : "---"}</div>
              {isOpenDetail && (
                <td className="flex gap-2">
                  {" "}
                  <textarea
                    onChange={(e) => {
                      setDetail(e.target.value);
                    }}
                    value={detail}
                    type="text"
                    name=""
                    id=""
                  />
                  <div
                    className="cursor-pointer"
                    onClick={() => setIsOpenDetail(!isOpenDetail)}
                  >
                    SAVE
                  </div>
                  <div
                    className="cursor-pointer"
                    onClick={() => setDetail(null)}
                  >
                    DELETE
                  </div>
                  <div
                    className="cursor-pointer"
                    onClick={() => setIsOpenDetail(!isOpenDetail)}
                  >
                    CANCEL
                  </div>
                </td>
              )}
              {!isOpenDetail && (
                <td>
                  <TiPencil
                    onClick={() => setIsOpenDetail(!isOpenDetail)}
                    className="cursor-pointer"
                  />
                </td>
              )}
            </tr>

            <tr className="border-4">
              <td className="border-4">TVShow</td>
              <td className="border-4">{dataEditModal.isTVShow}</td>
              <div className="flex gap-5">
                <div>TVShow</div>
                <input
                  onChange={isTvShowHandleChange}
                  value={tvShow}
                  type="checkbox"
                  name=""
                  id=""
                />
              </div>
              {/* {isOpenTvShow && (
                <td className="flex gap-2">
                  <div
                    className="cursor-pointer"
                    onClick={() => setIsOpenTvShow(!isOpenTvShow)}
                  >
                    SAVE
                  </div>
                  <div
                    className="cursor-pointer"
                    onClick={() => setIsOpenTvShow(null)}
                  >
                    DELETE
                  </div>
                  <div
                    className="cursor-pointer"
                    onChange={() => setIsOpenTvShow(!isOpenTvShow)}
                  >
                    CANCEL
                  </div>
                </td>
              )}
              {!isOpenTvShow && (
                <td>
                  <TiPencil
                    onClick={() => setIsOpenTvShow(!isOpenTvShow)}
                    className="cursor-pointer"
                  />
                </td>
              )} */}
            </tr>

            <tr className="border-4">
              <td className="border-4">Enum Genres</td>
              <td className="border-4">{dataEditModal.enumGenres}</td>
              <div>Enum Genres : {enumGen ? enumGen : "---"}</div>
              {isOpenEnumGen && (
                <td className="flex gap-2">
                  {/* <input
                    onChange={(e) => {
                      setEnumGen(e.target.value);
                    }}
                    value={enumGen}
                    type="text"
                    name=""
                    id=""
                  /> */}
                  {isOpenEnumGen && (
                    <div className="flex flex-col absolute bg-gray-300 gap-1 p-1">
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

                  {/* <div
                    onClick={() => setIsOpenEnumGen(!isOpenEnumGen)}
                    className="cursor-pointer"
                  >
                    SAVE
                  </div>
                  <div
                    onClick={() => setEnumGen(null)}
                    className="cursor-pointer"
                  >
                    DELETE
                  </div>
                  <div
                    onClick={() => setIsOpenEnumGen(!isOpenEnumGen)}
                    className="cursor-pointer"
                  >
                    CANCEL
                  </div> */}
                </td>
              )}
              {!isOpenEnumGen && (
                <td>
                  <TiPencil
                    onClick={() => setIsOpenEnumGen(!isOpenEnumGen)}
                    className="cursor-pointer"
                  />
                </td>
              )}
            </tr>

            <tr className="border-4">
              <td className="border-4">Trailer</td>
              <td className="border-4">{dataEditModal.trailer}</td>
              <div>Trailer {trailer ? trailer : "---"}</div>
              {isOpenTrailer && (
                <td className="flex gap-2">
                  <input
                    onChange={(e) => {
                      setTrailer(e.target.value);
                    }}
                    value={trailer}
                    type="text"
                    name=""
                    id=""
                  />
                  <div
                    onClick={() => setIsOpenTrailer(!isOpenTrailer)}
                    className="cursor-pointer"
                  >
                    SAVE
                  </div>
                  <div
                    onClick={() => setTrailer(null)}
                    className="cursor-pointer"
                  >
                    DELETE
                  </div>
                  <div
                    onClick={() => setIsOpenTrailer(!isOpenTrailer)}
                    className="cursor-pointer"
                  >
                    CANCEL
                  </div>
                </td>
              )}
              {!isOpenTrailer && (
                <td>
                  <TiPencil
                    onClick={() => setIsOpenTrailer(!isOpenTrailer)}
                    className="cursor-pointer"
                  />
                </td>
              )}
              <tr className="flex justify-end gap-5 ">
                <td
                  onClick={editMovieList}
                  className="bg-gray-500 cursor-pointer text-white p-2 translate-y-11 hover:bg-gray-400"
                >
                  SAVE
                </td>
                <td
                  className="cursor-pointer bg-gray-500 text-white p-2 translate-y-11 hover:bg-gray-400"
                  onClick={() => setIsOpenEditModal(!isOpenEditModal)}
                >
                  CANCEL
                </td>
              </tr>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ListMovie;
