import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as postServices from "../../services/PostService";
import * as userServices from "../../services/UserService";
import { setPosts } from "../../redux/Post/PostSlice";

import Layout from "../../components/Layout";
import Feed from "./Feed/Feed";
import Wedget from "./Wedget/Wedget";
import { useSelect } from "@mui/base";
import { ConstructionOutlined } from "@mui/icons-material";

const Index = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);
  const posts = useSelector((state) => state.post.posts);
  const [likeTest, setLikeTest] = useState(false);

  useEffect(() => {
    (async function () {
      const data = await postServices.getAllPostsService();
      dispatch(setPosts(data));
    })();

  }, [likeTest, dispatch]);

  return (
    <Layout>
      <div className="row d-flex justify-content-between pt-4">
        <div className="col-md-9">
          <Feed likeTest={likeTest} setLikeTest={setLikeTest} />
        </div>
        <div className="col-md-3">
          <Wedget />
        </div>
      </div>
    </Layout>
  );
};

export default Index;
