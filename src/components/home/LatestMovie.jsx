function LatestMovie() {
  return (
    <div className="w-fill h-full p-4 border shadow flex flex-col gap-4">
      <h2 className="font-bold text-xl">Latest Content</h2>
      <div className="grid grid-cols-4 gap-4">
        <div className="text-center">Movie</div>
        <div className="text-center">Genre</div>
        <div className="text-center">Year</div>
        <div className="text-center">Age limit</div>
        <div>Movie Name</div>
        <div>Genre Movie</div>
        <div>2023</div>
        <div>16</div>
        <div>Movie Name</div>
        <div>Genre Movie</div>
        <div>2023</div>
        <div>16</div>
        <div>Movie Name</div>
        <div>Genre Movie</div>
        <div>2023</div>
        <div>16</div>
        <div>Movie Name</div>
        <div>Genre Movie</div>
        <div>2023</div>
        <div>16</div>
      </div>
    </div>
  );
}

export default LatestMovie;
