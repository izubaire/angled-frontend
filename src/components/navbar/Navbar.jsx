import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import WebButton from "../buttons/WebButton";
import { navicon } from "../../asset";
// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFontAwesome } from "@fortawesome/free-regular-svg-icons";

const Navbar = () => {
  const [checkIsOpen, setCheckIsOpen] = useState(false);
  // const [showResume, setShowResume] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const isOpen = () => {
    setCheckIsOpen((prev) => !prev);
  };

  // const checkHospital = async () => {
  //   let bool = await resumeCheck();
  //   setShowResume(bool);
  // }

  useEffect(() => {
    // checkHospital();
    axios.get(`/api/verifylogin/`).then((resp) => {
      setIsLoggedIn(resp.data);
    });
  }, []);
  return (
    <div className="linear-gradient-lr text-white w-100">
      <div className=" container-fluid">
        <div className=" row">
          <div className="col-lg-2 col-6 ">
            <img src={navicon} alt="Nav" />
          </div>
          <div className="d-lg-none d-block col-6 d-flex justify-content-end align-items-center">
            <i
              onClick={() => isOpen()}
              className=" fa fa-bars pointer"
              style={{ fontSize: "1.5rem" }}
            ></i>
          </div>
          <div
            className={
              checkIsOpen
                ? "col-lg-10 col-12  navContent"
                : "col-lg-10 col-12  navContentToggle navContent"
            }
          >
            <ul className=" mb-0 d-lg-flex">
              <li className="pointer me-4 my-2">
                <NavLink onClick={() => isOpen()} to="/">
                  Home
                </NavLink>
              </li>
              <li className="pointer me-4 my-2">
                <NavLink onClick={() => isOpen()} to="/about-us">
                  About Us
                </NavLink>
              </li>
              <li className="pointer me-4 my-2">
                <NavLink onClick={() => isOpen()} to="/job">
                  Jobs
                </NavLink>
              </li>
              <li className="pointer me-4 my-2">
                <NavLink onClick={() => isOpen()} to="/contact-us">
                  Contact us
                </NavLink>
              </li>
              {/* {
                showResume &&
                  (
                    <NavLink onClick={() => isOpen()} to="/resume">
                    <AdminButton
                      name="Resume"
                      size="small"
                      style={{
                        backgroundColor: "#fe4a01",
                        "&:hover": { backgroundColor: "#fe4a01" },
                      }}
                    />
                    </NavLink>
                  )
              } */}
              {/* <li className="pointer me-4 my-2">
                <NavLink onClick={() => isOpen()} to="/form">
                  Online Forms
                </NavLink>
              </li> */}
            </ul>
            <div className="flex-center flex-lg-nowrap flex-wrap">
              <a href={isLoggedIn ? "/logout/" : "/login/"}>
                <WebButton
                  name={isLoggedIn ? "Sign Out" : "Sign In"}
                  class="font14px clr-white bg-transparent border-wt"
                />
              </a>

              <span className="mx-3 my-2">
                <a href="/signup/">
                  <WebButton
                    name="Register Now"
                    class="font14px bg-wood clr-white"
                  />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
