import React from "react";
import { useState } from "react";
import { PlusIcon } from "../icon/Icon";
import useMovie from "../../hooks/useMovie";
import AddMovie from "./AddMovie";
import { useRef } from "react";
import { nanoid } from "nanoid";
import "./addMovieForm.css";
import ColMovie from "./ColMovie";

function AddMovieForm() {
  const inputRef = useRef(null);
  // const { addMovie, inputData, setInputData } = useMovie();
  const { handleUploadFile, data, setData } = useMovie();

  const handleSubmit = (e) => {
    e.preventDefault();
    // setInputData([]);
  };

  return (
    <div className="flex flex-col">
      <form className="flex flex-col" onSubmit={handleSubmit}>
        {/* {inputData.map((movie) => (
          <AddMovie key={movie.id} movie={movie} />
        ))} */}
        {!data && (
          <div className="flex">
            <div
              onClick={() => inputRef.current.click()}
              className="bg-primary self-start p-2 rounded-full hover:rotate-[360deg] transition-transform duration-200 cursor-pointer"
            >
              <PlusIcon size="1rem" />
            </div>
            <input
              ref={inputRef}
              onChange={handleUploadFile}
              className="hidden"
              type="file"
            />
          </div>
        )}
        {data && (
          <table className="data-table">
            <thead>
              <tr>
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
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{item.title}</td>
                  <td>{item.isTVShow ? "Yes" : "No"}</td>
                  <td>
                    {item.image ? (
                      <img src={item.image} alt={item.title} />
                    ) : (
                      "N/A"
                    )}
                  </td>
                  <td>{item.release_year || "N/A"}</td>
                  <td>{item.genres || "N/A"}</td>
                  <td>
                    {item.trailer ? (
                      <a href={item.trailer}>Watch Trailer</a>
                    ) : (
                      "N/A"
                    )}
                  </td>
                  <td>{item.detail}</td>
                  <td>{item.actorName.join(", ")}</td>
                  <td><ColMovie item={item} name="videoEpisodeName" /></td>
                  <td><ColMovie item={item} name="videoEpisodeNo" /></td>
                  <td>
                    {item.video.map((videoItem, index) =>
                      videoItem.videoUrl ? (
                        <div key={index}>
                          <a href={videoItem.videoUrl}>Watch Video</a>
                        </div>
                      ) : (
                        "N/A"
                      )
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {data && (
          <div className="flex">
            <button className="px-3 py-1 bg-primary text-white rounded-md self-start">
              Submit
            </button>
            <button
              onClick={() => setData(null)}
              type="button"
              className="px-3 py-1 text-primary rounded-md self-start"
            >
              Cancel
            </button>
          </div>
        )}
      </form>
    </div>
  );
}

export default AddMovieForm;
