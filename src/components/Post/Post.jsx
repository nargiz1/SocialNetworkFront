import React,{useState} from "react";
import { AiOutlineHeart, AiOutlineLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { BsShare, BsEmojiLaughing } from "react-icons/bs";
import { GoKebabHorizontal } from "react-icons/go";
import { MdOutlinePhotoSizeSelectActual } from "react-icons/md";
import { IoMdLink } from "react-icons/io";
import * as postServices from "../../services/PostService";
import "./Post.css";

// Additional Libraries
import Moment from 'react-moment';

const Post = ({ post }) => {
  const[showComment,setShowComment]=useState(true);

  const deletePost =(id)=>{
    const data=postServices.deletePostService(id);

  };
 

  return (
    <>
      <div className="post mt-4 mb-4">

        <div className="post-top d-flex align-items-center justify-content-between p-3">
          <div className="d-flex align-items-center">

            <div>
              <a href="#">
                <img
                  src={require("../../helpers/images/avatar.jpg")}
                  alt="profile-photo"
                  className="post-profile"
                />
              </a>
            </div>

            <div className="ms-3 text-start">
              <a href="#" className="username text-capitalize">
                {post?.user?.userName || "user"}
              </a>
              <div className="d-flex align-items-center">
                <span className="post-date text-capitalize">
                  {post.location}
                </span>
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

          <ul className="dropdown-menu post-events">
            <li>
             
                Edit post
            
            </li>

            {
              showComment?(
               <li onClick={(e)=> setShowComment(!showComment)}>
                 Disable comments
               </li>
              ):(
                <li onClick={(e)=> setShowComment(!showComment)}>
                Unable comments
               </li>
              )
            }
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li onClick={()=>{
              console.log(post.id)
deletePost(post.id)
              }}>
             
                Delete
             
            </li>
          </ul>

        </div>

        <div className="post-body">
          {post?.images && post.images?.length>0 ? (
            post.images.map((img,index)=>(
              <img
                key={index}
                 src={"http://localhost:39524/"+img.imageUrl}
                alt="post"
                className="w-100"
              />

            ))
          ) : post?.text !== null ? (
            <p className="ps-3 pe-3 text-start">{post?.text}</p>
          ) : post?.videos?.length > 0 ? (
            <video controls>
              <source
                src={require(`../../helpers/videos/${post?.videos}`)}
                type="video/mp4"
              />
            </video>
          ) : null}

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
                {
                  showComment?(
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

                  ):null
                }
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
            {post.likes?.length > 0 ? (
              <>
                <div className="d-flex align-items-center">
                  <div className="avatar-group d-flex ps-2">
                    <div className="avatar-item">
                      <img
                        src={require("../../helpers/images/avatar1.jpg")}
                        alt=""
                        className="w-100"
                      />
                    </div>
                    <div className="avatar-item">
                      <img
                        src={require("../../helpers/images/avatar2.jpg")}
                        alt=""
                        className="w-100"
                      />
                    </div>
                  </div>
                  <div className="ms-2">
                    Liked <strong>Johnson</strong> and{" "}
                    <strong>{post.likes?.length} other</strong>
                  </div>
                </div>
              </>
            ) : null}
          </div>

        </div>

        <div className="post-bottom p-3">
          {post.comments?.length > 0 ? (
            <>
              <div className="comment-area pe-5">
                <div className="d-flex mb-3">
                  <a href="#">
                    <img
                      src={require("../../helpers/images/avatar3.jpg")}
                      alt="profile-photo"
                      className="post-profile"
                    />
                  </a>

                  <div className="comment-content ms-3">
                    <div className="comment align-items-center">
                      {post.comments?.map((x) => (
                        <p key={x.$id}>{x.text}</p>
                      ))}
                    </div>
                    <div className="d-flex comment-options align-items-center">
                      <div className="d-flex me-2">
                        <a
                          href="#"
                          className="text-decoration-none text-danger"
                        >
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
              </div>
              <div className="mb-3">
                {post.comments?.length - 1 > 0 ? (
                  <a href="#" className="more-comment">
                    View {post.comments?.length - 1} more comments
                  </a>
                ) : null}
              </div>
            </>
          ) : null}

{showComment?(
          <div className="post-input position-relative">
            <input
              type="text"
              className="w-100"
              placeholder="Add a comment..."
            />
            {/* <div className="position-absolute post-input-icons">
              <i className="me-2 text-secondary">
                <BsEmojiLaughing />
              </i>
              <i className="me-2 text-secondary">
                <MdOutlinePhotoSizeSelectActual />
              </i>
              <i className="text-secondary">
                <IoMdLink />
              </i>
            </div> */}
          </div>

):<p className="m-0">Comments are off.</p>
}

          <div className="d-flex align-items-center mt-2">
            <span className="post-date">
                <Moment format="DD/MM/YYYY">
                    {post.created}
                </Moment>
            </span>
          </div>

        </div>

      </div>
    </>
  );
};

export default Post;
