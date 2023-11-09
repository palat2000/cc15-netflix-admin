function ColMovie({ item, name }) {
  return (
    
    <div className="flex flex-col gap-2 h-full ">
      {item.video.map((videoItem, idx) => {
        return (
          <div key={idx} className="items-center justify-center">
            <h2>{videoItem[name]}</h2>
          </div>
        );
      })}
    </div>
  );
}

export default ColMovie;
