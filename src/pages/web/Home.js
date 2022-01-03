import React from "react";
import { WebButton, Navbar, Footer } from "../../components";
import { Link } from "react-router-dom";

import {
  visionService,
  rehabTherapy,
  nursing,
  pharmacy,
  instantForms,
  downloadForm,
  home2Bottom,
  opportunity1,
  opportunity2,
  opportunity3,
  opportunity4,
  opportunity5,
  opportunity6,
  missionStatement,
  crpExpert,
  lacyFinancial,
  home1,
  home2,
} from "../../asset";

const Home = () => {
  return (
    <>
      <Navbar />
      <section>
        <div
          className="position-relative d-flex justify-content-start align-items-center"
          style={{
            backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url('${home1}')`,
            minHeight: "90vh",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="text-center ms-lg-5 ms-sm-3 ms-2">
            <h1 className="font50px text-white mb-4">
              BROWSE JOBS BY <br /> SPECIALITY
            </h1>
            <Link to="/job/">
              <span className="me-4">
                <WebButton name="Apply Now" class="bg-wood clr-white" />
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
        <div className="container bg-white mt-4 pt-4">
          <div
            className="d-flex flex-column align-items-center mt-4"
            style={{ minHeight: "120vh" }}
          >
            <div
              className="text-center"
              style={{
                width: "100%",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(15rem, 1fr))",
                gap: "1rem",
                justifyContent: "center",
              }}
            >
              <div className=" rounded shadow ps-4 pe-2 py-5">
                <p className="mb-5">Vision Service</p>
                <img
                  style={{ width: "89%" }}
                  src={visionService}
                  alt="vision service"
                />
              </div>
              <div className=" rounded shadow ps-4 pe-2 py-5">
                <p className="mb-5">Rehabilitation Therapy</p>
                <img
                  style={{ width: "79%" }}
                  src={rehabTherapy}
                  alt="vision service"
                />
              </div>
              <div className=" rounded shadow ps-4 pe-2 py-5">
                <p className="mb-5">Rehabilitation Therapy</p>
                <img
                  style={{ width: "69%" }}
                  src={nursing}
                  alt="vision service"
                />
              </div>
              <div className=" rounded shadow ps-4 pe-2 py-5">
                <p className="mb-5">Pharmacy</p>
                <img
                  style={{ width: "79%" }}
                  src={pharmacy}
                  alt="vision service"
                />
              </div>
            </div>
            <u className="my-5 pointer">View more</u>
          </div>
          <div
            className="flex-center position-relative gap-3 mb-3 rounded"
            style={{
              backgroundImage: `url(${home2})`,
              minHeight: "90vh",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "auto, 100%",
            }}
          >
            <div className=" flex-center flex-wrap gap-4">
              <div className=" pointer bg-white shadow rounded text-center p-md-3 p-2">
                <img
                  style={{ width: "3rem" }}
                  src={instantForms}
                  alt="instantForms"
                />
                <h6 className="mt-3">Instant Online Forms</h6>
              </div>
              <div className=" pointer bg-white shadow rounded text-center p-md-3 p-2">
                <img
                  style={{ width: "2.5rem" }}
                  src={downloadForm}
                  alt="downloadForm"
                />
                <h6 className="mt-3">Download Pdf Forms</h6>
              </div>
            </div>
            <div
              className="position-absolute"
              style={{
                top: "100%",
                left: "50%",
                transform: "translate(-50%, -100%)",
              }}
            >
              <img src={home2Bottom} alt="home2Bottom" />
            </div>
          </div>
          <div className="text-center mb-5">
            <h2 className="f700 mb-5" style={{ lineHeight: "3rem" }}>
              We'll always match you up with opportunities <br /> that are the
              right fit
            </h2>
            <div
              className="m-auto"
              style={{
                width: "75%",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(15rem, 1fr))",
                gap: "2rem",
              }}
            >
              <div className="bg-white rounded shadow p-3">
                <img
                  style={{ width: "5rem" }}
                  src={opportunity1}
                  alt="opportunity1"
                />
                <h5 className="my-4">Policies & Procedures</h5>
                <p className="font14px">
                  This manual is intended to provide employees with a general
                  understanding of our personnel policies and procedures.
                </p>
              </div>
              <div className="bg-white rounded shadow p-3">
                <img
                  style={{ width: "5rem" }}
                  src={opportunity2}
                  alt="opportunity1"
                />
                <h5 className="my-4">COMPETENCIES</h5>
                <p className="font14px">
                  Asses your workforce through our online clinical competencies
                  exams.
                </p>
              </div>
              <div className="bg-white rounded shadow p-3">
                <img
                  style={{ width: "5rem" }}
                  src={opportunity3}
                  alt="opportunity1"
                />
                <h5 className="my-4">FORMS</h5>
                <p className="font14px">
                  Whenever you struggle with anything regarding Rife Pro, just
                  hit us a message on our support forum.
                </p>
              </div>
              <div className="bg-white rounded shadow p-3">
                <img
                  style={{ width: "5rem" }}
                  src={opportunity4}
                  alt="opportunity1"
                />
                <h5 className="my-4">APPLY ONLINE</h5>
                <p className="font14px">
                  Ready to Apply? You’re in the right spot.
                </p>
              </div>
              <div className="bg-white rounded shadow p-3">
                <img
                  style={{ width: "5rem" }}
                  src={opportunity5}
                  alt="opportunity1"
                />
                <h5 className="my-4">SKILLS CHECKLIST</h5>
                <p className="font14px">
                  Please provide us with your skills, knowledge, and abilities.
                </p>
              </div>
              <div className="bg-white rounded shadow p-3">
                <img
                  style={{ width: "5rem" }}
                  src={opportunity6}
                  alt="opportunity1"
                />
                <h5 className="my-4">STAFFING NEEDS</h5>
                <p className="font14px">Tell us your staffing needs.</p>
              </div>
            </div>
          </div>
          <div className="mb-3">
            <div className="row">
              <div className="col-sm-5 col-12 mb-3">
                <img
                  style={{ width: "100%" }}
                  src={missionStatement}
                  alt="missionStatement"
                />
              </div>
              <div className="col-sm-7 col-12">
                <h2 className="f700">Mission Statement</h2>
                <p className="">
                  Our mission at HHI is to help companies meet their staffing
                  needs. We will provide superior health care. HHI will work
                  with organizations of all sizes, providing them with
                  productive and efficient temporary personnel. HHI markets
                  personnel to business, industry, government and healthcare
                  facilities as well as to individuals at home. HHI complies
                  with The Joint Commission Accreditation of Health Care
                  Organizations standards. Ensuring consistent operating
                  policies and procedures is critical to the clients we serve.
                  Below is a summary of the type of healthcare personnel we
                  hire: Clinical: Registered Nurses, Licensed Practical Nurses,
                  Certified Home Health Aides, Physical Therapist, Nursing
                  Assistants, Respiratory Therapists and a variety of Allied
                  Health Professionals. Keeping both employee and client happy
                  is our goal. We must be aware of the needs of our clients so
                  that they are fully satisfied with every assignment for which
                  we are responsible. Our growth will be evidence that we do
                  this well. We will retained clients who have the skills and
                  the experience from the very inception of our business.
                </p>
              </div>
            </div>
          </div>
          <div className="text-center clr-purple p-4">
            <img style={{ width: "17rem" }} src={crpExpert} alt="crpExpert" />
            <p>AN AMERICAN HEART ASSOCIATION TRAINING WEB SITE.</p>
            <p>ONLINE COURSES OFFERED:</p>
            <p>ACLS, BLS, FIRST AID, NRP, PALS, PEDIATRIC FIRST AID AND CEUS</p>
            <img
              style={{ width: "17rem" }}
              src={lacyFinancial}
              alt="lacyFinancial"
            />
            <p>AN INVESTMENT ADVISORY FIRM</p>
            <p>
              OFFER CONSULTING SERVICES HELPING YOU EVERY STEP OF THE WAY TO
              SUCCESS: PLAN, BUDGET., INVEST AND MANAGE.
            </p>
            <p>TRY US OUT!</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
