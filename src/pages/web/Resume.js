import React, { useState, useEffect } from "react";
import { Navbar, Footer, WebButton, PaginationComp } from "../../components";
import axios from "axios";
import { BASE_URL_BASE } from "../../utils/constants";

const Resume = () => {
  // Get 10 record forward from this index
  const [offset, setOffset] = useState(0);
  const [totalResumes, setTotalResumes] = useState(0);
  const [resumes, setResumes] = useState([]);

  const [ishospital, setIshospital] = useState(false);
  useEffect(() => {
    axios.get(`/api/ishospital/`).then((resp) => {
      if (!resp.data) {
        window.location.href = `${BASE_URL_BASE}/login/`;
      }
      setIshospital(resp.data);
    });
  }, []);

  useEffect(() => {
    if (ishospital) {
      axios
        .get(`/api/resume/?offset=${offset}&limit=10`)
        .then(async (resp) => {
          setResumes(resp?.data?.results);
          setTotalResumes(resp?.data?.results?.length);
        })
        .catch((error) => {
          console.log("error", error);
        });
    }
  }, [offset, ishospital]);

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
                  <tbody>
                    {resumes?.map((formdata, index) => {
                      let splitted = formdata?.created_at?.split("T");
                      return (
                        <tr key={index}>
                          <td>
                            <p>{splitted[0]}</p>
                            <p>{splitted[1].split(".")[0]}</p>
                          </td>
                          <td>{formdata?.job_post?.position}</td>
                          <td>{formdata?.job_post?.location}</td>
                          <td>{formdata?.job_post?.shift}</td>
                          <td>
                            <a
                              href={`${BASE_URL_BASE}/${formdata?.resume_url}`}
                              download={`resume-${formdata?.resume?.id}.pdf`}
                            >
                              <div>
                                <WebButton
                                  name="Download"
                                  class="bg-sky clr-white"
                                  handleClick={() => {}}
                                />
                              </div>
                            </a>
                            <a
                              href={`${BASE_URL_BASE}/${formdata?.resume_url}`}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <div>
                                <WebButton
                                  class="mt-3 bg-sky clr-white"
                                  name="View"
                                  handleClick={() => {}}
                                />
                              </div>
                            </a>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                {totalResumes > 10 ? (
                  <PaginationComp
                    setOffset={setOffset}
                    totalResumes={totalResumes}
                  />
                ) : (
                  <></>
                )}
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
