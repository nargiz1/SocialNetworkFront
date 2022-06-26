import React from "react";
import "../Post/Post.css";
import { AiOutlineHeart, AiOutlineLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { BsShare, BsEmojiLaughing } from "react-icons/bs";
import { GoKebabHorizontal } from "react-icons/go";
import { MdOutlinePhotoSizeSelectActual } from "react-icons/md";
import { IoMdLink } from "react-icons/io";
import { useSelector } from "react-redux";


function Post() {
  const data=useSelector((state) => state.post.posts);
  console.log("Post js data",data);
  
  return (
    <div className="post mt-4 mb-4">
      <div className="post-top d-flex align-items-center justify-content-between p-3">
        <div className="d-flex">
          <a href="#">
            <img
              src={require("../../../../helpers/images/avatar.jpg")}
              alt="profile-photo"
              className="post-profile"
            />
          </a>
          <div className="ms-3">
            <a href="#" className="username">
              Ayshan Gambarova
            </a>
            <div className="d-flex align-items-center">
              <span className="post-date">5Hrs</span>
              <i></i>
            </div>
          </div>
        </div>
        <a
          href="#"
          className="text-decoration-none fs-4 text-secondary"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <GoKebabHorizontal />
        </a>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="#">
              Edit post
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Disable comments
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Delete
            </a>
          </li>
        </ul>
      </div>
      <div className="post-body">
        <img
          src={require("../../../../helpers/images/avatar1.jpg")}
          alt="post"
          className="w-100"
        />
        <div className="post-body-bottom p-3">
          <div className="d-flex justify-content-between mb-3">
            <div className="d-flex">
              <a
                href="#"
                className="d-flex align-items-center me-4 text-decoration-none"
              >
                <div className="post-interaction">
                  <div>
                    <AiOutlineLike style={{ fontSize: "21px" }} />
                  </div>
                </div>
                <span> Like</span>
              </a>
              <a
                href="#"
                className="d-flex align-items-center text-decoration-none"
              >
                <div className="post-interaction">
                  <div>
                    <FaRegComment />
                  </div>
                </div>
                <span> Comment</span>
              </a>
            </div>
            <a
              href="#"
              className="d-flex align-items-center text-decoration-none"
            >
              <div className="post-interaction">
                <div>
                  <BsShare />
                </div>
              </div>
              <span> Share</span>
            </a>
          </div>
          <div className="d-flex align-items-center">
            <div className="avatar-group d-flex ps-2">
              <div className="avatar-item">
                <img
                  src={require("../../../../helpers/images/avatar1.jpg")}
                  alt=""
                  className="w-100"
                />
              </div>
              <div className="avatar-item">
                <img
                  src={require("../../../../helpers/images/avatar2.jpg")}
                  alt=""
                  className="w-100"
                />
              </div>
            </div>
            <div className="ms-2">
              Liked <strong>Johnson</strong> and <strong>209 other</strong>
            </div>
          </div>
        </div>
      </div>
      <div className="post-bottom p-3">
        <div className="comment-area pe-5">
          <div className="d-flex mb-3">
            <a href="#">
              <img
                src={require("../../../../helpers/images/avatar3.jpg")}
                alt="profile-photo"
                className="post-profile"
              />
            </a>
            <div className="comment-content ms-3">
              <div className="comment">
                <p>sed diam nonummy nibh euismod tincidunt </p>
              </div>
              <div className="d-flex comment-options align-items-center">
                <div className="d-flex me-2">
                  <a href="#" className="text-decoration-none text-danger">
                    <AiOutlineHeart />
                  </a>
                </div>
                <div className="d-flex me-2">
                  <a
                    href="#"
                    className="text-decoration-none text-secondary comment-replay"
                  >
                    Replay
                  </a>
                </div>
                <span className="comment-date text-secondary comment-date">
                  3d
                </span>
              </div>
            </div>
          </div>
          <div className="d-flex mb-3">
            <a href="#">
              <img
                src={require("../../../../helpers/images/avatar2.jpg")}
                alt="profile-photo"
                className="post-profile"
              />
            </a>
            <div className="comment-content ms-3">
              <div className="comment">
                <p>
                  sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                  magna aliquam erat volutpat. David !
                </p>
              </div>
              <div className="d-flex comment-options align-items-center">
                <div className="d-flex me-2">
                  <a href="#" className="text-decoration-none text-danger">
                    <AiOutlineHeart />
                  </a>
                </div>
                <div className="d-flex me-2">
                  <a
                    href="#"
                    className="text-decoration-none text-secondary comment-replay"
                  >
                    Replay
                  </a>
                </div>
                <span className="comment-date text-secondary comment-date">
                  5d
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-3">
          <a href="#" className="more-comment">
            Viev 8 more comments
          </a>
        </div>
        <div className="post-input position-relative">
          <input
            type="text"
            className="w-100"
            placeholder="Add Your Comment.."
          />
          <div className="position-absolute post-input-icons">
            <i className="me-2 text-secondary">
              <BsEmojiLaughing />
            </i>
            <i className="me-2 text-secondary">
              <MdOutlinePhotoSizeSelectActual />
            </i>
            <i className="text-secondary">
              <IoMdLink />
            </i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
