import { useState, createContext } from "react";
import axios from "axios";

export const MovieContext = createContext(null);

function MovieContextProvider({ children }) {
  const [inputData, setInputData] = useState([]);
  const [data, setData] = useState(null);

  const handleUploadFile = async (e) => {
    try {
      const formData = new FormData();
      formData.append("file", e.target.files[0]);
      const res = await axios.post(
        "http://localhost:8080/admin/prepare-file",
        formData
      );
      setData(res.data.formattedData);
    } catch (err) {
      console.log(err);
    }
  };


  
  const addMovie = () => {
    setInputData([
      ...inputData,
      {
        title: "",
        isTVShow: false,
        image: null,
        release_year: null,
        genres: null,
        trailer: null,
        detail: "",
        actorName: ["", ""],
        video: [{ videoEpisodeName: "", videoEpisodeNo: "", video: null }],
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

    const addData = (value, name, movieId) => {
      const newInputData = [...inputData];
      const newInputDataIndex = newInputData.findIndex(
        (movie) => movie.id === movieId
      );
      const data = [...newInputData[newInputDataIndex][name], value];
      newInputData.splice(newInputDataIndex, 1, {
        ...newInputData[newInputDataIndex],
        [name]: data,
      });
      setInputData(newInputData);
    };

    const removeData = (name, movieId, dataId) => {
      const newInputData = [...inputData];
      const newInputDataIndex = newInputData.findIndex(
        (movie) => movie.id === movieId
      );
      const data = {
        [name]: newInputData[newInputDataIndex][name].filter(
          (data) => data.id !== dataId
        ),
      };
      const newData = { ...newInputData[newInputDataIndex], [name]: data };
      newInputData.splice(newInputDataIndex, 1, newData);
      setInputData(newInputData);
    };
  return (
    <MovieContext.Provider
      value={{ handleUploadFile, data, setData,addMovie }}
    >
      {children}
    </MovieContext.Provider>
  );
}

export default MovieContextProvider;
