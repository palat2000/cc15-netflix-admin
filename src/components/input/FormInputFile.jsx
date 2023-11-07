import { useRef } from "react";
import { PlusIcon } from "../icon/Icon";

function FormInputFile({ onChange }) {
  const inputRef = useRef(null);
  return (
    <div className="flex">
      <div
        onClick={() => inputRef.current.click()}
        className="bg-white self-start p-2 rounded-full hover:rotate-[360deg] transition-transform duration-200 cursor-pointer"
      >
        <PlusIcon size="1rem" color="#E50914" />
      </div>
      <input
        ref={inputRef}
        className="hidden"
        onChange={onChange}
        type="file"
      />
    </div>
  );
}

export default FormInputFile;
