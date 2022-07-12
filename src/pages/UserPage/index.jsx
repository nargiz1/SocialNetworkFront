import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Layout from "../../components/Layout";
import UserTabs from "../UserPage/UserTabs/index";
import * as postServices from "../../services/PostService";
import * as userServices from "../../services/UserService";

import { setUserPosts } from "../../redux/Post/PostSlice";
import { setCurrentUser } from "../../redux/User/UserSlice";

import "../UserPage/index.css";
import { useParams } from "react-router-dom";
import { HiOutlinePhotograph } from "react-icons/hi";
import { AiOutlinePlus } from "react-icons/ai";
import { Co2Sharp } from "@mui/icons-material";

const Index = () => {
  const dispatch = useDispatch();
  let userId = useParams();
  const currentUser = useSelector((state) => state.user.currentUser);
  const users = useSelector((state) => state.user.users);
  console.log("users", users);

  const handleProfileChange = async (name, value) => {
    console.log("name",name);
    const formData = new FormData();
    Array.from(value).forEach((ImageFile) =>
      formData.append("ImageFile", ImageFile)
    );
     await userServices.profilePicService(formData);
    const currentUser = await userServices.getUserService();
    dispatch(setCurrentUser(currentUser));
    
  };
  const handleCoverChange = async (name, value) => {
    const formData = new FormData();
    Array.from(value).forEach((CoverPicFile) =>
      formData.append("CoverPicFile", CoverPicFile)
    );
     await userServices.coverPicService(formData);
    const currentUser = await userServices.getUserService();
    dispatch(setCurrentUser(currentUser));
  };

  useEffect(() => {
    console.log("Params", userId);
  }, [userId]);

  useEffect(() => {
    (async function () {
      const user = await userServices.getUserService();
      const userPosts = await postServices.getUserPostsService(user);
      dispatch(setUserPosts(userPosts));
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
                     src={"http://localhost:39524/" + currentUser?.coverPicUrl}
                    alt=""
                    className="w-100 h-100"
                  />
                   <div className="cover-upload">
                    <label htmlFor="photo">
                      <div className="user-profile-upload">
                        <AiOutlinePlus />
                      </div>
                    </label>
                    <input
                      type="file"
                      accept="images/*"
                      id="photo"
                      className="custom-file-upload d-none"
                      name="CoverPicFile"
                      onChange={(e) =>
                        handleCoverChange("CoverPicFile", e.target.files)
                      }
                    />
                  </div> 
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
                        <div className="user-profile-upload">
                          <AiOutlinePlus />
                        </div>
                      </label>
                      <input
                        type="file"
                        accept="images/*"
                        id="photo"
                        className="custom-file-upload d-none"
                        name="ImageFile"
                        onChange={(e) =>
                          handleProfileChange("ImageFile", e.target.files)
                        }
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
