import React, { useState, useEffect } from "react";
import { Navbar, Footer } from "../../components";

const Resume = () => {
  const [ishospital, setIshospital] = useState(false);

  return (
    <>
      {ishospital ? (
        <>
          <Navbar />

          <section className="p-lg-5 p-md-3 p-2">
            <div className=" " style={{ paddingTop: "2rem" }}>
              <h3 className="clr-purple">Resumes</h3>
              <div className="table">
                <table className="w-100" style={{ backgroundColor: "#f5f6f8" }}>
                  <thead>
                    <tr className="rounded border-bottom-0">
                      <th>Date / Time</th>
                      <th>Position</th>
                      <th>Location</th>
                      <th>Shift</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody></tbody>
                </table>
              </div>
            </div>
          </section>
          <Footer />
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Resume;
