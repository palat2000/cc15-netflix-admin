import AddMovieForm from "../components/movie/AddMovieForm";
import ListMovie from "../components/movie/ListMovie";

function MoviePage() {
  return (
    <div className="flex flex-col h-full p-6 gap-4">
      <AddMovieForm />
      <div className="flex-1">
        <ListMovie />
      </div>
    </div>
  );
}

export default MoviePage;
