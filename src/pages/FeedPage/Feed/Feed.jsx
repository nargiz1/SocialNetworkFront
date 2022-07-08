import React from "react";
import { useSelector } from "react-redux";

import CreatePost from "../../../components/CreatePost/CreatePost";
import Post from "../../../components/Post/Post";
import "../Feed/Feed.css";

function Feed({ likeTest, setLikeTest }) {

  const data = useSelector((state) => state.post.posts);
  const users = useSelector((state) => state.user.users);

  console.log("all posts",data);

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
