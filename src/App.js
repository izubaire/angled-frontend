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
import {
  Dashboard,
  Invoice,
  NewJobDetail,
  NewPosition,
  ActiveJobDetail,
  AssignJob,
} from "./pages/admin";
import {
  ClientDashboard,
  ClientActiveJobDetail,
  ClientAddNew,
  ClientCurrentlyWorkingDetail,
  ClientManage,
  ClientReport,
  ClientResume,
  ClientVendorActivity,
} from "./pages/client";

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
        {/* Client Panel */}
        <Route path="client/dashboard" element={<ClientDashboard />} />
        <Route path="client/add-new/:id" element={<ClientAddNew />} />
        <Route
          path="client/active-job/:id"
          element={<ClientActiveJobDetail />}
        />
        <Route
          path="client/currently-working/:id"
          element={<ClientCurrentlyWorkingDetail />}
        />
        <Route path="client/report" element={<ClientReport />} />
        <Route path="client/resume" element={<ClientResume />} />
        <Route
          path="client/vendor-activity"
          element={<ClientVendorActivity />}
        />
        <Route path="client/manage" element={<ClientManage />} />
      </Routes>
    </>
  );
};

export default App;
