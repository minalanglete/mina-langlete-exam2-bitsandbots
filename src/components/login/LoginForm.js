import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import ValidationError from "../common/FormError";
import { BASE_URL, TOKEN_PATH } from "../../constants/apiWP";

const url = BASE_URL + TOKEN_PATH;

const schema = yup.object().shape({
  username: yup.string().required("Please enter your username"),
  password: yup.string().required("Please enter your password"),
});

export default function LoginForm() {
  const [submitting, setSubmitting] = useState(false);
  const [loginError, setLoginError] = useState(null);

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  async function onSubmit(data) {
    setSubmitting(true);
    setLoginError(null);

    console.log(data);

    try {
      const response = await axios.post(url, data);
      console.log("response", response.data);
    } catch (error) {
      console.log("error", error);
      setLoginError(error.toString());
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {loginError && <ValidationError>{loginError}</ValidationError>}
        <fieldset disabled={submitting}>
          <div>
            <input name="username" placeholder="Username" ref={register} />
            {errors.username && <ValidationError>{errors.username.message}</ValidationError>}
          </div>

          <div>
            <input name="password" placeholder="Password" ref={register} type="password" />
            {errors.password && <ValidationError>{errors.password.message}</ValidationError>}
          </div>
          <button>{submitting ? "Loggin in..." : "Login"}</button>
        </fieldset>
      </form>
    </>
  );
}
