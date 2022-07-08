import React, { useState } from "react";
import { Link} from "react-router-dom";
import { useSelector } from "react-redux";
import { BsSearch } from "react-icons/bs";
import { MdShoppingCart } from "react-icons/md";
import { RiNotification2Fill } from "react-icons/ri";
import { BiMessageDetail } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import  { setSearchingUserId } from '../../redux/Auth/AuthSlice';

import Logo from "../../helpers/images/logo.png";
import "../Header/Header.css";
import * as userServices from "../../services/UserService";

function Header({ isOpen, setIsOpen, showIcon = true }) {
  const currentUser = useSelector((state) => state.user.currentUser);

  const [searchUser, setSearchUser] = useState("");
  const [userData, setUserData] = useState([]);
  const [showData , setShowData] =useState(false);

  const handleOpenSidebar = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const resp = await userServices.SearchUserService(searchUser);
    setUserData(resp);
    setShowData(true);
    console.log("searching user resp",resp);
  
  };

  return (
    <>
      <nav className="header navbar navbar-expand-lg bg-white">
        <div className="container-fluid">
          <a className="navbar-brand">
            <div className="header-left">
              {showIcon && (
                <i className="header-bar">
                  <HiOutlineMenuAlt1 onClick={handleOpenSidebar} />
                </i>
              )}
              <img src={Logo} alt="Logo" />
            </div>
          </a>
          <button
            className="navbar-toggler custom-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarSupportedContent"
          >
            <div className="d-flex w-100 justify-content-center">
              <div className="header-center position-relative ">
                <i className="position-absolute">
                  <BsSearch />
                </i>

                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    placeholder="Search for Friends..."
                    onChange={(e) => setSearchUser(e.target.value)}
                  />
                </form>
                {
                  showData ?(
                <div className="search-user-data mb-4">
                  {
                     userData && userData.length>0 ?(
                        userData.map((user,index)=>(
                          <Link to={`/user/${user.id}`} key={index}>
                          <div key={index} className="search-user">
                          {user.fullName}
                          </div>
                        </Link>
                        ))
                      ) :(<div>User not found</div>)
                  }
                </div>
                  ) : null
                }
              </div>
            </div>
            <div className="header-right d-flex">
              {/* <a href="#">
                <div className="circle">3</div>
                <MdShoppingCart />
              </a> */}
              <a href="#">
                <div className="circle">1</div>
                <RiNotification2Fill />
              </a>
              <a href="#">
                <div className="circle">5</div>
                <BiMessageDetail />
              </a>
              <Link to={"/user"}>
              <div>
                <img
                 src={"http://localhost:39524/"+currentUser?.imageUrl}
                  alt="profile-photo"
                  className="post-profile"
                />
            </div>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
