import useMovie from "../../hooks/useMovie";
import FormInput from "./FormInput";
import FormInputFile from "./FormInputFile";

function FormVideo({ video, movie }) {
  const { setInputData, inputData } = useMovie();

  const handleChangeText = (e) => {
    const newInputData = [...inputData];
    const index = newInputData.findIndex((el) => el.id === movie.id);
    newInputData[index].video = newInputData[index].video.map((el) => {
      if (el.id !== video.id) {
        return el;
      }
      return { ...el, [e.target.name]: e.target.value };
    });
    setInputData(newInputData);
  };

  const handleChangeFile = (e) => {
    if (e.target.files[0]) {
      const newInputData = [...inputData];
      const index = newInputData.findIndex((el) => el.id === movie.id);
      newInputData[index].video = newInputData[index].video.map((el) => {
        if (el.id !== video.id) {
          return el;
        }
        return { ...el, video: e.target.files[0] };
      });
      setInputData(newInputData);
    }
  };

  return (
    <div>
      <FormInput
        onChange={handleChangeText}
        value={video.videoEpisodeName}
        name="videoEpisodeName"
        placeholder="videoEpisodeName"
      />
      <FormInput
        onChange={handleChangeText}
        value={video.videoEpisodeNo}
        name="videoEpisodeNo"
        placeholder="videoEpisodeNo"
      />
      {video.video ? (
        <video width="200px" controls>
          <source src={video.video} />
        </video>
      ) : (
        <FormInputFile onChange={handleChangeFile} />
      )}
    </div>
  );
}

export default FormVideo;
