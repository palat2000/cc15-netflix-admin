import { useNavigate } from "react-router-dom";
import FormInput from "../../input/FormInput";

function LoginForm() {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <FormInput />
      <FormInput type="password" />
      <button className="bg-primary text-white rounded-md py-2">Submit</button>
    </form>
  );
}

export default LoginForm;
