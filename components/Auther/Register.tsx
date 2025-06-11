// components/Auther/Register.tsx
"use client";
import { useState } from "react";
import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket, faUser, faPhone, faLock } from "@fortawesome/free-solid-svg-icons";

const registerApiCall = async (
  email: string | null,
  password: string,
  phone: string | null
) => {
  const payload: {
    email?: string;
    password: string;
    phone?: string;
    roleId?: number;
  } = {
    password: password,
  };

  if (email) payload.email = email;
  if (phone) payload.phone = phone;
  payload.roleId = 1;

  const res = await fetch(
    "https://0a91-2a09-bac1-7a80-10-00-3c4-3f.ngrok-free.app/api/authentication/register",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }
  );

  if (res.ok) {
    if (res.status === 204) {
      return "Register successfully (No content returned from API)";
    }
    const successData = await res.json();
    return successData.message || "Register successfully";
  } else {
    let errorData;
    try {
      errorData = await res.json();
    } catch (e: unknown) {
      throw new Error(res.statusText || "Đăng ký thất bại. Vui lòng thử lại.");
    }
    throw new Error(
      errorData?.message || "Đăng ký thất bại. Vui lòng thử lại."
    );
  }
};

export default function Register({
  onRegisterSuccess,
  setShowLogin,
}: {
  onRegisterSuccess?: () => void;
  setShowLogin?: (show: boolean) => void;
}) {
  const [values, setValues] = useState({ email: "", password: "", phone: "" });
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValues({ ...values, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    console.log("Email đăng ký:", values.email);
    console.log("Phone đăng ký:", values.phone);
    console.log("Password đăng ký:", values.password);

    if (!values.email && !values.phone) {
      setError("Vui lòng nhập Email hoặc Số điện thoại.");
      setLoading(false);
      return;
    }

    try {
      const resultMessage = await registerApiCall(
        values.email === "" ? null : values.email,
        values.password,
        values.phone === "" ? null : values.phone
      );

      alert(resultMessage);

      if (onRegisterSuccess) {
        onRegisterSuccess();
      }
      setValues({ email: "", password: "", phone: "" });
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error("Registration error:", err.message);
        setError(err.message);
      } else {
        console.error("An unknown error occurred during registration:", err);
        setError("Có lỗi xảy ra.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center  px-4">
      <form
        data-aos="fade-down-right"
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md space-y-6"
      >
        <h2 className="text-2xl font-semibold text-center text-sky-600">
          Đăng ký
        </h2>

        <Box sx={{ "& > :not(style)": { mb: 2, width: "100%" } }}>
          <TextField
  id="email-input"
  label="Email"
  variant="outlined"
  name="email"
  type="email"
  value={values.email}
  onChange={handleChange}
  fullWidth
  InputProps={{
    startAdornment: ( 
      <InputAdornment position="start">
        <FontAwesomeIcon icon={faUser} style={{ color: "#3170dd" }} className="mr-2" />
      </InputAdornment>
    ),
  }}
/>

         <TextField
  id="phone-input"
  label="Số điện thoại"
  variant="outlined"
  name="phone"
  type="tel"
  value={values.phone}
  onChange={handleChange}
  fullWidth
  InputProps={{
    startAdornment: (
      <InputAdornment position="start">
        <FontAwesomeIcon icon={faPhone} style={{ color: "#3170dd" }} className="mr-2" />
      </InputAdornment>
    ),
  }}
/>
          <TextField
            id="password-input"
            label="Mật khẩu (ít nhất 6 ký tự)"
            variant="outlined"
            name="password"
            type={showPassword ? "text" : "password"}
            value={values.password}
            onChange={handleChange}
            required
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FontAwesomeIcon icon={faLock} bounce style={{ color: "#3170dd" }} className="mr-2" />
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

        </Box>

        <Stack spacing={2} direction="row" className="justify-center">
          <Button
            variant="contained"
            size="large"
            type="submit"
            disabled={loading}
            className={`w-full sm:w-3/4 md:w-2/3 lg:w-1/2 ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            <FontAwesomeIcon icon={faArrowRightToBracket} beat  className="mr-4" />

            {loading ? "Đang đăng ký..." : "Đăng ký"}
          </Button>
        </Stack>

        <p className="text-center text-sm text-gray-600 mt-2">
          Đã có tài khoản?{" "}
          <button
            onClick={() => setShowLogin && setShowLogin(true)}
            className="text-blue-600 hover:underline focus:outline-none"
          >
            Đăng nhập ngay
          </button>
        </p>

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
      </form>
    </div>
  );
}
