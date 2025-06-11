"use client";
import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faPhone,faArrowRight   } from '@fortawesome/free-solid-svg-icons';
interface LoginProps {
  onLoginSuccess?: (token: string) => void;
  setShowRegister?: (show: boolean) => void;
}

export default function Login({ onLoginSuccess, setShowRegister }: LoginProps) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [phone, setPhone] = useState<string>(""); 
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };
  const handleMouseUpPassword = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Phone:", phone); 

    try {
      const payload: { email?: string; password: string; phone?: string } = {
        password: password,
      };
      if (email) payload.email = email;
      if (phone) payload.phone = phone;

      const res = await fetch("https://0a91-2a09-bac1-7a80-10-00-3c4-3f.ngrok-free.app/api/authentication/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload), 
      });

      if (res.status === 204) {
        console.log("Đăng nhập thành công nhưng không có nội dung trả về");
        if (onLoginSuccess) onLoginSuccess("");
        alert("Đăng nhập thành công!");
        setEmail("");
        setPassword("");
        setPhone("");
        return;
      } 

      if (!res.ok) {
        const data = await res.json();
        console.error("Lỗi đăng nhập:", res.status, res.statusText, data);
        throw new Error(data.message || "Đăng nhập thất bại. Vui lòng kiểm tra lại thông tin.");
      }

      const data = await res.json();
      console.log("Login successful:", data);
      alert("Đăng nhập thành công!");

      if (onLoginSuccess) onLoginSuccess(data.accessToken);

      setEmail("");
      setPassword("");
      setPhone("");

    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error("Lỗi trong quá trình đăng nhập:", err.message);
        setError(err.message);
      } else {
        console.error("Lỗi không xác định:", err);
        setError("Có lỗi xảy ra trong quá trình đăng nhập.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center  px-4">
      <form  data-aos="fade-down-left"
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md space-y-6"
      >
        <h2 className="text-2xl font-semibold text-center text-sky-700">Đăng nhập</h2>

        <Box sx={{ '& > :not(style)': { mb: 2, width: '100%' } }}>
          <TextField
            id="email-input"
            label="Email"
            variant="outlined"
            type="email"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            required
            disabled={loading}
            fullWidth
           InputProps={{
    startAdornment: (
      <InputAdornment position="start">
        <FontAwesomeIcon icon={faEnvelope} style={{ color: "#3170dd" }} className="mr-2" />
      </InputAdornment>
    ),
  }}
          />
          <TextField
            id="password-input"
            label="Mật khẩu"
            variant="outlined"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
            required
            disabled={loading}
            fullWidth
           InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FontAwesomeIcon icon={faLock} bounce  style={{ color: "#3170dd" }} className="mr-2" />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label={
                      showPassword ? "ẩn mật khẩu" : "hiển thị mật khẩu"
                    }
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    onMouseUp={handleMouseUpPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            id="phone-input"
            label="Số điện thoại"
            variant="outlined"
            type="tel"
            value={phone}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)}
            disabled={loading}
            fullWidth
            InputProps={{
    startAdornment: (
      <InputAdornment position="start">
        <FontAwesomeIcon icon={faPhone} style={{ color: "#3170dd" }} className="mr-2" />
      </InputAdornment>
    ),
  }}
          />
        </Box>

        <Stack spacing={2} direction="row" className="justify-center">
          <Button
            variant="contained"
            size="large"
            type="submit"
            disabled={loading}
            className={`w-full sm:w-3/4 md:w-2/3 lg:w-1/2 ${
              loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
    <FontAwesomeIcon icon={faArrowRight} beat size="xs" style={{ color: "#FFFF" }} className="mr-2" />
   {loading ? "Đang đăng nhập..." : "Đăng nhập"}
          </Button>
        </Stack>

        <p className="text-center text-sm text-gray-600 mt-2">
          Chưa có tài khoản?{" "}
          <button
            onClick={() => setShowRegister && setShowRegister(true)}
            className="text-blue-600 hover:underline focus:outline-none"
          >
            Đăng ký ngay
          </button>
        </p>

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
      </form>
    </div>
  );
}