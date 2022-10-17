import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// auth
import { UserAuth } from "../contexts/AuthContext";

// 註冊
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // 調用context裡的東西
  // Destructing an Object寫法
  const { createUser } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault(); // input資料用state去管理並手動送出, 所以把表單預設送出資料功能拿掉
    setError("");
    try {
      await createUser(email, password);
      console.log("Signout success!!");
      navigate("/account"); //註冊成功 redirect到 account頁面
    } catch (e) {
      setError(e.message);
      console.log(error);
    }
  };

  return (
    <div className="max-w-[700px] mx-auto my-16 p-4">
      <div>
        <h1 className="text-2xl font-bold py-2 ">Sign up for free account</h1>
        <p className="py-2">
          Already have an account yet?
          <Link to="/" className="underline">
            Sign in
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
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
