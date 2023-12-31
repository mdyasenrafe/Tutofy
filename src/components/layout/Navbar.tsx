import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "../../assets/images/logo.png";
import { HiOutlineX } from "react-icons/hi";
import { DemoImage } from "../../utils/Theme";
import { Container } from "@mui/material";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [headerFixed, setHeaderFixed] = useState(false);
  const [show, setShow] = useState(false);
  const navigation: any = useNavigate();

  // handel scroll change header
  const headerChange = () => {
    if (window.scrollY > 10) {
      setHeaderFixed(true);
    } else {
      setHeaderFixed(false);
    }
  };
  window.addEventListener("scroll", headerChange);

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/home";
  };

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [showMenu]);

  const links = [
    {
      id: 1,
      name: "Home",
      url: "/",
    },
    {
      id: 4,
      name: "Blogs",
      url: "/blogs",
    },
    {
      id: 2,
      name: "Login",
      url: "/login",
    },
    {
      id: 3,
      name: "Signup",
      url: "/signup",
    },
  ];

  return (
    <div
      className={`${
        headerFixed ? "fixed bg-white py-2 z-30  shadow-lg" : "z-30 bg-color"
      } min-w-full  transition-all delay-75 ease-in-out py-2`}
    >
      <Container>
        <div>
          <div className="flex justify-between items-center w-full">
            <div className="flex items-center">
              {!showMenu && (
                <button
                  aria-label="open menu"
                  onClick={() => setShowMenu(true)}
                  className={`${
                    !headerFixed && "text-black"
                  } outline-none rounded ease-in-out duration-300 focus:ring-gray-600 lg:hidden`}
                >
                  <AiOutlineMenu className="text-[30px]" />
                </button>
              )}

              <div className="lg:ml-0 ml-3">
                <Link to="/" className="flex items-center">
                  <img
                    className="h-[40px] py-1 cursor-pointer"
                    src={logo}
                    alt=""
                  />
                  <h1 className="hidden lg:inline mx-2">Tutofy</h1>
                </Link>
              </div>
            </div>

            {/* links */}
            <div className="hidden lg:flex space-x-4 items-center">
              {links.map((link: any) => (
                <Link
                  to={link.url}
                  key={link?.id}
                  onClick={() => setShowMenu(false)}
                  className="cursor-pointer"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div
            className={`${
              show ? "absolute" : "hidden"
            } top-16 right-0 shadow-md py-4 z-30 rounded-lg w-60  border bg-white  xl:right-28`}
          >
            <div>
              <div className="px-4">
                <HiOutlineX
                  onClick={() => setShow(false)}
                  className="border text-2xl  shadow-sm text-gray-400 rounded-md cursor-pointer"
                />
                <img
                  className="h-16 w-16 rounded-full border-2 border-blue-500 mx-auto"
                  src={DemoImage}
                  alt=""
                />
                <h1 className="text-lg font-semibold text-center py-3">Rafe</h1>
              </div>
              <hr />
            </div>
          </div>

          <div
            className={`${
              showMenu ? "flex ease-in-out duration-300 " : "hidden"
            } absolute w-[100%] top-0 left-0 z-30 pt-[24px] bg-white h-screen `}
          >
            <Container>
              {/* close icon */}
              <AiOutlineClose
                onClick={() => setShowMenu(false)}
                className="text-[30px] absolute right-0 top-0 mt-4 mr-4 cursor-pointer"
              />

              <div data-aos="fade-down" className="grid mt-[50px]">
                <div className=" grid gap-5 text-lg">
                  {links.map((navLink, index) => (
                    <div key={index}>
                      <Link
                        onClick={() => setShowMenu(false)}
                        to={`${navLink.url}`}
                      >
                        {navLink.name}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </Container>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
