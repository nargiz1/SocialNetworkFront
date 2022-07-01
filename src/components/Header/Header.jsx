import React from "react";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { MdShoppingCart } from "react-icons/md";
import { RiNotification2Fill } from "react-icons/ri";
import { BiMessageDetail } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";
import {HiOutlineMenuAlt1} from "react-icons/hi";

import Logo from "../../helpers/images/logo.png";
import "../Header/Header.css";

function Header({ isOpen, setIsOpen, showIcon = true }) {

  const handleOpenSidebar = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="header navbar navbar-expand-lg bg-white">
        <div className="container-fluid">
          <a className="navbar-brand">
            <div className="header-left">
              {showIcon && <i className="header-bar"><HiOutlineMenuAlt1 onClick={handleOpenSidebar}/></i>}
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
                <input type="text" placeholder="Search for Friends..." />
              </div>
            </div>
            <div className="header-right d-flex">
              <a href="#">
                <div className="circle">3</div>
                <MdShoppingCart />
              </a>
              <a href="#">
                <div className="circle">1</div>
                <RiNotification2Fill />
              </a>
              <a href="#">
                <div className="circle">5</div>
                <BiMessageDetail />
              </a>
              <Link to={"/user"}>
                <div className="user-info">
                  <FaUserAlt />
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
