import React, { useState } from "react";
import signup from "../../assets/images/onboarding/signup.svg";
import { Link, useLocation } from "react-router-dom";
import Spinner from "../../components/common/Spinner";
import { Toast } from "../../components/common/Toast";
import {
  AiOutlineCaretDown,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import Layout from "../../components/layout/Layout";
import Verify from "./Verify";
import { Container } from "@mui/system";

type FormValues = {
  name: string;
  email: string;
  password: string;
};

interface SignupBodyData {
  email: string;
  password: string;
  name: string;
  source: string;
  role: string;
  status?: string;
}
type Error = {
  text: string;
  error: boolean;
};

const roles = ["Instrcutor", "Student"];

export default function Signup() {
  const [eye, setEye] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [verify, setVerify] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<Error>({ text: "", error: false });
  const [selectedRole, setSelectRole] = useState<string>("");

  const location = useLocation();
  const redirectUrl = location.state?.from?.pathname || "/profile";
  const onSubmit = async () => {};

  return (
    <Layout>
      <Container>
        <section className="md:pt-32 pb-20">
          {verify ? (
            <Verify email={email} />
          ) : (
            <div className=" md:grid sm:grid-cols-2 md:grid-cols-2 gap-7 spac-y-4">
              <div>
                <img className="h-[80%] hidden md:inline" src={signup} alt="" />
              </div>
              <div>
                <div className="py-7">
                  <h2 className="text-[36px]">Let's Create Your Account</h2>
                </div>
                <form onSubmit={onSubmit}>
                  <div>
                    <label className="label">Name</label>
                    <input className="input" type="name" />
                  </div>
                  <div>
                    <label className="label">Email</label>
                    <input className="input" type="email" />
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
                  <div>
                    <div className="flex">
                      {roles.map((role, index) => (
                        <div
                          key={index}
                          className="flex justify-between items-center mr-[24px]"
                          onClick={() => setSelectRole(role)}
                        >
                          <div
                            className={`${
                              selectedRole === role
                                ? "bg-primary"
                                : "bg-gray-200"
                            } h-[20px] w-[20px] rounded-full flex justify-center items-center`}
                          />
                          <p className="text-[18px] ml-[8px]">{role}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mb-[12px]">
                    <p className="text-red-500 text-[18px]">
                      {error.error && error.text}
                    </p>
                  </div>
                  <div className="flex justify-center items-center">
                    <button
                      className="h-[40px] md:h-[48px] w-full bg-primary hover:bg-indigo-800 rounded text-white flex justify-center items-center"
                      type="submit"
                      disabled={loading}
                    >
                      {loading ? <Spinner /> : "Sign Up"}
                    </button>
                  </div>

                  <h6 className="my-[24px] text-center">
                    Already have an account?{" "}
                    <Link to="/login">
                      <span className="text-primary underline underline-offset-1">
                        Sign in
                      </span>
                    </Link>
                  </h6>
                </form>
              </div>
            </div>
          )}
        </section>
      </Container>
    </Layout>
  );
}
