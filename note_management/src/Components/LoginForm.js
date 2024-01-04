import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserPass from "./UserPass";

export default function LoginForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userInfo: {},
  });

  const handleUserPassChange = (userInfo) => {
    setFormData({ ...formData, userInfo });
    console.log(formData.userInfo);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const reqBody = {
    //   username: formData.userInfo,
    //   password: formData.userInfo,
    // };

    // try {
    //   const response = await axios.post(
    //     "http://192.168.182.33:8000/login",
    //     reqBody
    //   );
    //   if (response.data.token) {
    //     localStorage.setItem("token", response.data.token);
    //     navigate("/userID/home", { replace: true });
    //   } else {
    //     const err = { Error: "Invalid Credentials" };
    //     throw err;
    //   }
    // } catch (err) {
    //   console.log(err);
    //   alert("Invalid Credentials");
    //   // setFormData({ ...formData, {} });
    // }
    navigate("/userId/home", { replace: true });
  };

  const handleSignUp = (e) => {
    navigate("/signup", { replace: true });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="offset-5 fw-bold fs-2">Login</div>
      <UserPass onChange={handleUserPassChange} />
      <div>
        <button type="submit" className="btn btn-primary mt-2 offset-5 mb-2">
          Login
        </button>
      </div>
      <div>
        <span onClick={handleSignUp}>
          New User?{" "}
          <a hrefLang="/signup" className="text-decoration-underline">
            SignUp
          </a>
        </span>
      </div>
    </form>
  );
}
