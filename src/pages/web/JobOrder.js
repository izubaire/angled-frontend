import React, { useState } from "react";
import { Navbar, Footer, WebButton } from "../../components";
import { useLocation } from "react-router-dom";
import axios from "axios";

const JobOrder = () => {
  const { state } = useLocation();

  const [name, setName] = useState();
  const [cell, setCell] = useState();
  const [email, setEmail] = useState();
  const [ssn, setSSN] = useState();
  const [bill, setBill] = useState();
  const [licence, setLicence] = useState();
  const [cpa, setCPA] = useState();
  const [spa, setSPA] = useState();
  const [plv, setPLV] = useState(); //professional licence  verification
  const [message, setMEssage] = useState({ color: "", msg: "" });

  const handleNameChange = (e) => {
    setName(e.target.value);
    setMEssage({ color: "", msg: "" });
  };
  const handleCellChange = (e) => {
    setCell(e.target.value);
    setMEssage({ color: "", msg: "" });
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setMEssage({ color: "", msg: "" });
  };
  const handleSSNChange = (e) => {
    setSSN(e.target.value);
    setMEssage({ color: "", msg: "" });
  };
  const handleBillChange = (e) => {
    setBill(e.target.value);
    setMEssage({ color: "", msg: "" });
  };
  const handleLicenceChange = (e) => {
    setLicence(e.target.value);
    setMEssage({ color: "", msg: "" });
  };
  const handleCPAChange = (e) => {
    setCPA(e.target.value);
    setMEssage({ color: "", msg: "" });
  };
  const handleSPAChange = (e) => {
    setSPA(e.target.value);
    setMEssage({ color: "", msg: "" });
  };

  const handlePLVChange = (e) => {
    setPLV(e.target.value);
    setMEssage({ color: "", msg: "" });
  };

  const submitJobApplication = async () => {
    const job_post = state.id;

    if (validateEmail(email) && validateBill(bill)) {
      let jobForm = {
        job_post: job_post,
        candidate_name: name,
        phone: cell,
        email: email,
        social_security_number: ssn,
        driver_license: licence,
        professional_license_verification: plv,
        bill_rate: bill,
        compliance_per_agency: cpa,
        submitals_per_agency: spa,
      };

      axios.defaults.xsrfCookieName = "csrftoken";
      axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";

      axios
        .post("/api/resume/", jobForm)
        .then((resp) => {
          setName("");
          setCell("");
          setEmail("");
          setSSN("");
          setBill("");
          setLicence("");
          setCPA("");
          setSPA("");
          setPLV("");
          setMEssage({
            color: "bg-success",
            msg: "Applied to Job Successfully",
          });
        })
        .catch((error) => {
          setMEssage({ color: "bg-danger", msg: "Could not apply! Try again" });
        });
    }
  };

  function validateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    }
    setMEssage({
      color: "bg-danger",
      msg: "You entered an invalid email address!",
    });

    return false;
  }

  function validateBill(bill) {
    if (bill) {
      return true;
    }
    setMEssage({
      color: "bg-danger",
      msg: "You entered an invalid Bill amount!",
    });

    return false;
  }

  return (
    <>
      <Navbar />
      <section className="p-lg-5 p-md-3 p-2" style={{ background: "#ecf1fa" }}>
        <div
          className="rounded mb-5 position-relative d-flex justify-content-start align-items-center"
          style={{
            backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url('/static/jobs.svg')`,
            minHeight: "60vh",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="text-center ms-lg-5 ms-sm-3 ms-2">
            <h1 className="font50px text-white mb-4">JOBS Order</h1>
          </div>
        </div>
        <div className=" " style={{ paddingTop: "1rem" }}>
          <div className="container">
            <div className="row">
              <div className="mt-2 mb-2">
                {message.msg.length > 0 ? (
                  <div className={`${message.color} p-1`}>
                    <span>{message.msg}</span>
                  </div>
                ) : (
                  <></>
                )}
              </div>
              <div className="col-md-6 col-12">
                <label className="mt-3 mb-1" htmlFor="candidate">
                  Candidate Name
                </label>
                <input
                  type="text"
                  name="candidate"
                  id="candidate"
                  maxLength={50}
                  value={name}
                  onChange={handleNameChange}
                />
              </div>
              <div className="col-md-6 col-12">
                <label className="mt-3 mb-1" htmlFor="cellNo">
                  Cell Number
                </label>
                <input
                  type="text"
                  name="cellNo"
                  id="cellNo"
                  maxLength={20}
                  value={cell}
                  onChange={handleCellChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-12">
                <label className="mt-3 mb-1" htmlFor="email">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  id="email"
                  onChange={handleEmailChange}
                />
              </div>

              <div className="col-md-6 col-12">
                <label className="mt-3 mb-1" htmlFor="billRate">
                  Bill Rate
                </label>
                <input
                  type="number"
                  name="billRate"
                  value={bill}
                  id="billRate"
                  onChange={handleBillChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-12">
                <label className="mt-3 mb-1" htmlFor="socialSecurityNumber">
                  Social Security Number
                </label>
                <input
                  type="text"
                  name="socialSecurityNumber"
                  id="socialSecurityNumber"
                  value={ssn}
                  maxLength={11}
                  onChange={handleSSNChange}
                />
              </div>
              <div className="col-md-6 col-12">
                <label className="mt-3 mb-1" htmlFor="diverLicense">
                  Driver License or State ID
                </label>
                <input
                  type="text"
                  name="diverLicense"
                  id="diverLicense"
                  maxLength={8}
                  value={licence}
                  onChange={handleLicenceChange}
                />
              </div>
            </div>
            {/* <div className="row">
                <div className="col-md-6 col-12">
                  <label className="mt-3 mb-1" htmlFor="skills">
                    Skills Checklist
                  </label>
                  <select name="skills" id="skills">
                    <option value="1">Skills 1</option>
                    <option value="1">Skills 2</option>
                  </select>
                </div>
                <div className="col-md-6 col-12">
                  <label className="mt-3 mb-1" htmlFor="positionType">
                    Position Type
                  </label>
                  <select name="positionType" id="positionType">
                    <option value="1">Position 1</option>
                    <option value="1">Position 2</option>
                  </select>
                </div>
              </div> */}
            <div className="row">
              <div className="col-md-6 col-12">
                <label className="mt-3 mb-1" htmlFor="location">
                  Professional Licence Verification
                </label>
                <input
                  type="text"
                  name="location"
                  id="location"
                  maxLength={30}
                  value={plv}
                  onChange={handlePLVChange}
                />
              </div>
            </div>
            {/* <div className="row">
                <div className="col-md-6 col-12">
                  <label className="mt-3 mb-1" htmlFor="profession">
                    Profession
                  </label>
                  <input type="text" name="profession" id="profession" />
                </div>
                <div className="col-md-6 col-12">
                  <label className="mt-3 mb-1" htmlFor="shift">
                    Shift
                  </label>
                  <input type="text" name="shift" id="shift" />
                </div>
              </div> */}
            {/* <div className="row">
                <div className="col-md-6 col-12">
                  <label className="mt-3 mb-1" htmlFor="speciality">
                    Speciality
                  </label>
                  <input type="text" name="speciality" id="speciality" />
                </div>
              </div> */}
            <div className="row">
              <div className="col">
                <label className="mt-3 mb-1" htmlFor="compliancePerAgency">
                  Compliance Per Agency
                </label>
                <textarea
                  name="compliancePerAgency"
                  id="compliancePerAgency"
                  cols="30"
                  rows="5"
                  value={cpa}
                  onChange={handleCPAChange}
                ></textarea>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label className="mt-3 mb-1" htmlFor="submitPerAgency">
                  Submittal Per Agency
                </label>
                <textarea
                  name="submitPerAgency"
                  id="submitPerAgency"
                  cols="30"
                  rows="5"
                  value={spa}
                  onChange={handleSPAChange}
                ></textarea>
              </div>
            </div>
            <div className="row">
              <div className="col-6 py-4">
                <WebButton
                  name="Submit"
                  class="w-100 py-2 bg-sky clr-white"
                  handleClick={submitJobApplication}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default JobOrder;
