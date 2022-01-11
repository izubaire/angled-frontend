import React, { useState, useEffect } from "react";
import { Navbar, Footer, WebButton, PaginationComp } from "../../components";
import { jobs } from "../../asset";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Job = () => {
  const [openJobs, setOpenJobs] = useState([]);

  const [keywords, setKeywords] = useState("");
  const [location, setLocation] = useState("");

  const navigate = useNavigate();

  // Get 10 record forward from this index
  const [offset, setOffset] = useState(0);
  const [totalJobs, setTotalJobs] = useState(0);

  useEffect(() => {
    axios.get(`/api/posts/?offset=${offset}&limit=10`).then((data) => {
      setTotalJobs(data.data.count);
      setOpenJobs(data.data.results);
    });
  }, [offset]);

  const navigateToJobOrder = (job_id) => {
    navigate("/job/order", { state: { id: job_id } });
  };

  const handleKeywordChange = (e) => {
    setKeywords(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const getJobs = () => {
    if (keywords === "" && location === "") {
      return openJobs;
    } else if (keywords?.length > 0) {
      let keys_for_search = [
        "speciality",
        "unit",
        "shift",
        "profession",
        "position",
      ];
      return openJobs.filter((job) =>
        keys_for_search.some((key) =>
          job[key]?.toLowerCase().includes(keywords?.toLowerCase())
        )
      );
    } else if (location?.length > 0) {
      return openJobs.filter((job) =>
        job?.location?.toLowerCase().includes(location?.toLowerCase())
      );
    } else {
      return openJobs;
    }
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
              <tbody>
                {getJobs()?.map((jobdata) => {
                  return (
                    <tr key={jobdata.id}>
                      <td>{jobdata.position}</td>
                      <td>{jobdata.location}</td>
                      <td>{jobdata.unit}</td>
                      <td>{jobdata.shift}</td>
                      <td>{jobdata.speciality}</td>
                      <td>{jobdata.profession}</td>
                      <td>
                        <WebButton
                          name="Apply Now"
                          class="bg-sky clr-white"
                          handleClick={() => {
                            navigateToJobOrder(jobdata.id);
                          }}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            {totalJobs > 10 ? (
              <PaginationComp setOffset={setOffset} totalJobs={totalJobs} />
            ) : (
              <></>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default Job;
