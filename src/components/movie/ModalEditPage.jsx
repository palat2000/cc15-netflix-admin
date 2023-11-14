import { useState } from "react";
import MovieEditPage from "./MovieEditPage";

export default function ModalEditPage({ movie,openModal,setOpenModal }) {

  return (<div className="flex"
  onClick={(e)=>{
    e.stopPropagation()
  }}>
    
    {openModal && <MovieEditPage movie={movie} setOpenModal={setOpenModal}/>}
    
  </div>
  
      )
    }
    