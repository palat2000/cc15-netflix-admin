// import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { useAdmin } from "../../../hooks/use-admin";

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const { login } = useAdmin();

  const handleSubmitForm = (data) => {
    if (data) {
      login(data).catch((err) => {
        console.log("error_login", err.response?.data);
        setError("username", { message: err.response?.data?.message });
        // setError("password", { message: err.response?.data?.message });
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(handleSubmitForm)}
      className="flex flex-col gap-4"
    >
      {/* <FormInput />
      <FormInput type="password" /> */}

      <div>
        <input
          placeholder="Username"
          className=" border border-gray-400 rounded-sm outline-none px-4 py-2"
          {...register("username", {
            required: "Please enter a valid username.",
            minLength: {
              value: 5,
              message: "Please enter a valid username.",
            },
          })}
        />
        {errors.username && (
          <p className="text-[#e87c03] font-[13px]">
            {errors.username.message}
          </p>
        )}
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          className=" border border-gray-400 rounded-sm outline-none px-4 py-2"
          {...register("password", {
            required: "Your password must contain between 6 and 30 characters.",
            minLength: {
              value: 4,
              message:
                "Your password must contain between 6 and 30 characters.",
            },
            maxLength: {
              value: 60,
              message:
                "Your password must contain between 6 and 30 characters.",
            },
          })}
        />

        <div>
          {errors.password && (
            <p className="text-[#e87c03] font-[13px]">
              {errors.password.message}
            </p>
          )}
        </div>
      </div>

      <button className="bg-primary text-white rounded-md py-2">Submit</button>
    </form>
  );
}

export default LoginForm;
