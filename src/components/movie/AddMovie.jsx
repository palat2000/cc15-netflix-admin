import FormInput from "../input/FormInput";
import FormVideo from "../input/FormVideo";
import useMovie from "../../hooks/useMovie";

function AddMovie({ movie }) {
  const { addVideo } = useMovie();
  return (
    <div>
      <FormInput placeholder="title" />
      <FormInput placeholder="detail" />
      <div
        onClick={() => addVideo(movie.id)}
        className="bg-primary px-2 py-1 text-white block"
      >
        Add more video
      </div>
      {movie.video.map((video) => (
        <FormVideo key={video.id} movie={movie} video={video} />
      ))}
    </div>
  );
}

export default AddMovie;
