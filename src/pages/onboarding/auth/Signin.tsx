import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import login from "../../../assets/images/onboarding/login.png";
import { Container } from "@mui/material";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Layout from "../../../components/layout/Layout";
import Spinner from "../../../components/common/Spinner";

type FormValues = {
  email: string;
  password: string;
};

type Error = {
  text: string;
  error: boolean;
};

export default function Signin() {
  const [error, setError] = useState<Error>({ text: "", error: false });
  const [loading, setLoading] = useState<boolean>(false);
  const [eye, setEye] = useState<boolean>(false);
  const [verify, setVerify] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");

  const location = useLocation();
  const redirectUrl = location.state?.from?.pathname || "/home";
  const navigate = useNavigate();

  const onSubmit = async () => {};
  return (
    <Layout>
      <Container>
        <div className="md:pt-32 md:pb-20">
          {verify ? (
            // <Verify email={email} />
            <></>
          ) : (
            <div className="md:grid sm:grid-cols-2 md:grid-cols-2 gap-7 spac-y-4">
              <div>
                <img className="h-[80%] hidden md:inline" src={login} alt="" />
              </div>
              <div>
                <div className="py-7">
                  <h2 className="text-[36px] font-semibold">Welcome Back</h2>
                  <p className="text-[18px] font-[500]">
                    We are Happy to see you again. let's get started
                  </p>
                </div>
                <form onSubmit={onSubmit}>
                  <div>
                    <label className="label">Email</label>
                    <input className="input" type="text" />
                  </div>
                  <div>
                    <label className="label">Passoword</label>
                    <div className="input flex">
                      <input
                        type={eye ? "text" : "password"}
                        className="w-full"
                        required
                      />
                      {eye ? (
                        <AiOutlineEye
                          className="text-primary text-[24px] cursor-pointer"
                          onClick={() => setEye(false)}
                        />
                      ) : (
                        <AiOutlineEyeInvisible
                          className="text-primary text-[24px] cursor-pointer"
                          onClick={() => setEye(true)}
                        />
                      )}
                    </div>
                  </div>
                  <div
                    className={`${
                      error?.error ? "mb-[12px]" : "mb-[24px]"
                    } flex justify-end`}
                  >
                    <p className="text-[#9610FF] underline underline-offset-1 cursor-pointer">
                      Forget Password
                    </p>
                  </div>
                  <div className="mb-[12px]">
                    <p className="text-red-500 text-[18px]">
                      {error.error && error.text}
                    </p>
                  </div>
                  <div className="flex justify-center items-center">
                    <button
                      className="h-[48px] items-center w-full bg-[#9610FF] hover:bg-indigo-800 px- rounded text-white flex justify-center"
                      type="submit"
                    >
                      {loading ? <Spinner /> : "Log in"}
                    </button>
                  </div>

                  <h6 className="my-[24px] text-center">
                    Don't have any account?{" "}
                    <Link to="/signup">
                      <span className="text-[#9610FF] underline underline-offset-1">
                        Sign up
                      </span>
                    </Link>
                  </h6>
                </form>
              </div>
            </div>
          )}
        </div>
      </Container>
    </Layout>
  );
}
