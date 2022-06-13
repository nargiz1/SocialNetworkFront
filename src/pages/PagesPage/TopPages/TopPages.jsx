import React from "react";
import "../TopPages/TopPages.css";

const TopPages = () => {
  return (
    <div className="top-pages">
      <div className="page-card">
        <div className="page-card-top d-flex align-items-center justify-content-between border-bottom pb-3">
          <h5>Top Pages</h5>
          <a href="#" className="text-decoration-none">
            See all
          </a>
        </div>
        <div className="page-card-body">
          <div className="d-flex justify-content-between mt-3 card-item">
            <div>
              <img
                src={require("../../../helpers/images/avatar.jpg")}
                alt="profilePhoto"
              />
            </div>
            <div className="page-card-body-item">
              <h5 className="fw-bold">Ayshan Gambarova</h5>
              <span>55 Following</span>
            </div>
            <div><button className="follow-button">Follow</button></div>
          </div>
          <div className="d-flex  justify-content-between mt-3 card-item">
            <div>
              <img
                src={require("../../../helpers/images/avatar.jpg")}
                alt="profilePhoto"
              />
            </div>
            <div className="page-card-body-item">
              <h5 className="fw-bold">Ayshan Gambarova</h5>
              <span>55 Following</span>
            </div>
            <div><button className="follow-button">Follow</button></div>
          </div>
          <div className="d-flex  justify-content-between mt-3 card-item">
            <div>
              <img
                src={require("../../../helpers/images/avatar.jpg")}
                alt="profilePhoto"
              />
            </div>
            <div className="page-card-body-item">
              <h5 className="fw-bold">Ayshan Gambarova</h5>
              <span>55 Following</span>
            </div>
            <div><button className="follow-button">Follow</button></div>
          </div>
          <div className="d-flex  justify-content-between mt-3 card-item">
            <div>
              <img
                src={require("../../../helpers/images/avatar.jpg")}
                alt="profilePhoto"
              />
            </div>
            <div className="page-card-body-item">
              <h5 className="fw-bold">Ayshan Gambarova</h5>
              <span>55 Following</span>
            </div>
            <div><button className="follow-button">Follow</button></div>
          </div>
           <div className="d-flex  justify-content-between mt-3 card-item">
            <div>
              <img
                src={require("../../../helpers/images/avatar.jpg")}
                alt="profilePhoto"
              />
            </div>
            <div className="page-card-body-item">
              <h5 className="fw-bold">Ayshan Gambarova</h5>
              <span>55 Following</span>
            </div>
            <div><button className="follow-button">Follow</button></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopPages;
