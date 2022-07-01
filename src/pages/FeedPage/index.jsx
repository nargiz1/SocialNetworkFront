import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import * as postServices from "../../services/PostService";
import { setPosts } from "../../redux/Post/PostSlice";

import Layout from "../../components/Layout";
import Feed from "./Feed/Feed";
import Wedget from "./Wedget/Wedget";
import { useSelect } from "@mui/base";

const Index = () => {
  const dispatch = useDispatch();


  useEffect(() => {
    (async function () {
      const data = await postServices.getAllPostsService();
      dispatch(setPosts(data.$values));
    })();
  }, [dispatch]);

  return (
    <Layout>
      <div className="row d-flex justify-content-between pt-4">
        <div className="col-md-9">
          <Feed />
        </div>
        <div className="col-md-3">
          <Wedget />
        </div>
      </div>
    </Layout>
  );
};

export default Index;
