import React, { useState } from "react";
import { Navbar, Footer, WebButton } from "../../components";
import { jobs } from "../../asset";

const Job = () => {
  const [keywords, setKeywords] = useState("");
  const [location, setLocation] = useState("");

  const handleKeywordChange = (e) => {
    setKeywords(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  return (
    <>
      <Navbar />
      <section className="container">
        <div
          className="mt-5 mb-3 rounded position-relative d-flex justify-content-start align-items-center"
          style={{
            backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url(${jobs})`,
            minHeight: "70vh",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="text-center ms-lg-5 ms-sm-3 ms-2">
            <h1 className="font50px text-white mb-4">
              BROWSE JOBS BY <br /> SPECIALITY
            </h1>
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
        <div className="flex-center flex-column mb-5">
          <div
            className="p-4 d-flex justify-content-center align-items-center flex-wrap gap-2"
            style={{
              background: "#f5f6f8",
              borderRadius: "1rem",
              boxShadow:
                "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
              transform: "translateY(-5rem)",
            }}
          >
            <input
              className="minWidth15r"
              type="search"
              name="search"
              id="homeSearch"
              placeholder="Search Keyword"
              value={keywords}
              onChange={handleKeywordChange}
            />
            <input
              className="minWidth15r"
              type="text"
              name="text"
              id="homeLocation"
              placeholder="All Location"
              value={location}
              onChange={handleLocationChange}
            />
            <WebButton
              class="py-2 minWidth15r bg-sky clr-white"
              name="Find Job"
            />
          </div>
          <div className="table overflow-auto">
            <table className="w-100  " style={{ backgroundColor: "#f5f6f8" }}>
              <thead>
                <tr className="rounded border-bottom-0">
                  <th>Faculity Name</th>
                  <th>Location</th>
                  <th>Unit</th>
                  <th>Shift</th>
                  <th>Speciality</th>
                  <th>Profession</th>
                  <th>Submit</th>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default Job;
