import React from "react";
import Layout from "../../components/Layout";
import "../UserPage/index.css";

const Index = () => {
  return (
    <Layout>
      <div className="container">
        <div className="row align-items-center justify-content-center text-center">
          <div className="col-12">
            <div className="user-profile m-3">
              <div className="profile-banner">
                <img
                  src={require("../../helpers/images/profile-cover.jpg")}
                  alt=""
                  className="w-100 h-100"
                />
              </div>
              <div className="profile-content align-items-center justify-content-center">
                <div className="profile-avatar">
                  <img
                    src={require("../../helpers/images/avatar.jpg")}
                    alt=""
                   
                  />
                </div>
                <div className="profile-info align-items-center justify-content-center">
                  <h1>Ayshan Gambarova</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
