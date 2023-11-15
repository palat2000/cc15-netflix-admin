import { useState } from "react"
import ModalEditPage from "./ModalEditPage"

export default function HandleModal({ movie ,setTrigger }) {
    const [openModal, setOpenModal] = useState(false)
    return <div>
        <div
            onClick={() => {
                setOpenModal(!openModal)
            }}
            className="flex  border p-1 rounded-md cursor-pointer gap-2 ">
            <div className="flex-1">

                <img className="w-56 rounded-lg drop-shadow-lg" src={movie.image} alt="abc" />
                <div className="flex">
                    <div className="font-bold">Name:</div>
                    <div className="flex justify-start">{movie.title}</div>
                </div>
            </div>
            <div >

                <ModalEditPage movie={movie} setTrigger={setTrigger}setOpenModal={setOpenModal} openModal={openModal} />
                
            </div>
            
        </div>
    </div>
}