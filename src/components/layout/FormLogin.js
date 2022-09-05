import { useForm } from "react-hook-form";

function FormLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-login">
      <div className="form-login-line">
        <label>username</label>
        <input {...register("userName", { required: true })} />
        {errors.userName && <span>Do you have a username?</span>}
      </div>
      <div className="form-login-line">
        <label>password</label>
        <input {...register("Password", { required: true })} />
        {errors.Password && <span>Password Please</span>}
      </div>
      <div className="form-loginbutton-container">
        <button className="form-loginbutton-button">
          <a href="/home">Login</a>
        </button>
      </div>
    </form>
  );
}

export default FormLogin;
