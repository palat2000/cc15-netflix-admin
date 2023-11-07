import { useState } from "react";
import { PlusIcon } from "../icon/Icon";
import useMovie from "../../hooks/useMovie";
import AddMovie from "./AddMovie";

function AddMovieForm() {
  const { addMovie, inputData, setInputData } = useMovie();

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputData([]);
  };

  return (
    <div className="flex flex-col">
      <div
        onClick={addMovie}
        className="bg-primary self-start p-2 rounded-full hover:rotate-[360deg] transition-transform duration-200 cursor-pointer"
      >
        <PlusIcon size="1rem" />
      </div>
      <form onSubmit={handleSubmit}>
        {inputData.map((movie) => (
          <AddMovie key={movie.id} movie={movie} />
        ))}
        <button className="px-3 py-1 bg-primary text-white rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddMovieForm;
