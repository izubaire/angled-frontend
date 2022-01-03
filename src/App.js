import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  AboutUs,
  ContactUs,
  Form,
  Job,
  JobOrder,
  Resume,
} from "./pages/web";

const App = () => {
  return (
    <>
      <Routes>
        {/* Main Website */}
        <Route path="/" element={<Home />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="job" element={<Job />} />
        <Route path="job/order" element={<JobOrder />} />
        <Route path="form" element={<Form />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="resume" element={<Resume />} />
      </Routes>
    </>
  );
};

export default App;
