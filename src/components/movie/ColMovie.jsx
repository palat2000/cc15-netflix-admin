function ColMovie({ item, name }) {
  return (
    <div className="flex flex-col gap-10 h-full">
      {item.video.map((videoItem, idx) => {
        return (
          <div key={idx}>
            <h2>{videoItem[name]}</h2>
          </div>
        );
      })}
    </div>
  );
}

export default ColMovie;
