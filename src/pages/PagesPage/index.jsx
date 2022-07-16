import React from "react";
import Layout from "../../components/Layout";
import Pages from "./Pages/Pages";

const Index = () => {
  return (
    <Layout>
    <div className="container pt-4">
      <div className="row justify-content-center align-items-center">
      
          <Pages />
      
      </div>
    </div>
    </Layout>
  );
};

export default Index;
