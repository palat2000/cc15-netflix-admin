function NewestMembers({ newest }) {
  console.log(newest)
  return (
    <div className="h-full p-4  flex flex-col gap-4 w-full">
      <h2 className="font-bold text-xl">Newest Members</h2>
      <div className="p-2 " >
        <div className="flex ">

          <div className=" font-bold pl-1 pt-2 border-r-0 pr-10">ID</div>
          <div className="grid grid-cols-3 w-full">
            <div className=" font-bold pl-1 pt-2 border-r-0 ">User/Email</div>
            <div className=" font-bold pl-1 pr-1 pt-2 border-r-0 ">Lasted Active </div>
            <div className="font-bold pl-1 pt-2 ">Member expire</div>
          </div>

        </div>
        {newest?.map((e, index) => {
          return (<div className="flex">
            <div>
              <div className="pb-1 pt-1 pl-1 border-r-0 border-t-0 pr-12 ">{1 + index}</div>
            </div>
            <div className="grid grid-cols-3 w-full" key={index}>
              <div className="pb-1 pt-1  pl-1 border-r-0 border-t-0 pr-1">{e.email}</div>
              <div className=" pl-1 border-r-0 border-t-0">{e.activeAt?.slice(0, 10)}</div>
              <div className=" pl-1  border-t-0">{e.expiredDate?.slice(0, 10)}</div>
            </div>
          </div>
          )

        })}

      </div>
    </div>
  );
}

export default NewestMembers;
