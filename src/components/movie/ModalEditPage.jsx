import { useState } from "react";
import MovieEditPage from "./MovieEditPage";

export default function ModalEditPage({ movie,openModal,setOpenModal,setTrigger }) {

  return (<div className="flex"
  onClick={(e)=>{
    e.stopPropagation()
  }}>
    
    {openModal && <MovieEditPage movie={movie} setTrigger={setTrigger} setOpenModal={setOpenModal}/>}
    
  </div>
  
      )
    }
    