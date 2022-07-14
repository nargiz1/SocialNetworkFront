import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Layout from "../../components/Layout";
import UserTabs from "../UserPage/UserTabs/index";
import * as postServices from "../../services/PostService";
import * as userServices from "../../services/UserService";
import { setUserPosts } from "../../redux/Post/PostSlice";
import {  setUserById } from "../../redux/User/UserSlice";
import "../UserPage/index.css";
import { AiOutlinePlus } from "react-icons/ai";

const Index = () => {
  const dispatch = useDispatch();
  const {userId}= useParams();

  useEffect(() => {
    (async function () {
      const user= await userServices.getUserByIdService(userId);
      const userPosts = await postServices.getUserPostsService(user);
      dispatch(setUserById(user));
      dispatch(setUserPosts(userPosts));
    })();
  }, [userId, dispatch]);

  const user = useSelector((state) => state.user.userById);
 

  const handleProfileChange = async (name, value) => {
    console.log("profile");
    const formData = new FormData();
    Array.from(value).forEach((ImageFile) =>
      formData.append("ImageFile", ImageFile)
    );
    await userServices.profilePicService(formData);
    const userById = await userServices.getUserByIdService(userId);
    dispatch(setUserById(userById));
  };
  const handleCoverChange = async (name, value) => {
    console.log("cover");
    const formData = new FormData();
    Array.from(value).forEach((CoverPicFile) =>
      formData.append("CoverPicFile", CoverPicFile)
    );
    await userServices.coverPicService(formData);
    const userById = await userServices.getUserByIdService(userId);
    dispatch(setUserById(userById));
  };
  
  return (
    <Layout>
        <div className="container">
            <div className="row align-items-center justify-content-center text-center">
              <div className="col-12">
                <div className="m-3">
                  <div className="user-profile">
                    <div className="profile-banner">
                      {user?.coverPicUrl === null ? (
                        <img
                          src={require("../../helpers/images/cover.png")}
                          alt="cover-img"
                          className="w-100 h-100"
                        />
                      ) : (
                        <img
                          src={"http://localhost:39524/" + user?.coverPicUrl}
                          alt="cover-img"
                          className="w-100 h-100"
                        />
                      )}

                      <div className="cover-upload">
                        <label htmlFor="cover-photo">
                          <div className="user-profile-upload">
                            <AiOutlinePlus />
                          </div>
                        </label>
                        <input
                          type="file"
                          accept="images/*"
                          id="cover-photo"
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
                          {user?.imageUrl === null ? (
                            <img
                              src={require("../../helpers/images/avatar.jpg")}
                              alt="user-img"
                            />
                          ) : (
                            <img
                              src={"http://localhost:39524/" + user?.imageUrl}
                              alt="user-img"
                            />
                          )}
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
                            onChange={(e) =>{
                              e.stopPropagation();
                              handleProfileChange("ImageFile", e.target.files)
                            }}
                          />
                        </div>
                      </div>
                      <div className="profile-info align-items-center justify-content-center">
                        <h1 className="username text-capitalize">
                          {user?.fullName}
                        </h1>
                        <span className="text-capitalize">
                          Status | {user?.status}
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
