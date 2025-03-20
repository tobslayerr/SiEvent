import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [captchaChecked, setCaptchaChecked] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Harap isi email dan password!", { position: "top-right", autoClose: 4000 });
      return;
    }

    if (!captchaChecked) {
      toast.error("Harap verifikasi CAPTCHA!", { position: "top-right", autoClose: 4000 });
      return;
    }

    toast.success("Login berhasil", {
      position: "top-right",
      autoClose: 2000,
      onClose: () => navigate("/"),
    });
  };

  const handleGoogleLogin = () => {
    toast.success("Login via Google berhasil", {
      position: "top-right",
      autoClose: 2000,
      onClose: () => navigate("/"),
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <ToastContainer />
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold text-center mb-4">Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border rounded mb-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="relative w-full">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full p-2 border rounded pr-10 mb-3"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="absolute inset-y-0 right-3 flex items-center"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <AiFillEyeInvisible className="text-gray-600" />
              ) : (
                <AiFillEye className="text-gray-600" />
              )}
            </button>
          </div>

          <div className="flex items-center gap-2 mb-3">
            <input
              type="checkbox"
              id="fake-recaptcha"
              className="w-4 h-4"
              checked={captchaChecked}
              onChange={() => setCaptchaChecked(!captchaChecked)}
            />
            <label htmlFor="fake-recaptcha" className="text-sm text-gray-600">
              Saya bukan robot
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-full font-medium transition hover:bg-gray-200 hover:text-black border border-black active:scale-90 duration-300"
          >
            Login
          </button>
        </form>

        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-2 bg-white border border-gray-400 py-2 rounded-full mt-3 hover:bg-gray-100 transition"
        >
          <FcGoogle className="text-xl" />
          <span>Login dengan Google</span>
        </button>

        <p className="text-center mt-3">
          <a href="/forgot-password" className="text-sm text-gray-600 hover:text-black">
            Lupa Password?
          </a>
        </p>

        <p className="text-center mt-3 text-sm text-gray-600">
          Belum punya akun?{" "}
          <a href="/register" className="text-black font-medium hover:underline">
            Register
          </a>
        </p>

        <button
          onClick={() => navigate("/")}
          className="w-full mt-4 bg-gray-300 text-black py-2 rounded-full font-medium transition hover:bg-black hover:text-white border border-black active:scale-90 duration-300"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Login;
