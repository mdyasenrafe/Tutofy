import React, { useState } from "react";
import signupImage from "../../assets/images/onboarding/signup.png";
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

type Error = {
  text: string;
  error: boolean;
};

const roles = ["Instructor", "Student"];

export default function Signup() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isVerificationStep, setIsVerificationStep] = useState<boolean>(false);
  const [inputEmail, setInputEmail] = useState<string>("");
  const [inputError, setInputError] = useState<Error>({
    text: "",
    error: false,
  });
  const [selectedRole, setSelectedRole] = useState<string>("");

  const location = useLocation();
  const redirectUrl = location.state?.from?.pathname || "/profile";

  const handleSubmit = async () => {
    // Handle form submission
    setIsVerificationStep(true);
  };

  return (
    <Layout>
      <Container>
        <section className="md:pt-32 pb-20">
          {isVerificationStep ? (
            <Verify email={inputEmail} />
          ) : (
            <div className="md:grid sm:grid-cols-2 md:grid-cols-2 gap-7 spac-y-4">
              <div>
                <img
                  className="h-[80%] hidden md:inline"
                  src={signupImage}
                  alt=""
                />
              </div>
              <div>
                <div className="py-7">
                  <h2 className="text-[36px]">Let's Create Your Account</h2>
                </div>
                <form onSubmit={handleSubmit}>
                  <div>
                    <label className="label">Name</label>
                    <input className="input" type="name" required />
                  </div>
                  <div>
                    <label className="label">Email</label>
                    <input className="input" type="email" required />
                  </div>
                  <div>
                    <label className="label">Password</label>
                    <div className="input flex">
                      <input
                        type={showPassword ? "text" : "password"}
                        className="w-full"
                        required
                      />
                      {showPassword ? (
                        <AiOutlineEye
                          className="text-primary text-[24px] cursor-pointer"
                          onClick={() => setShowPassword(false)}
                        />
                      ) : (
                        <AiOutlineEyeInvisible
                          className="text-primary text-[24px] cursor-pointer"
                          onClick={() => setShowPassword(true)}
                        />
                      )}
                    </div>
                  </div>
                  <div>
                    <div className="flex my-[24px]">
                      {roles.map((role, index) => (
                        <div
                          key={index}
                          className="flex justify-between items-center mr-[24px]"
                          onClick={() => setSelectedRole(role)}
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
                      {inputError.error && inputError.text}
                    </p>
                  </div>
                  <div className="flex justify-center items-center">
                    <button
                      className="h-[40px] md:h-[48px] w-full bg-primary hover:bg-indigo-800 rounded text-white flex justify-center items-center"
                      type="submit"
                      disabled={isLoading}
                    >
                      {isLoading ? <Spinner /> : "Sign Up"}
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
