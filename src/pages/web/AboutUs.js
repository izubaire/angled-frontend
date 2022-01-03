import React from "react";
import { Navbar, Footer } from "../../components";
import { aboutUs } from "../../asset";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <section className="container">
        <div
          className="d-flex justify-content-start align-items-center mt-5 mb-3 rounded"
          style={{
            backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url(${aboutUs})`,
            minHeight: "60vh",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="text-center ms-lg-5 ms-sm-3 ms-2">
            <h1 className="font50px text-white mb-4">About Us</h1>
          </div>
        </div>
        <div className="clr-purple mb-5">
          <h3>WELCOME</h3>
          <p>
            You have joined one of the area’s newest innovative company. Health
            Hybrid INC. (herein referred to as HHI) (HHI) takes pride in both
            the service we provide and the people we hire. This Orientation
            Manual was created to help you learn more about HHI. As part of our
            company, the quality of service you deliver is as important as your
            attitude. All our employees practice sound initiative, judgment and
            sensitivity when working with our clients and co-workers. We believe
            that each employee contributes directly to Health Hybrid growth and
            success. We are confident you will take pride in being a member of
            our team. Your experience here will be challenging, diversified and
            rewarding. HHI provides equal employment opportunities (EEO) to all
            employees and applicants for employment without regard to race,
            color, religion, gender, sexual orientation, national origin, age,
            disability, marital status, amnesty, or status as a covered veteran
            in accordance with applicable federal, state and local laws. HHI
            complies with applicable state and local laws governing non-
            discrimination in employment in every location in which the company
            has facilities. This policy applies to all terms and conditions of
            employment, including, but not limited to, hiring, placement,
            promotion, termination, and layoff, recall, and transfer, leaves of
            absence, compensation and training. HHI expressly prohibits any form
            of unlawful employee harassment based on race, color, religion,
            gender, sexual orientation, gender identity, national origin, age,
            disability, or veteran status. Improper interference with the
            ability to HHI employees to perform their expected job duties is
            absolutely not tolerated. Assignments are as varied as the clients
            we serve. They can be for a single day, a week or for months at a
            time. If we call for an assignment, you are free to accept it or
            not. Just keep in mind that last-minute cancellations inconvenience
            both the client and us. If you accept an assignment, make sure you
            get all the facts you need to report promptly. You are a very
            important part of our organization. The quality of service you
            deliver when working for this organization is important to our
            image. Equally important are attitude, punctuality and attendance.
            The better the performance of our employees, the more jobs there
            will be available to them. Violation of any standards and procedures
            may result in termination of employment.
          </p>
          <h3>MISSION STATEMENT</h3>
          <p>
            Our mission at HHI is to help companies meet their staffing needs.
            We will provide superior health care. HHI will work with
            organizations of all sizes, providing them with productive and
            efficient temporary personnel. HHI markets personnel to business,
            industry, government and healthcare facilities as well as to
            individuals at home. HHI complies with The Joint Commission
            Accreditation of Health Care Organizations standards. Ensuring
            consistent operating policies and procedures is critical to the
            clients we serve. Below is a summary of the type of healthcare
            personnel we hire: Clinical: Registered Nurses, Licensed Practical
            Nurses, Certified Home Health Aides, Physical Therapist, Nursing
            Assistants, Respiratory Therapists and a variety of Allied Health
            Professionals. Keeping both employee and client happy is our goal.
            We must be aware of the needs of our clients so that they are fully
            satisfied with every assignment for which we are responsible. Our
            growth will be evidence that we do this well. We will retained
            clients who have the skills and the experience from the very
            inception of our business.
          </p>
          <h3>VISION STATEMENT</h3>
          <p>
            To be trusted as the most devoted place to provide quality
            healthcare and financial solutions.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AboutUs;
