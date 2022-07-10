import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Layout from "../../components/Layout";
import UserTabs from "../UserPage/UserTabs/index";
import * as postServices from "../../services/PostService";
import * as userServices from "../../services/UserService";
import * as followServices from "../../services/FollowService";
import { setUserPosts } from "../../redux/Post/PostSlice";
import { setFollowers, setFollowing } from "../../redux/Follow/FollowSlice";
import "../UserPage/index.css";
import { useParams } from "react-router-dom";
import { HiOutlinePhotograph } from "react-icons/hi";
import { AiOutlinePlus } from "react-icons/ai";

const Index = () => {
  const dispatch = useDispatch();
  let userId = useParams();

  useEffect(() => {
    console.log("Params", userId);
  }, [userId]);

  const currentUser = useSelector((state) => state.user.currentUser);
  const users = useSelector((state) => state.user.users);
  console.log("users", users);

  useEffect(() => {
    (async function () {
      const user = await userServices.getUserService();
      const followers = await followServices.getFollowersService(user);
      const following = await followServices.getSubscribesService(user);
      const userPosts = await postServices.getUserPostsService(user);

      dispatch(setUserPosts(userPosts));
      dispatch(setFollowers(followers));
      dispatch(setFollowing(following));
    })();
  }, [dispatch]);

  return (
    <Layout>
      <div className="container">
        <div className="row align-items-center justify-content-center text-center">
          <div className="col-12">
            <div className="m-3">
              <div className="user-profile">
                <div className="profile-banner">
                  <img
                    src={require("../../helpers/images/profile-cover.jpg")}
                    alt=""
                    className="w-100 h-100"
                  />
                </div>
                <div className="profile-content align-items-center justify-content-center">
                  <div className="avatar-parent">
                    <div className="profile-avatar">
                      <img
                        src={"http://localhost:39524/" + currentUser?.imageUrl}
                        alt=""
                      />
                    </div>
                    <div className="profile-upload">
                      <label htmlFor="photo">
                        <div className="photo-icon">
                          <AiOutlinePlus />
                        </div>
                      </label>
                      <input
                        type="file"
                        accept="images/*"
                        id="photo"
                        className="custom-file-upload d-none"
                        name="ImageFiles"
                        multiple
                      />
                    </div>
                  </div>
                  <div className="profile-info align-items-center justify-content-center">
                    <h1 className="username text-capitalize">
                      {currentUser.fullName}
                    </h1>
                    <span className="text-capitalize">
                      Status | {currentUser.status}
                    </span>
                  </div>
                </div>
              </div>
              <UserTabs />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
