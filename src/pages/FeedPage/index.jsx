import React from "react";
import Layout from "../../components/Layout";
import Feed from "./Feed/Feed";
import Wedget from "./Wedget/Wedget";

const Index = () => {
  return (
    <Layout>
      <div className="container">
        <div className="row d-flex justify-content-between pt-4">
          <div className="col-md-9">
            <Feed />
          </div>
          <div className="col-md-3">
            <Wedget />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
