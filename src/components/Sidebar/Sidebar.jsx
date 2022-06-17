import React, { useState, useEffect } from "react";
import "../Sidebar/Sidebar.css";
import SidebarRow from "./SidebarRow/SidebarRow";
import { BsFillBagFill, BsFillCameraVideoFill } from "react-icons/bs";
import { MdGroups, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { BiMessageDetail, BiLogIn } from "react-icons/bi";
import { HiPhotograph } from "react-icons/hi";
import { AiFillHome, AiOutlineSetting } from "react-icons/ai";
import { IoDocumentOutline } from "react-icons/io5";
import { RiFlag2Fill } from "react-icons/ri";

function Sidebar({ isOpen }) {
  const [show, setShow] = useState(false);
  return (
    <div
      className={`sidebar border-end scroll-bar`}
      style={
        isOpen
          ? { width: "inherit" }
          : { maxWidth: "30%", backgroundColor: "white"}
      }
    >
      <div className="sidebar-top border-bottom pt-3">
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
          Icon={MdGroups}
          title="Groups"
          link="groups"
          color="#EF4444"
          isOpen={isOpen}
        />
        <SidebarRow
          Icon={BsFillCameraVideoFill}
          title="Videos"
          link="videos"
          color="#3B82F6"
          isOpen={isOpen}
        />

        {show ? (
          <>
            <SidebarRow
              Icon={HiPhotograph}
              title="Photos"
              link="photos"
              color="#EC4899"
              isOpen={isOpen}
            />
            <SidebarRow
              Icon={BsFillBagFill}
              title="Products"
              link="products"
              color="#10B981"
              isOpen={isOpen}
            />
            <SidebarRow
              Icon={BiMessageDetail}
              title="Messages"
              link="messages"
              color="#6366F1"
              isOpen={isOpen}
            />
          </>
        ) : null}

        {isOpen ? (
          <button
            className="more-less d-flex mb-2"
            onClick={() => setShow(!show)}
          >
            <div>
              <MdOutlineKeyboardArrowDown />
            </div>
            {show ? "See Less" : "See More"}
          </button>
        ) : null}
       
      </div>
      <div className="sidebar-middle border-bottom pt-3">
        {isOpen ? <h3 className="mb-3 ps-2">Contacts</h3> : null}

        <div className="contact-person">
          <a
            href="#"
            className="d-flex align-items-center text-dark text-decoration-none"
          >
            <div>
              <img
                className="profile-photo"
                src={require("../../helpers/images/avatar3.jpg")}
                alt="profile-photo"
              />
            </div>
            {isOpen ? 
            <h4>Fidan Ganbarli</h4> : null}
          </a>
        </div>
      </div>
      <div className="sidebar-bottom border-bottom pt-3">
        {isOpen ? <h3 className="mb-3 ps-2">Pages</h3> : null}

        <a href="#">
          <div className="d-flex justify-content-between align-items-center pages-item">
            <div className="d-flex align-items-center">
              <AiOutlineSetting />
              {isOpen ? <h4>Setting</h4> : null}
            </div>
            {isOpen ? (
              <i>
                <MdOutlineKeyboardArrowDown />
              </i>
            ) : null}
          </div>
        </a>
        <a href="#">
          <div className="d-flex justify-content-between align-items-center pages-item">
            <div className="d-flex align-items-center">
              <IoDocumentOutline />
              {isOpen ? <h4>Create content</h4> : null}
            </div>
            {isOpen ? (
              <i>
                <MdOutlineKeyboardArrowDown />
              </i>
            ) : null}
          </div>
        </a>
        <a href="#">
          <div className="d-flex justify-content-between align-items-center pages-item">
            <div className="d-flex align-items-center">
              <BiLogIn />
              {isOpen ? <h4>Authentication</h4> : null}
            </div>
            {isOpen ? (
              <i>
                <MdOutlineKeyboardArrowDown />
              </i>
            ) : null}
          </div>
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
