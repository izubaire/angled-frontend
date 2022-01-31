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
        {/* Admin Panel */}
        <Route path="admin/dashboard" element={<Dashboard />} />
        <Route path="admin/invoice" element={<Invoice />} />
        <Route path="admin/new-position" element={<NewPosition />} />
        <Route path="admin/new-job/detail/:id" element={<NewJobDetail />} />
        <Route
          path="admin/active-job/detail/:id"
          element={<ActiveJobDetail />}
        />
        <Route path="admin/new-job/assign/:id" element={<AssignJob />} />
      </Routes>
    </>
  );
};

export default App;
