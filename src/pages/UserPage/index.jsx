import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Layout from "../../components/Layout";
import UserTabs from "../UserPage/UserTabs/index";
import * as postServices from "../../services/PostService";
import * as authServices from "../../services/AuthService";
import * as followServices from "../../services/FollowService";
import  { setCurrentUser } from '../../redux/Auth/AuthSlice';
import  { setUserPosts } from '../../redux/Post/PostSlice';
import  { setFollowers } from '../../redux/Follow/FollowSlice';
import "../UserPage/index.css";



const Index = () => {
  const dispatch= useDispatch();
  
  const data = useSelector((state) => state.auth.currentUser);
  console.log("user dispatch data",data);

  

  useEffect(() => {
    (async function() {
      const user=await authServices.getUserService();
      const followers=await followServices.getFollowersService(user);
      const userPosts = await postServices.getUserPostsService(user);
      dispatch(setCurrentUser(user));
      dispatch(setUserPosts(userPosts.$values));
      dispatch(setFollowers(followers.$values));
    })();
  }, [dispatch])
  
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
                      src={require("../../helpers/images/avatar.jpg")}
                      alt=""
                    />
                  </div>
                 </div>
                  <div className="profile-info align-items-center justify-content-center">
                    <h1 className="username text-capitalize">{data.fullName}</h1>
                    <span className="text-capitalize">Status | {data.status}</span>
        
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
