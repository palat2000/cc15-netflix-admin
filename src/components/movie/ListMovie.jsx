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
  const [tvShow, setTvShow] = useState(null);

  const [isOpenEnumGen, setIsOpenEnumGen] = useState(false);
  const [enumGen, setEnumGen] = useState(null);

  const [isOpenTrailer, setIsOpenTrailer] = useState(false);
  const [trailer, setTrailer] = useState(null);

  const [movieTargetDel, setMovieTargetDel] = useState(null);
  useEffect(() => {
    console.log("first");
    axios
      .get("http://localhost:8080/admin/read-movieList")
      .then((res) => setMovie(res.data))
      .catch((err) => console.log(err));
  }, []);

  const deleteMovieList = (data) => {
    axios
      .post("http://localhost:8080/admin/delete-movieList", data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  const defaultImage =
    "https://www.clipartbest.com/cliparts/dT8/on6/dT8on6qTe.jpeg";
  return (
    <div className=" ">
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
              TOOLS
            </th>
          </tr>
        </thead>
        {movie?.map((data, i) => {
          return (
            <tbody key={i}>
              <tr className="cursor-pointer  border-b-2">
                <td className="p-3 text-sm tracking-wide text-left h-40 w-40">
                  <img src={data.image} alt="" />
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
                <div className="flex items-center justify-center translate-y-20 gap-2">
                  <td
                    onClick={() => {
                      setDataEditModal(data);
                      return setIsOpenEditModal(!isOpenEditModal);
                    }}
                    className="p-3 text-sm tracking-wide text-left border hover:bg-green-500 hover:text-white"
                  >
                    EDIT
                  </td>
                  <td
                    onClick={() => {
                      return deleteMovieList({ id: data.id });
                    }}
                    className="p-3 text-sm tracking-wide text-left border hover:bg-red-500 hover:text-white"
                  >
                    DELETE
                  </td>
                </div>
              </tr>
            </tbody>
          );
        })}
      </table>
      {isOpenEditModal && (
        <table className="bg-gray-100   w-full h-full -translate-y-96 ">
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
                    onClick={() => isOpenEditTitle(!isOpenEditTitle)}
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
                  <input
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
              <div>TVShow {tvShow ? tvShow : "---"}</div>
              {isOpenTvShow && (
                <td className="flex gap-2">
                  <input
                    onChange={(e) => {
                      setTvShow(e.target.value);
                    }}
                    value={tvShow}
                    type="text"
                    name=""
                    id=""
                  />
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
                    onClick={() => setIsOpenTvShow(!isOpenTvShow)}
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
              )}
            </tr>

            <tr className="border-4">
              <td className="border-4">Enum Genres</td>
              <td className="border-4">{dataEditModal.enumGenres}</td>
              <div>Enum Genres {enumGen ? enumGen : "---"}</div>
              {isOpenEnumGen && (
                <td className="flex gap-2">
                  <input
                    onChange={(e) => {
                      setEnumGen(e.target.value);
                    }}
                    value={enumGen}
                    type="text"
                    name=""
                    id=""
                  />
                  <div
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
                  </div>
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
            <td className="bg-gray-500 cursor-pointer text-white p-2 translate-y-11">Okay</td>
            <td
              className="cursor-pointer bg-gray-500 text-white p-2 translate-y-11"
              onClick={() => setIsOpenEditModal(!isOpenEditModal)}
            >
              Cancel
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
