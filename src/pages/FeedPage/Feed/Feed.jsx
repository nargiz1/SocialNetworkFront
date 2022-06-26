import React from "react";
import CreatePost from "./CreatePost/CreatePost";
import Post from "./Post/Post";
import "../Feed/Feed.css";

function Feed() {
  return (
    <div className="feed">
      <CreatePost />
      <Post/>
    </div>
  );
}

export default Feed;
