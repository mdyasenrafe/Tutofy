import React from "react";
import Typewriter from "typewriter-effect";
import Grid from "@mui/material/Grid";
import banner from "../../assets/images/banner.gif";
import Button from "@mui/material/Button";

export default function Banner() {
  return (
    <div className="my-[50px]">
      <Grid container spacing={3} alignItems={"center"}>
        <Grid item xs={12} md={6}>
          <div>
            <h1 className="text-[30px] md:text-[48px]">
              A Good
              <span className="text-[#F97316] text-bold"> #Education </span>
              <br />
              is a Foundation for a{" "}
            </h1>
            <Typewriter
              options={{
                strings: [
                  "A Better Future",
                  "Equitable Society",
                  "Better World",
                ],
                autoStart: true,
                loop: true,
              }}
            />
            <p className="mt-[16px]">
              Discover the Perfect Match for Your Educational Journey. Join Our
              Community of Teachers and Students Today
            </p>
            <div className="flex items-center mt-[24px]">
              <button className="mr-[16px] flex items-center w-[168px] h-[48px] rounded-[8px] bg-primary text-white justify-center duration-300 hover:bg-indigo-800">
                Start as Student
              </button>
              <button className="mr-[16px] flex items-center w-[168px] h-[48px] rounded-[8px] justify-center border-primary hover:bg-[#3c7fff] hover:text-white duration-300">
                Join as Teacher
              </button>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={6} className="hidden lg:grid">
          <img src={banner} alt={banner} />
        </Grid>
      </Grid>
    </div>
  );
}
