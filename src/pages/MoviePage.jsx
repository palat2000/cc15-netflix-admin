import AddMovieForm from "../components/movie/AddMovieForm";
import EditMovieUpload from "../components/movie/EditMovieUpload";
import ListMovie from "../components/movie/ListMovie";
import axios from "axios";
import { useEffect, useState } from "react";

function MoviePage() {

  const [trigger, setTrigger] = useState(false);

  return (
    <div className="flex flex-col h-full p-6 gap-4">
      <AddMovieForm />
      <EditMovieUpload setTrigger={setTrigger}/>
      <div className="flex-1">
        <ListMovie setTrigger={setTrigger} trigger={trigger}/>
      </div>
    </div>
  );
}

export default MoviePage;
