import React from "react";
import "./CreatePost.css";
import { FaUserAlt } from "react-icons/fa";
import { HiOutlinePhotograph, HiOutlineLocationMarker } from "react-icons/hi";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { FaRegSmile } from "react-icons/fa";
import { AiOutlineUserAdd } from "react-icons/ai";

function CreatePost() {
  return (
    <div className="createPost p-3">
      <div className="createPost-top">
        <a href="#">
          <div className="user-info">
            <FaUserAlt />
          </div>
        </a>
        <input
          className="createPost-input w-100"
          placeholder="What is your mind?"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        />
        <form >
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
                <h5 className="modal-title text-center" id="exampleModalLabel">
                  Create Post
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="d-flex align-items-center">
                  <a href="#">
                    <div className="user-info">
                      <FaUserAlt />
                    </div>
                  </a>
                  <input
                    type="text"
                    placeholder="What's Your Mind?"
                    className="w-100 bg-white"
                  />
                </div>
                <div className="d-flex align-items-center justify-content-between add-post">
                  <div>Add to your post</div>
                  {/* <div>
                  <label htmlFor="photo">
                      <i className="photo-icon">
                        <HiOutlinePhotograph />
                      </i>
                    </label>
                    <input
                      type="file"
                      id="photo"
                      className="custom-file-upload"
                    />
                  </div> */}
                  <div className="d-flex">
                    <div>
                      <a href="#">
                        <div className="photo-icon">
                          <HiOutlinePhotograph />
                        </div>
                      </a>
                    </div>
                    <div className="ms-2">
                      <a href="#">
                        <div className="video-icon">
                          <MdOutlineVideoLibrary />
                        </div>
                      </a>
                    </div>
                    <div className="ms-2">
                      <a href="#">
                        <div className="location-icon">
                          <HiOutlineLocationMarker />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary">
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>
        </form>
      </div>
      <div className="createPost-bottom mt-3 d-flex">
        <div className="createPost-option">
          <a href="#">
            <div className="photo-icon">
              <HiOutlinePhotograph />
            </div>
          </a>
          <h3>Photo/Video</h3>
        </div>
        <div className="createPost-option">
          <a href="#">
            <div className="add-friend">
              <AiOutlineUserAdd />
            </div>
          </a>
          <h3>Tag Friend</h3>
        </div>
        <div className="createPost-option">
          <a href="#">
            <div className="smile-icon">
              <FaRegSmile />
            </div>
          </a>
          <h3>Fealing/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
