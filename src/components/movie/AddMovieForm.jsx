import { useState } from "react";
import { nanoid } from "nanoid";
import { PlusIcon } from "../icon/Icon";

function AddMovieForm() {
  const [inputData, setInputData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const addMovie = () => {
    setInputData([
      ...inputData,
      {
        id: nanoid,
        title: "",
        isTVShow: false,
        image: null,
        release_year: null,
        genres: null,
        trailer: null,
        detail: null,
        actorName: [],
        video: [
          {
            videoEpisodeName: null,
            videoEpisodeNo: null,
            video: null,
          },
        ],
      },
    ]);
  };
  return (
    <div className="flex flex-col">
      <form onSubmit={handleSubmit}></form>
      <div className="bg-primary self-start p-2 rounded-full hover:rotate-[360deg] transition-transform duration-200 cursor-pointer">
        <PlusIcon size="1rem" />
      </div>
    </div>
  );
}

export default AddMovieForm;
