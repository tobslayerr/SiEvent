import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [captchaChecked, setCaptchaChecked] = useState(false);

  const validatePassword = (pwd) => {
    if (pwd === "") {
      setPasswordStrength("");
      return;
    }

    const hasUpperCase = /[A-Z]/.test(pwd);
    const hasNumber = /\d/.test(pwd);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(pwd);

    if (pwd.length < 8) {
      setPasswordStrength("Terlalu Pendek");
    } else if (!hasUpperCase || !hasNumber || !hasSpecialChar) {
      setPasswordStrength("Lemah");
    } else {
      setPasswordStrength("Kuat");
    }
  };

  const validateUsername = (name) => {
    return /^[a-zA-Z0-9_]{5,}$/.test(name);
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (!fullName || !username || !email || !password || !confirmPassword) {
      toast.error("Harap isi semua data!");
      return;
    }

    if (!validateUsername(username)) {
      toast.error("Username harus minimal 5 karakter & tidak boleh ada spasi!");
      return;
    }

    if (!validateEmail(email)) {
      toast.error("Format email tidak valid!");
      return;
    }

    if (passwordStrength !== "Kuat") {
      toast.error("Gunakan password yang lebih kuat!");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Konfirmasi password tidak sesuai!");
      return;
    }

    if (!captchaChecked) {
      toast.error("Harap verifikasi CAPTCHA!");
      return;
    }

    toast.success("Registrasi berhasil", {
      autoClose: 2000,
      onClose: () => navigate("/login"),
    });
  };

  const handleGoogleRegister = () => {
    toast.success("Register dengan Google berhasil", {
      autoClose: 2000,
      onClose: () => navigate("/login"),
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <ToastContainer />
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold text-center mb-4">Register</h2>
        <form onSubmit={handleRegister}>
          <input type="text" placeholder="Nama Lengkap" className="w-full p-2 border rounded mb-3" value={fullName} onChange={(e) => setFullName(e.target.value)} />
          <input type="text" placeholder="Username" className="w-full p-2 border rounded mb-3" value={username} onChange={(e) => setUsername(e.target.value)} />
          <input type="email" placeholder="Email" className="w-full p-2 border rounded mb-3" value={email} onChange={(e) => setEmail(e.target.value)} />
          
          <div className="relative w-full">
            <input type={showPassword ? "text" : "password"} placeholder="Password" className="w-full p-2 border rounded pr-10" value={password} onChange={(e) => { setPassword(e.target.value); validatePassword(e.target.value); }} />
            <button type="button" className="absolute inset-y-0 right-3 flex items-center" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <AiFillEyeInvisible className="text-gray-600" /> : <AiFillEye className="text-gray-600" />}
            </button>
          </div>
          <p className={`text-sm font-medium mt-1 ${passwordStrength === "Kuat" ? "text-green-500" : passwordStrength === "Lemah" ? "text-yellow-500" : "text-red-500"}`}>
            {passwordStrength ? `Password: ${passwordStrength}` : ""}
          </p>

          <div className="relative w-full mt-3">
            <input type={showConfirmPassword ? "text" : "password"} placeholder="Konfirmasi Password" className="w-full p-2 border rounded pr-10" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            <button type="button" className="absolute inset-y-0 right-3 flex items-center" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
              {showConfirmPassword ? <AiFillEyeInvisible className="text-gray-600" /> : <AiFillEye className="text-gray-600" />}
            </button>
          </div>

          <div className="flex items-center gap-2 mt-3">
            <input type="checkbox" id="fake-recaptcha" className="w-4 h-4" checked={captchaChecked} onChange={() => setCaptchaChecked(!captchaChecked)} />
            <label htmlFor="fake-recaptcha" className="text-sm text-gray-600">Saya bukan robot</label>
          </div>

          <button type="submit" className="w-full bg-black text-white py-2 rounded-full font-medium transition hover:bg-gray-200 hover:text-black border border-black active:scale-90 duration-300 mt-4">Register</button>
        </form>

        <button onClick={handleGoogleRegister} className="w-full flex items-center justify-center gap-2 bg-white border border-gray-400 py-2 rounded-full mt-3 hover:bg-gray-100 transition">
          <FcGoogle className="text-xl" />
          <span>Register dengan Google</span>
        </button>
        
        <p className="text-center mt-4 text-sm">Sudah punya akun? <a href="/login" className="text-black font-medium hover:underline">Login</a></p>
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

export default Register;
