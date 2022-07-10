import React, { useEffect } from "react";
import Moment from "react-moment";
import { Link, useParams } from "react-router-dom";
import { AiFillHeart, AiOutlineLike, AiOutlineHeart } from "react-icons/ai";
import { TbWorld } from "react-icons/tb";
import { MdOutlineWork } from "react-icons/md";
import { useSelector } from "react-redux";
import { FaBirthdayCake, FaUniversity } from "react-icons/fa";
import * as followServices from "../../../services/FollowService";

import Tabs from "../../../components/Tabs/Tabs";
import TabPanel from "../../../components/Tabs/TabPanel";
import CreatePost from "../../../components/CreatePost/CreatePost";
import Post from "../../../components/Post/Post";

import "../../UserPage/index.css";

const Index = () => {
  const [value, setValue] = React.useState(0);
  let userId = useParams();

  useEffect(() => {
    console.log("Params", userId);
  }, [userId]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const deleteFollower = async (e, id) => {
    e.preventDefault();
    await followServices.deleteFollowerService(id);
  };

  const unFollow = async (e, id) => {
    await followServices.unFollowService(id);
  };

  const currentUser = useSelector((state) => state.user.currentUser);
  const userPostsData = useSelector((state) => state.post.userPosts);
  const followersData = useSelector((state) => state.follow.followers);
  const followingData = useSelector((state) => state.follow.following);

  console.log("followers", followersData);
  console.log("followingData", followingData);
  console.log("currentUser", currentUser);
  console.log("userPostsData", userPostsData);
  return (
    <>
      <div className="tabs-holder">
        <Tabs
          activeTab={value}
          handleTabChange={handleChange}
          tabs={["Timeline", "Followers", "Following", "Photos", "Videos"]}
        ></Tabs>
      </div>
      <div className="container">
        <TabPanel value={value} index={0}>
          <div className="row d-flex justify-content-center">
            <div className="col-md-6">
              <CreatePost />
              {userPostsData && userPostsData.length > 0
                ? userPostsData.map((item, index) => (
                    <Post post={item} key={index} />
                  ))
                : "Userin hec bir postu yoxdu"}
            </div>
            <div className="col-md-4">
              <div className="about-list">
                <h3>About</h3>
                <ul className="about text-capitalize">
                  <li>
                    <i>
                      <TbWorld style={{ color: "#3B82F6" }} />
                    </i>
                    Country |
                    <span className="about-data">{currentUser.country}</span>
                  </li>
                  <li>
                    <i>
                      <FaBirthdayCake style={{ color: "#EC4899" }} />
                    </i>
                    birth date |
                    <span className="about-data">
                      <Moment format="DD/MM/YYYY">
                        {currentUser.birthDate}
                      </Moment>
                    </span>
                  </li>
                  <li>
                    <i>
                      <FaUniversity style={{ color: "#10B981" }} />
                    </i>
                    education |
                    <span className="about-data">{currentUser.education}</span>
                  </li>
                  <li>
                    <i>
                      <MdOutlineWork style={{ color: "#F59E0B" }} />
                    </i>
                    occupation |
                    <span className="about-data">{currentUser.occupation}</span>
                  </li>
                  <li>
                    <i>
                      <AiFillHeart style={{ color: "#EF4444" }} />
                    </i>
                    Relationship Status |
                    <span className="about-data">
                      {currentUser.relationshipStatus}
                    </span>
                  </li>
                </ul>
                <Link to={"/setting"}>
                  <button className="btn btn-primary w-100 mt-3">Edit</button>
                </Link>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div className="row d-flex justify-content-center">
            <div className="col-md-8">
              <div className="user-friends">
                <div className="row">
                  {followersData && followersData.length > 0
                    ? followersData.map((follower, index) => (
                        <div key={index} className="col-md-3">
                          <Link
                            to={`/user/${follower.id}`}
                            className="text-decoration-none"
                          >
                            <div className="friend-card mb-3">
                              <div className="friend-card-img">
                                {follower?.imageUrl === null ? (
                                  <img
                                    src={require("../../../helpers/images/avatar.jpg")}
                                    className="w-100"
                                  />
                                ) : (
                                  <img
                                    src={
                                      "http://localhost:39524/" +
                                      follower?.imageUrl
                                    }
                                    className="w-100"
                                  />
                                )}
                              </div>
                              <div className="friend-card-info">
                                <div className="followers-name text-lowercase text-center">
                                  @{follower.userName}
                                </div>
                              </div>
                              <div>
                                <button
                                  type="submit"
                                  className="w-100 btn-following"
                                  onClick={(e) => {
                                    deleteFollower(e, follower.id);
                                  }}
                                >
                                  Delete
                                </button>
                              </div>
                            </div>
                          </Link>
                        </div>
                      ))
                    : "Nobody is following you"}
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <div className="row d-flex justify-content-center">
            <div className="col-md-8">
              <div className="user-friends">
                <div className="row">
                  {followingData && followingData.length > 0
                    ? followingData.map((following, index) => (
                        <div key={index} className="col-md-3">
                          <Link
                            to={`/user/${following.id}`}
                            className="text-decoration-none"
                          >
                            <div className="friend-card mb-3">
                              <div className="friend-card-img">
                                {following?.imageUrl === null ? (
                                  <img
                                    src={require("../../../helpers/images/avatar.jpg")}
                                    className="w-100"
                                  />
                                ) : (
                                  <img
                                    src={
                                      "http://localhost:39524/" +
                                      following?.imageUrl
                                    }
                                    className="w-100"
                                  />
                                )}
                              </div>
                              <div className="friend-card-info">
                                <div className="followers-name text-lowercase text-center">
                                  @{following.userName}
                                </div>
                              </div>
                              <div>
                                <button
                                  className="w-100 btn-following"
                                  onClick={(e) => {
                                    unFollow(e, following.id);
                                  }}
                                >
                                  Unfollow
                                </button>
                              </div>
                            </div>
                          </Link>
                        </div>
                      ))
                    : "You don't follow anybody."}
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <div className="row d-flex justify-content-center">
            <div className="col-md-8">
              <div className="user-friends">
                <div className="row">
                  {userPostsData && userPostsData.length > 0
                    ? userPostsData.map((post) =>
                        post.images && post.images.length > 0
                          ? post.images.map((img) => (
                              <div className="col-md-4">
                                <div className="friend-card mb-3">
                                  <div className="friend-card-img">
                                    <img
                                      src={
                                        "http://localhost:39524/" + img?.imageUrl
                                      }
                                      className="w-100"
                                    />
                                  </div>
                                </div>
                              </div>
                            ))
                          : null
                      )
                    : "You don't have any photo"}
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={4}>
          <div className="row d-flex justify-content-center">
            <div className="col-md-8">
              <div className="user-friends">
                <div className="row">
                  {userPostsData && userPostsData.length > 0
                    ? userPostsData.map((post) =>
                        post.videos && post.videos.length > 0
                          ? post.videos.map((video, index) => (
                              <div className="col-md-4">
                                <div className="friend-card mb-3">
                                  <div className="friend-card-img">
                                    <video
                                      controls
                                      key={index}
                                      className="w-100"
                                    >
                                      <source
                                        src={
                                          "http://localhost:39524/" +
                                          video.videoUrl
                                        }
                                        type="video/mp4"
                                      />
                                    </video>
                                  </div>
                                </div>
                              </div>
                            ))
                          : null
                      )
                    : "You don't have any video"}
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
      </div>
    </>
  );
};

export default Index;
