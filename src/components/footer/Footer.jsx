import React from "react";
import { navicon } from "../../asset";

const Footer = () => {
  return (
    <footer className=" linear-gradient-lr text-white p-md-4 p-2">
      <div className=" container">
        <div className="">
          <img src={navicon} alt="Nav" />
        </div>
        <div className="row">
          <div className="col-md-6 col-12 mb-3">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content.
          </div>
          <div className="col-md-6 col-12 d-flex justify-content-around gap-2 flex-wrap">
            <div className="mb-2">
              <h5 className="mb-4">Heading</h5>
              <p>Heading</p>
              <p>Heading</p>
              <p>Heading</p>
            </div>
            <div className="mb-2">
              <h5 className="mb-4">Heading</h5>
              <p>Heading</p>
              <p>Heading</p>
              <p>Heading</p>
            </div>
            <div className="mb-2">
              <h5 className="mb-4">Heading</h5>
              <p>Heading</p>
              <p>Heading</p>
              <p>Heading</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
