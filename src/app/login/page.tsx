"use client";
import { useWixClient } from "@/hooks/useWixClient";
import { LoginState } from "@wix/sdk";
import React, { useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
enum Mode {
  LOGIN = "LOGIN",
  REGISTER = "REGISTER",
  RESET_PASSWORD = "REST_PASSWORD",
  EMAIL_VERIFICATION = "EMAIL_VERIFICATION",
}
function LoginPage() {
  const router = useRouter();
  const wixClient = useWixClient();
  const isLoggedIn = wixClient.auth.loggedIn();
    if (isLoggedIn) {
      router.push("/");
    }
  const [mode, setmode] = useState(Mode.LOGIN);
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  const [emailCode, setemailCode] = useState("");
  const [isLoading, setIsloading] = useState(false);
  const [Error, setisError] = useState("");
  const [message, setmessage] = useState("");
  const FormTitle =
    mode === Mode.LOGIN
      ? "Login"
      : mode === Mode.REGISTER
      ? "Register"
      : mode === Mode.RESET_PASSWORD
      ? "Rest Password"
      : "Verify";
  const ButtonTitle =
    mode === Mode.LOGIN
      ? "Log in"
      : mode === Mode.REGISTER
      ? "Register"
      : mode === Mode.RESET_PASSWORD
      ? "Rest Your Password"
      : "Verify Your Email";
  const handelSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsloading(true);
    setisError("");
    try {
      let response;
      switch (mode) {
        case Mode.LOGIN:
          response = await wixClient.auth.login({
            email: email,
            password: password,
          });
          break;
        case Mode.REGISTER:
          response = await wixClient.auth.register({
            email: email,
            password: password,
            profile: { nickname: username },
          });
          break;
        case Mode.RESET_PASSWORD:
          response = await wixClient.auth.sendPasswordResetEmail(
            email,
            window.location.href
          );
          setmessage("Password reset email sent. Please check your e-mail.");
          break;
        case Mode.EMAIL_VERIFICATION:
          response = await wixClient.auth.processVerification({
            verificationCode: emailCode,
          });
          break;
        default:
          break;
      }
      console.log(response?.loginState);
      switch (response?.loginState) {
        case LoginState.SUCCESS:
          setmessage("successfull ! you are being redirected");
          const tokens = await wixClient.auth.getMemberTokensForDirectLogin(
            response.data.sessionToken!
          );
          // console.log(tokens); // we have two tokenr the access and the refresh token
          Cookies.set("refreshToken", JSON.stringify(tokens.refreshToken), {
            expires: 2,
          });
          wixClient.auth.setTokens(tokens);
          router.push("/");
          break;
        case LoginState.FAILURE:
          if (
            response.errorCode === "invalidEmail" ||
            response.errorCode === "invalidPassword"
          ) {
            setisError("invalid Email or password");
          } else if (response.errorCode === "emailAlreadyExists") {
            setisError("Email already exists");
          } else if (response.errorCode === "resetPassword") {
            setisError("You need to reset your password");
          } else {
            setisError("Something went wrong !!");
          }

          break;
        case LoginState.EMAIL_VERIFICATION_REQUIRED: 
        setmode(Mode.EMAIL_VERIFICATION)
        break
        case LoginState.OWNER_APPROVAL_REQUIRED: 
        setmessage("Your  account is pending approval")
        default:
          break;
      }
    } catch (err) {
      console.log(err);
      setisError("something went wrong  ! ");
    } finally {
      setIsloading(false);
    }
  };
  return (
    <div className="h-[calc(100vh-80px)] px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex items-center justify-center">
      <form className="flex flex-col gap-8" onSubmit={handelSubmit}>
        <h1 className="text-2xl font-semibold ">{FormTitle}</h1>
        {mode === Mode.REGISTER ? (
          <div className="flex flex-col  gap-2">
            <label className="text-sm text-gray-700 " htmlFor="username">
              Username
            </label>
            <input
              type="text"
              placeholder="youcef"
              id="username"
              name="username"
              className="ring-2 ring-gray-300 rounded-md p-2"
              onChange={(e) => {
                setusername(e.target.value);
              }}
            />
          </div>
        ) : null}
        {mode !== Mode.EMAIL_VERIFICATION ? (
          <div className="flex flex-col  gap-2">
            <label className="text-sm text-gray-700 " htmlFor="mail">
              Email
            </label>
            <input
              type="email"
              id="mail"
              name="email"
              onChange={(e) => {
                setemail(e.target.value);
              }}
              placeholder="youcef@gmail.com"
              className="ring-2 ring-gray-300 rounded-md p-2"
            />
          </div>
        ) : (
          <div className="flex flex-col  gap-2">
            <label className="text-sm text-gray-700 " htmlFor="code">
              Verification Code
            </label>
            <input
              type="text"
              name="emailCode"
              id="code"
              placeholder="Code"
              className="ring-2 ring-gray-300 rounded-md p-2"
              onChange={(e) => {
                setemailCode(e.target.value);
              }}
            />
          </div>
        )}
        {mode === Mode.LOGIN || mode === Mode.REGISTER ? (
          <div className="flex flex-col  gap-2">
            <label className="text-sm text-gray-700 " htmlFor="pass">
              Password
            </label>
            <input
              type="password"
              id="pass"
              onChange={(e) => {
                setpassword(e.target.value);
              }}
              name="password"
              placeholder="password"
              className="ring-2 ring-gray-300 rounded-md p-2"
              //  onChange={()=>{setusername()}}
            />
          </div>
        ) : null}
        {mode === Mode.LOGIN && (
          <div
            className="text-sm underline  cursor-pointer"
            onClick={() => {
              setmode(Mode.RESET_PASSWORD);
            }}
          >
            Forget Password ?
          </div>
        )}
        <button
          className="bg-lama text-white p-2 rounded-md disabled:bg-pink-200 disabled:cursor-not-allowed "
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : ButtonTitle}
        </button>
        {Error && <div className="text-red-600">{Error}</div>}
        {mode === Mode.LOGIN && (
          <div
            className="text-sm underline mb-4  cursor-pointer"
            onClick={() => setmode(Mode.REGISTER)}
          >
            Don't have an account ?
          </div>
        )}
        {mode === Mode.REGISTER && (
          <div
            className="text-sm underline mb-4  cursor-pointer"
            onClick={() => setmode(Mode.LOGIN)}
          >
            have an account ?
          </div>
        )}
        {mode === Mode.RESET_PASSWORD && (
          <div
            className="text-sm underline  cursor-pointer"
            onClick={() => setmode(Mode.LOGIN)}
          >
            Go back to Login
          </div>
        )}
        {message && <div className="text-green-600 txt-sm">{message}</div>}
      </form>
    </div>
  );
}

export default LoginPage;
