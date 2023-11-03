import FormInput from "../FormInput";

function RegisterForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <FormInput />
      <FormInput type="password" />
      <FormInput type="password" />
      <button className="bg-primary text-white rounded-md py-2">Submit</button>
    </form>
  );
}

export default RegisterForm;
