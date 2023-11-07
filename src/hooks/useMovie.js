import { useContext } from "react";
import { MovieContext } from "../contexts/MovieContextProvider";

function useMovie() {
  return useContext(MovieContext);
}

export default useMovie;
