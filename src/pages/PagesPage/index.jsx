import React from "react";
import Layout from "../../components/Layout";
import Pages from "./Pages/Pages";
import TopPages from "./TopPages/TopPages";

const index = () => {
  return (
    <Layout>
    <div className="container pt-4">
      <div className="row">
        <div className="col-md-8">
          <Pages />
        </div>
        <div className="col-md-4">
          <TopPages />
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default index;
