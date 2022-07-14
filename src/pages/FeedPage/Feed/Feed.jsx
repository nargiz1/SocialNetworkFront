import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as postServices from "../../../services/PostService";
import { setPosts } from "../../../redux/Post/PostSlice";
import CreatePost from "../../../components/CreatePost/CreatePost";
import Post from "../../../components/Post/Post";
import "../Feed/Feed.css";

function Feed() {
  const dispatch = useDispatch();
  const [likeTest, setLikeTest] = useState(false);

  useEffect(() => {
    (async function () {
      const data = await postServices.getAllPostsService();
      dispatch(setPosts(data));
    })();
  }, [likeTest, dispatch]);

  const data = useSelector((state) => state.post.posts);

  return (
    <div className="feed">
      <CreatePost />
      {
        data && data.length > 0 ? (
          data.map((item, index) => (
            <Post post={item} key={index} likeTest={likeTest} setLikeTest={setLikeTest} />
          ))
        ) : null
      }

    </div>
  );
}

export default Feed;
