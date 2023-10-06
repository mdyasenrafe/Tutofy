import React, { useState } from "react";
import EnterOtp from "../../assets/images/onboarding/enter_otp.svg";
import Spinner from "../../components/common/Spinner";
import { Toast } from "../../components/common/Toast";

type FormValues = {
  otp: number;
};
type VerifyProps = {
  email: string;
};

export default function Verify(props: VerifyProps) {
  const { email } = props;
  const [loading, setLoading] = useState<boolean>(false);
  const handleVerify = async () => {};

  return (
    <div className=" md:grid sm:grid-cols-2 md:grid-cols-2 gap-7 spac-y-4">
      <div>
        <img className="h-[100%] hidden md:inline" src={EnterOtp} alt="" />
      </div>
      <div>
        <div className="py-7">
          <h2 className="text-[36px]">Let's Verify Your Email Address</h2>
          <p className="text-[18px] font-[500] ">
            We have sent you an email with a verification code to verify your
            email address pls check your email and spam folder as well
          </p>
        </div>
        <form onSubmit={handleVerify}>
          <div>
            <label className="label">Email</label>
            <input className="input" type="text" />
          </div>
          <div className="flex justify-center items-center">
            <button
              className="mt-6 h-[48px] w-full bg-primary hover:bg-indigo-800 px- rounded text-white flex justify-center"
              type="submit"
              disabled={loading}
            >
              {loading ? <Spinner /> : "Verify"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
