import { useState, createContext } from "react";
import { nanoid } from "nanoid";

export const MovieContext = createContext(null);

function MovieContextProvider({ children }) {
  const [inputData, setInputData] = useState([]);

  const addMovie = () => {
    setInputData([
      ...inputData,
      {
        id: nanoid(),
        title: "",
        isTVShow: false,
        image: null,
        release_year: null,
        genres: null,
        trailer: null,
        detail: "",
        actorName: [{ id: nanoid(), name: "" }],
        video: [],
      },
    ]);
  };

  const addVideo = (movieId) => {
    const newInputData = [...inputData];
    const index = newInputData.findIndex((movie) => movie.id === movieId);
    newInputData[index].video = [
      ...newInputData[index].video,
      { id: nanoid(), videoEpisodeName: "", videoEpisodeNo: "", video: null },
    ];
    setInputData([...newInputData]);
  };

  const addActor = (movieId) => {
    const newInputData = [...inputData];
    const index = newInputData.findIndex((movie) => movie.id === movieId);
    newInputData[index].actorName = [
      ...newInputData[index].actorName,
      { id: nanoid(), name: "" },
    ];
    setInputData(newInputData);
  };

  //   const addData = (value, name, movieId) => {
  //     const newInputData = [...inputData];
  //     const newInputDataIndex = newInputData.findIndex(
  //       (movie) => movie.id === movieId
  //     );
  //     const data = [...newInputData[newInputDataIndex][name], value];
  //     newInputData.splice(newInputDataIndex, 1, {
  //       ...newInputData[newInputDataIndex],
  //       [name]: data,
  //     });
  //     setInputData(newInputData);
  //   };

  //   const removeData = (name, movieId, dataId) => {
  //     const newInputData = [...inputData];
  //     const newInputDataIndex = newInputData.findIndex(
  //       (movie) => movie.id === movieId
  //     );
  //     const data = {
  //       [name]: newInputData[newInputDataIndex][name].filter(
  //         (data) => data.id !== dataId
  //       ),
  //     };
  //     const newData = { ...newInputData[newInputDataIndex], [name]: data };
  //     newInputData.splice(newInputDataIndex, 1, newData);
  //     setInputData(newInputData);
  //   };

  return (
    <MovieContext.Provider
      value={{ inputData, addMovie, addVideo, addActor, setInputData }}
    >
      {children}
    </MovieContext.Provider>
  );
}

export default MovieContextProvider;
