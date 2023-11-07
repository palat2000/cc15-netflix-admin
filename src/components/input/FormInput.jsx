function FormInput({ type = "text", placeholder, value, onChange, name, id }) {
  return (
    <input
      placeholder={placeholder}
      className="border border-gray-400 rounded-sm outline-none px-4 py-2"
      type={type}
      value={value}
      onChange={onChange}
      name={name}
      id={id}
    />
  );
}

export default FormInput;
