import React from "react";
import { useSelector } from "react-redux";

import CreatePost from "../../../components/CreatePost/CreatePost";
import Post from "../../../components/Post/Post";
import "../Feed/Feed.css";

function Feed() {

  const data = useSelector((state) => state.post.posts);
  console.log("all posts feed fedd,jsx",data);

  return (
    <div className="feed">
      <CreatePost />

      {
        data && data.length > 0 ? (
          data.map((item, index) => (
            <Post post={item} key={index} />
          ))
        ) : null
      }

    </div>
  );
}

export default Feed;
