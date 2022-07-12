import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { AiOutlineDelete, AiOutlineHeart, AiOutlineLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { BsShare, BsEmojiLaughing } from "react-icons/bs";
import { GoKebabHorizontal } from "react-icons/go";
import { MdOutlinePhotoSizeSelectActual } from "react-icons/md";
import { IoMdLink } from "react-icons/io";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import * as postServices from "../../services/PostService";
import * as commentServices from "../../services/CommentService";
import * as likeServices from "../../services/LikeService";
import "./Post.css";
import Moment from "react-moment";
import { Carousel } from "bootstrap";
import { setIsClickedLike, setPosts } from "../../redux/Post/PostSlice";

const Post = ({ post, likeTest, setLikeTest }) => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);
  const isClickedLike = useSelector((state) => state.post.isClickedLike);
  const [showComment, setShowComment] = useState(true);
  const [like, setLike] = useState(false);

  const [createComment, setCreateComment] = useState({
    text: "",
    postId: post.id,
    commentId: 0,
  });

  const handleChange = (name, value) => {
    setCreateComment({ ...createComment, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (createComment.text !== "" && createComment.postId !== "") {
      try {
        const resp = await commentServices.CommentPostService(createComment);
      } catch (error) {
        console.log("error: ", error);
      }
    }
  };

  const getAllPosts = async () => {
    const data = await postServices.getAllPostsService();
    dispatch(setPosts(data));
  };

  const deletePost = async (id) => {
    await postServices.deletePostService(id);
    getAllPosts();
  };
  const deleteComment = async (id) => {
    await commentServices.deleteCommentService(id);
  };

  const handleLikePost = async (e, id) => {
    e.preventDefault();

    const likeData = await likeServices.likePostService(id);

    if (likeData) {
      setLikeTest(true);
    } else {
      await likeServices.removePostLikeService(id);
      setLikeTest(false);
    }

    getAllPosts();
  };

  const isExistLikedUser = post.likes?.some(
    (elem) => elem.userId === currentUser?.id
  );

  return (
    <>
      <div className="post mt-4 mb-4">
        <div className="post-top d-flex align-items-center justify-content-between p-3">
          <div className="d-flex align-items-center">
            <Link to={"/user"}>
              <div>
                <img
                  src={"http://localhost:39524/" + currentUser?.imageUrl}
                  alt="profile-photo"
                  className="post-profile"
                />
              </div>
            </Link>

            <div className="ms-3 text-start">
              <a href="#" className="username text-lowercase">
                @{post?.user?.userName || "user"}
              </a>
              <div className="d-flex align-items-center">
                <span className="post-date text-capitalize">
                  {post.location}
                </span>
              </div>
            </div>
          </div>

          {/* <a
           href="#"
            className="text-decoration-none fs-4 text-secondary"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <GoKebabHorizontal />
          </a>

          <ul className="dropdown-menu post-events">
            <li>Edit post</li>

            {showComment ? (
              <li onClick={(e) => setShowComment(!showComment)}>
                Disable comments
              </li>
            ) : (
              <li onClick={(e) => setShowComment(!showComment)}>
                Unable comments
              </li>
            )}
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li
              onClick={() => {
                deletePost(post.id);
              }}
            >
              Delete
            </li>
          </ul> */}
          {post.userId == currentUser?.id ? (
            <button
              onClick={() => {
                deletePost(post.id);
              }}
            >
              delete
            </button>
          ) : null}
        </div>

        <div className="post-body">
           {/* <Carousel mdViewCount={1}> */}
          {post?.images && post.images?.length > 0 ? (
            post.images.map((img, index) => (
              <img
                src={"http://localhost:39524/" + img?.imageUrl}
                alt="post"
                className="w-100"
                key={index}
              />
        
            ))
          ) : post?.text !== null ? (
            <p className="ps-3 pe-3 text-start">{post?.text}</p>
          ) : post?.videos && post?.videos?.length > 0 ? (
            post.videos.map((video, index) => (
       
              <video controls key={index} className="w-100">
                <source
                  src={"http://localhost:39524/" + video.videoUrl}
                  type="video/mp4"
                  alt="video"
                />
              </video>
       
            ))
          ) : null}

          <div className="post-body-bottom p-3">
            <div className="d-flex justify-content-between mb-3">
              <div className="d-flex">
                <a
                  href="#"
                  className="d-flex align-items-center me-4 text-decoration-none"
                  onClick={(e) => handleLikePost(e, post.id)}
                >
                  <div className="post-interaction">
                    {isExistLikedUser ? (
                      <div>
                        <AiOutlineLike
                          style={{ fontSize: "21px", color: "red" }}
                        />
                      </div>
                    ) : (
                      <div>
                        <AiOutlineLike style={{ fontSize: "21px" }} />
                      </div>
                    )}
                  </div>
                </a>

                {showComment ? (
                  <a
                    href="#"
                    className="d-flex align-items-center text-decoration-none"
                  >
                    <div
                      className="post-interaction"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      <div>
                        <FaRegComment />
                      </div>
                    </div>
                    <div
                      className="modal fade"
                      id="exampleModal"
                      tabIndex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                              Modal title
                            </h5>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div className="modal-body">...</div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-secondary"
                              data-bs-dismiss="modal"
                            >
                              Close
                            </button>
                            <button type="button" className="btn btn-primary">
                              Save changes
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                ) : null}
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
     
              </a>
            </div>

            {console.log("post.likes: ", post?.likes)}

            {post.likes?.length > 0 ? (
              <div className="d-flex align-items-center like-content">
                <div className="avatar-group d-flex ps-2">
                  <div className="avatar-item">
                    <img
                      src={
                        "http://localhost:39524/" +
                        post.likes[post.likes?.length - 1]?.user?.imageUrl
                      }
                      alt={post.id}
                      className="w-100"
                    />
                  </div>
                  {
                    <div className="ms-2">
                      Liked <strong>{post.likes[0]?.user?.fullName}</strong>
                      {post.likes?.length > 1 ? (
                        <>
                          <span> and </span>
                          <strong>{post.likes?.length - 1} other</strong>
                        </>
                      ) : null}
                    </div>
                  }
                </div>
              </div>
            ) : null}
          </div>
         {/* </Carousel> */}
        </div>

        <div className="post-bottom p-3">
          {post.comments?.length > 0
            ? post.comments.map((comment, index) => (
                <div
                  key={index}
                  className="comment-area d-flex justify-content-between"
                >
                  <div className="d-flex mb-3">
                    <Link to={`/user/${comment?.user?.id}`}>
                      <div>
                        <img
                          src={
                            "http://localhost:39524/" + comment.user?.imageUrl
                          }
                          alt="profile-photo"
                          className="post-profile"
                        />
                      </div>
                    </Link>
                    <div className="comment-content ms-3">
                      <div className="comment align-items-center">
                        <p>{comment.text}</p>
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
                        <div className="d-flex me-2"></div>
                        <span className="comment-date text-secondary comment-date">
                          3d
                        </span>
                      </div>
                    </div>
                  </div>
                  {post.userId == currentUser?.id ||
                  comment.userId == currentUser?.id ? (
                    <div
                      className="comment-delete"
                      onClick={() => {
                        deleteComment(comment.id);
                      }}
                    >
                      <AiOutlineDelete />
                    </div>
                  ) : null}
                </div>
              ))
            : null}

          {
            <div className="mb-3">
              {post.comments?.length - 1 > 0 ? (
                <a href="#" className="more-comment">
                  View {post.comments?.length - 1} more comments
                </a>
              ) : null}
            </div>
          }

          {showComment ? (
            <div className="post-input position-relative">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  className="w-100"
                  name="text"
                  placeholder="Add a comment..."
                  onChange={(e) => handleChange(e.target.name, e.target.value)}
                />
              </form>
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
          ) : (
            <p className="m-0 text-start">Comments are off.</p>
          )}

          <div className="d-flex align-items-center mt-2">
            <span className="post-date">
              <Moment format="DD/MM/YYYY">{post.created}</Moment>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
