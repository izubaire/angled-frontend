import React, { useState } from "react";
import { Navbar, Footer, WebButton } from "../../components";
import { jobs, contactUs } from "../../asset";
import { validateEmail } from "../../utils/helper";
import axios from "axios";
import { Link } from "react-router-dom";

const ContactUs = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [title, setTitle] = useState();
  const [comment, setComment] = useState();
  const [email, setEmail] = useState();
  const [hasGotError, setHasGotError] = useState(null);

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleContactForm = () => {
    axios.defaults.xsrfCookieName = "csrftoken";
    axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";

    if (validateEmail(email)) {
      axios
        .post("/api/contact_us/", {
          first_name: firstName,
          last_name: lastName,
          email: email,
          title: title,
          comment: comment,
        })
        .then((resp) => {
          setFirstName("");
          setLastName("");
          setTitle("");
          setEmail("");
          setComment("");

          setHasGotError(false);
        })
        .catch((error) => {
          setHasGotError(true);
        });
    }
  };

  return (
    <>
      <Navbar />
      <section className="container">
        <div
          className="position-relative d-flex justify-content-start align-items-center rounded mt-5 mb-3"
          style={{
            backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url(${jobs})`,
            minHeight: "60vh",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="text-center ms-lg-5 ms-sm-3 ms-2">
            <h1 className="font50px text-white mb-4">Contact Us</h1>
            <Link to="/job/">
              <span className="me-4">
                <WebButton name="Apply Now" class="bg-orangeJuice clr-white" />
              </span>
            </Link>
            <Link to="/signup">
              <WebButton
                name="Register"
                class="clr-white bg-transparent border-wt"
              />
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-12 mb-3">
            <img style={{ width: "100%" }} src={contactUs} alt="contactUs" />
          </div>
          <div className="col-md-6 col-12 mb-5">
            <div className="mt-2 mb-2">
              {hasGotError === true ? (
                <div className="bg-danger p-1">
                  <span>Encountered Error..</span>
                </div>
              ) : hasGotError === false ? (
                <div className="bg-success p-1">
                  <span>Message sent successfully</span>
                </div>
              ) : (
                <></>
              )}
            </div>
            <div>
              <input
                className="mb-4"
                type="text"
                name="fname"
                id="fname"
                value={firstName}
                placeholder="First Name"
                onChange={handleFirstNameChange}
              />

              <input
                className="mb-4"
                type="text"
                name="lname"
                id="lname"
                value={lastName}
                placeholder="Last Name"
                onChange={handleLastNameChange}
              />
              <input
                className="mb-4"
                type="email"
                name="email"
                id="email"
                value={email}
                placeholder="Email address"
                onChange={handleEmailChange}
              />
              <input
                className="mb-4"
                type="text"
                name="title"
                id="title"
                value={title}
                placeholder="Title"
                onChange={handleTitleChange}
              />
              <textarea
                className="mb-4"
                name="tInfoRequest"
                id="tInfoRequest"
                cols="30"
                rows="10"
                value={comment}
                placeholder="Comments"
                onChange={handleCommentChange}
              ></textarea>
              <WebButton
                class="w-100 py-2 bg-sky clr-white"
                name="Submit"
                handleClick={handleContactForm}
              />
            </div>
          </div>
        </div>
        {/* <div className="">
                    </div> */}
      </section>
      <Footer />
    </>
  );
};

export default ContactUs;
