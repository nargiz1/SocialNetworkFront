import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { BsFillBagFill, BsFillCameraVideoFill } from "react-icons/bs";
import { MdGroups, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { BiMessageDetail, BiLogIn } from "react-icons/bi";
import { HiPhotograph } from "react-icons/hi";
import { AiFillHome, AiOutlineSetting } from "react-icons/ai";
import { RiFlag2Fill } from "react-icons/ri";
import * as authServices from "../../services/AuthService";
import * as chatService from "../../services/ChatSevice";
import { setPrivateChats } from "../../redux/Chat/PrivateChatSlice";
import * as UserService from "../../services/UserService";
import { setCurrentUser } from "../../redux/User/UserSlice";

import { setLogin } from "../../redux/Auth/AuthSlice";
import "../Sidebar/Sidebar.css";
import SidebarRow from "./SidebarRow/SidebarRow";

function Sidebar({ isOpen }) {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const logoutHandler = () => {
    authServices.LogoutService();
    sessionStorage.removeItem("token");
    dispatch(setLogin(null));
    window.location.reload();
    navigate("/");
  };
  const privateChats = useSelector((state) => state.privateChat.privateChats);
  const user = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    (async function () {
      const user = await UserService.getUserService();
      const privateChats = await chatService.getUserChats(user);
      dispatch(setCurrentUser(user));
      dispatch(setPrivateChats(privateChats));
    })();
  }, [dispatch]);

  return (
    <div
      className={`sidebar scroll-bar`}
      style={
        isOpen
          ? { width: "inherit" }
          : { maxWidth: "30%", backgroundColor: "white" }
      }
    >
      <div className={`border-end ps-2 pe-2`}>
        <div className="sidebar-top border-bottom pt-lg-3 pt-sm-0">
          <SidebarRow
            Icon={AiFillHome}
            title="Feed"
            color="#2563EB"
            isOpen={isOpen}
          />
          <SidebarRow
            Icon={RiFlag2Fill}
            title="Pages"
            link="pages"
            color="#F59E0B"
            isOpen={isOpen}
          />
          <SidebarRow
            Icon={BiMessageDetail}
            title="Messages"
            link="messages"
            color="#6366F1"
            isOpen={isOpen}
          />
          {/* <SidebarRow
          Icon={MdGroups}
          title="Groups"
          link="groups"
          color="#EF4444"
          isOpen={isOpen}
        /> */}

          {show ? (
            <>
              {/* <SidebarRow
            Icon={BsFillCameraVideoFill}
            title="Videos"
            link="videos"
            color="#3B82F6"
            isOpen={isOpen}
          /> */}
              {/* <SidebarRow
              Icon={HiPhotograph}
              title="Photos"
              link="photos"
              color="#EC4899"
              isOpen={isOpen}
            /> */}
              {/* <SidebarRow
              Icon={BsFillBagFill}
              title="Products"
              link="products"
              color="#10B981"
              isOpen={isOpen}
            /> */}
            </>
          ) : null}

          {/* {isOpen ? (
          <button
            className="more-less d-flex mb-2"
            onClick={() => setShow(!show)}
          >
            <div>
              <MdOutlineKeyboardArrowDown />
            </div>
            {show ? "See Less" : "See More"}
          </button>
        ) : null} */}
        </div>

        {/* here */}
        <div className="sidebar-middle border-bottom pt-3">
          {isOpen ? <h3 className="mb-3 ps-2">Contacts</h3> : null}
          {privateChats?.map((chat, index) => (
            <div className="contact-person" onClick={(e) => navigate(`/messages?chat=${chat.id}`)}>
              <a
                className="d-flex align-items-center text-dark text-decoration-none"
              >
                <div>
                  <img
                    className="profile-photo"
                    src={
                      "http://localhost:39524/" +
                      (chat.userTwo.userName == user.userName
                        ? chat.userOne.imageUrl
                        : chat.userTwo.imageUrl)
                    }
                    alt="profile-photo"
                  />
                </div>
                {isOpen ? (
                  chat.userTwo.userName == user.userName ? (
                    <h4>{chat.userOne.fullName}</h4>
                  ) : (
                    <h4>{chat.userTwo.fullName}</h4>
                  )
                ) : null}
              </a>
            </div>
          ))}
        </div>
        {/* here */}
        <div className="sidebar-bottom border-bottom pt-3">
          {isOpen ? <h3 className="mb-3 ps-2">Pages</h3> : null}

          <div className="d-flex justify-content-between align-items-center pages-item">
            <Link to="/setting">
              <div className="d-flex align-items-center">
                <AiOutlineSetting />
                {isOpen ? <h4>Setting</h4> : null}
              </div>
            </Link>
          </div>
          <div className="d-flex justify-content-between align-items-center pages-item">
            <Link to="/login">
              <div
                onClick={(e) => logoutHandler()}
                className="d-flex align-items-center"
              >
                <BiLogIn />
                {isOpen ? <h4>Logout</h4> : null}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
