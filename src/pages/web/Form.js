import React from "react";
import { Navbar, Footer, WebButton } from "../../components";
import { Link } from "react-router-dom";
import { jobs } from "../../asset";

const Form = () => {
  const formTable = [
    { formName: "Apply Job", open: "Open" },
    { formName: "Background Check Consent Form", open: "Open" },
    { formName: "Skills Checklist", open: "Open" },
    { formName: "Staffing Needs", open: "Open" },
  ];
  const formDownloadTable = [
    { formName: "Apply Job", open: "Download" },
    { formName: "Acknowledge", open: "Download" },
    { formName: "Pre-Employment Checklist", open: "Download" },
    { formName: "IDF", open: "Download" },
    { formName: "Referral Bonus 2", open: "Download" },
    { formName: "Hepatitis Vaccine", open: "Download" },
  ];
  return (
    <>
      <Navbar />
      <section className="container">
        <div
          className="position-relative d-flex justify-content-start align-items-center mt-5 mb-3 rounded"
          style={{
            backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url(${jobs})`,
            minHeight: "70vh",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="text-center ms-lg-5 ms-sm-3 ms-2">
            <h1 className="font50px text-white mb-4">Forms</h1>
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
        <div className="mb-3">
          <h4 className="clr-purple">Online Forms</h4>
          <div className="table overflow-auto">
            <table className="w-100" style={{ backgroundColor: "#f5f6f8" }}>
              <thead>
                <tr className="rounded border-bottom-0">
                  <th className="w-50">Form Name</th>
                  <th>Open</th>
                </tr>
              </thead>
              <tbody>
                {formTable?.map((formdata) => {
                  return (
                    <tr>
                      <td>{formdata.formName}</td>
                      <td>{formdata.open}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="mb-5">
          <h4 className="clr-purple">Download PDF Forms</h4>
          <div className="table overflow-auto">
            <table className="w-100" style={{ backgroundColor: "#f5f6f8" }}>
              <thead>
                <tr className="rounded border-bottom-0">
                  <th className="w-50">Form Name</th>
                  <th>Open</th>
                </tr>
              </thead>
              <tbody>
                {formTable?.map((formdata) => {
                  return (
                    <tr>
                      <td>{formdata.formName}</td>
                      <td>{formdata.open}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Form;
