import { useState } from "react";
import { useNavigate } from "react-router-dom";

const OPTION = [
  { id: "/", title: "Home" },
  { id: "user", title: "User" },
  { id: "movie", title: "Movie" },
];

function SideBar() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState("/");
  return (
    <div className="w-64 py-8 bg-black">
      <ul className="text-white text-center flex flex-col gap-4 px-4">
        {OPTION.map((el) => (
          <li
            onClick={() => {
              setSelected(el.id);
              navigate(el.id);
            }}
            className={`py-2 hover:bg-gray-400 rounded-md cursor-pointer ${
              selected === el.id && "bg-gray-400"
            }`}
            key={el.id}
          >
            {el.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;
