import React from "react";
import Layout from "../../components/Layout";
import Pages from "./Pages/Pages";

const Index = () => {
  return (
    <Layout>
    <div className="container pt-4">
      <div className="row justify-content-center align-items-center">
        <div className="col-mg-12 col-lg-8">
          <Pages />
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default Index;
