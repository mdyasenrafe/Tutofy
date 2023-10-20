import { Container } from "@mui/material";
import React, { useRef, useState, ChangeEvent } from "react";
import Layout from "../../../components/layout/Layout";
import ProgressBar from "@ramonak/react-progress-bar";
import { MdEdit } from "react-icons/md";
import { DemoImage } from "../../../utils/Theme";
import { Country, State, City } from "country-state-city";

let AvialablityData = ["My Home", "Your Home", "Online"];

export default function CreateProfile() {
  const [profileImage, setProfileImage] = useState<string | undefined>("");
  const inputFileRef = useRef<HTMLInputElement | null>(null);
  const [selectedAvialablity, setSelectedAvialablity] = useState<string>("");

  const openFileInput = () => {
    if (inputFileRef.current) {
      inputFileRef.current.click();
    }
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (typeof event?.target?.result === "string") {
          setProfileImage(event.target.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Layout>
      <Container>
        <h1>Create Profile</h1>
        <div className="md:pt-16 md:pb-20">
          <ProgressBar bgColor="#3c7fff" completed={20} />
          <h1 className="text-[30px] md:text-[36px] text-center my-[16px]">
            Welcome, Let's create your profile
          </h1>
          <div className="border border-lightgray rounded-[8px] p-6 w-full flex flex-col shadow-white shadow mt-[24px] mb-[60px]">
            <div className="mb-6">
              <label className="block mb-3 text-[16px] font-[600] text-gray-700">
                Photo
              </label>
              <div className="text-center flex justify-center relative">
                <img
                  className="w-[120px] h-[120px] rounded-[100%] border border-[#E1E1E1]"
                  src={profileImage || DemoImage}
                  alt=""
                />
                <div className="bg-blue-500 w-[30px] h-[30px] d-flex justify-center items-center rounded-[50%] absolute bottom-[0px] right-[30.5%] md:bottom-[0px] md:right-[36%] lg:right-[42%] xl:-bottom-[0px] xl:right-[45%]">
                  <MdEdit
                    size={20}
                    color="#FFFFFF"
                    className="text-center mx-auto d-flex justify-center items-center h-[30px] cursor-pointer."
                    onClick={openFileInput}
                  />
                  <input
                    type="file"
                    className="hidden"
                    ref={inputFileRef}
                    accept="image/png, image/jpeg"
                    onChange={handleImageChange}
                  />
                </div>
              </div>
            </div>
            <div className="flex mb-6 justify-between">
              <div className="w-[48%]">
                <label className="label">First Name</label>
                <input
                  className="input "
                  type="text"
                  placeholder="Type your first name"
                />
              </div>
              <div className="w-[48%]">
                <label className="label">Last Name</label>
                <input
                  className="input"
                  type="text"
                  placeholder="Type your last name"
                />
              </div>
            </div>
            <div className="flex mb-6 justify-between">
              <div className="w-[48%]">
                <label className="label">Title</label>
                <input
                  className="input "
                  type="text"
                  placeholder="Type your title"
                />
              </div>
              <div className="w-[48%]">
                <label className="label">Fee </label>
                <input
                  className="input"
                  type="number"
                  placeholder="Type your fee"
                />
              </div>
            </div>

            <div>
              <label className="label">I can teach on</label>
              <div className="flex mb-6">
                {AvialablityData.map((avialablity, index) => (
                  <div
                    key={index}
                    className="flex items-center mr-[24px] cursor-pointer border-lightgray rounded-[8px] p-2 w-full"
                    onClick={() => setSelectedAvialablity(avialablity)}
                  >
                    <div
                      className={`${
                        selectedAvialablity === avialablity
                          ? "bg-primary"
                          : "bg-gray-200"
                      } h-[20px] w-[20px] rounded-full flex justify-center items-center`}
                    />
                    <p className="text-[18px] ml-[8px]">{avialablity}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
}
