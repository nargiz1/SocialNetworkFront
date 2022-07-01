import React from "react";
import Tabs from "../../../components/Tabs/Tabs";
import TabPanel from "../../../components/Tabs/TabPanel";
import CreatePost from "../../../components/CreatePost/CreatePost";
import Post from "../../../components/Post/Post";
import "../../UserPage/index.css";

import { AiFillHeart, AiOutlineLike, AiOutlineHeart } from "react-icons/ai";

import { TbWorld } from "react-icons/tb";
import { MdOutlineWork } from "react-icons/md";
import { useSelector } from "react-redux";
import { FaBirthdayCake, FaUniversity } from "react-icons/fa";

const Index = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const data = useSelector((state) => state.auth.currentUser);
  console.log("currentUser",data);
  const userPostsData = useSelector((state) => state.post.userPosts);
  const followersData = useSelector((state) => state.follow.followers);
  console.log("followers dispatch data", followersData);
  console.log("user dispatch posts", userPostsData);
  return (
    <>
      <div className="tabs-holder">
        <Tabs
          activeTab={value}
          handleTabChange={handleChange}
          tabs={["Timeline", "Friends", "Photos", "Videos"]}
        ></Tabs>
      </div>
      <div className="container">
        <TabPanel value={value} index={0}>
          <div className="row d-flex justify-content-center">
            <div className="col-md-6">
              <CreatePost />
              {/* {
                userPostsData && userPostsData.length > 0 ? (
                  userPostsData.map((item,index)=>(
                    <Post post={item} key={index}/>

                  ))
                ):"Userin hec bir postu yoxdu"
              } */}
            </div>
            <div className="col-md-4">
              <div className="about-list">
                <h3>About</h3>
                <ul className="about text-capitalize">
                  <li>
                    <i>
                      <TbWorld style={{ color: "#3B82F6" }} />
                    </i>{" "}
                    Country | <span className="about-data">{data.country}</span>
                  </li>
                  <li>
                    <i>
                      <FaBirthdayCake style={{ color: "#EC4899" }} />
                    </i>{" "}
                    birth date |{" "}
                    <span className="about-data">{data.birthDate}</span>
                  </li>
                  <li>
                    <i>
                      <FaUniversity style={{ color: "#10B981" }} />
                    </i>{" "}
                    education |{" "}
                    <span className="about-data">{data.education}</span>
                  </li>
                  <li>
                    <i>
                      <MdOutlineWork style={{ color: "#F59E0B" }} />
                    </i>{" "}
                    occupation |{" "}
                    <span className="about-data">{data.occupation}</span>
                  </li>
                  <li>
                    <i>
                      <AiFillHeart style={{ color: "#EF4444" }} />
                    </i>{" "}
                    Relationship Status |{" "}
                    <span className="about-data">
                      {data.relationshipStatus}
                    </span>
                  </li>
                </ul>
                <button className="btn btn-primary w-100 mt-3">Edit</button>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div className="row d-flex justify-content-center">
            <div className="col-md-8">
              <div className="user-friends">
                <div className="row">
                  {followersData.length && followersData.length > 0 ? (
                    <div className="col-md-3">
                      <div className="friend-card mb-3">
                        <div className="friend-card-img">
                          <img
                            src={require("../../../helpers/images/avatar2.jpg")}
                            className="w-100"
                          />
                        </div>
                        <div className="friend-card-info">
                          <div className="followers-name">Bashir Azizov</div>
                          <div className="followers">18 Following</div>
                        </div>
                        <div>
                          <button className="w-100 btn-following">
                            Following
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    "You don't have any friend"
                  )}
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
                  {userPostsData?.images && userPostsData.images.length > 0 ? (
                    <div className="col-md-4">
                      <div className="friend-card mb-3">
                        <div className="friend-card-img">
                          <img
                            src={require("../../../helpers/images/avatar2.jpg")}
                            className="w-100"
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    "You don't have any photo"
                  )}
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
                  {userPostsData?.videos && userPostsData.videos.length > 0 ? (
                    <div className="col-md-4">
                      <div className="friend-card mb-3">
                        <div className="friend-card-img">
                          <video className="w-100" controls>
                            <source
                              src={require("../../../helpers/videos/video-1.mp4")}
                              type="video/mp4"
                            />
                          </video>
                        </div>
                      </div>
                    </div>
                  ) : (
                    "You don't have any video"
                  )}
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
