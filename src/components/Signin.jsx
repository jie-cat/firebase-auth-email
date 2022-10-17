import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// auth
import { UserAuth } from "../contexts/AuthContext";

// 登入
const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signIn } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      console.log("Login success!");
      navigate("/account");
    } catch (e) {
      setError(e);
      console.log(error);
    }
  };

  return (
    <div className="max-w-[700px] mx-auto my-16 p-4">
      <div>
        <h1 className="text-2xl font-bold py-2 ">Sign in to your account</h1>
        <p className="py-2">
          Don't have an account yet?{" "}
          <Link to="/signup" className="underline">
            Sign up
          </Link>
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        {/* 信箱   */}
        <div className="flex flex-col py-2">
          <label className="py-2 font-medium">User Address</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="border p-3"
            type="text"
          />
        </div>
        {/* 密碼 */}
        <div className="flex flex-col py-2">
          <label className="py-2 font-medium">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="border p-3"
            type="text"
          />
        </div>
        {/* 送出 */}
        <button className="border border-blue-500 bg-blue-600 hover:bg-blue-500 color text-slate-100 w-full p-3">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Signin;
