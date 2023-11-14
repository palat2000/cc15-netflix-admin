import { useRef, useState } from "react";
import useMovie from "../../hooks/useMovie";
import ModalEditPage from "./ModalEditPage";
import HandleModal from "./HandleModal";

export default function ListMovie() {
  const { data } = useMovie()

  return (<>
    <div>ListMovie</div>
    <div className="flex">
      <div className="flex gap-2 flex-col">
        {data?.map((e) => {
          return <div key={e.title}className="flex ">
            <HandleModal movie={e} />
          </div>

        })}

      </div>
    </div >
  </>
  )


}
