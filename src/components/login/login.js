import React, { useRef } from "react";

function LoginWithLocalStorage() {
  const name = useRef();
  const password = useRef();
  const getName = localStorage.getItem("name");
  const getPassword = localStorage.getItem("password");
  const handleSubmit = () => {
    if (name.current.value === getName && password.current.value === getPassword) {
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" ref={name} />
        </div>
        <div>
          <input type="password" ref={password} />
        </div>
        <button>Login</button>
      </form>
    </div>
  );
}
export default LoginWithLocalStorage;
