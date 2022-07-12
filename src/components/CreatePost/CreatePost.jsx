import React, { useState } from "react";
import * as postServices from "../../services/PostService";
import { FaUserAlt } from "react-icons/fa";
import { HiOutlinePhotograph, HiOutlineLocationMarker } from "react-icons/hi";
import { MdVideoCall } from "react-icons/md";
import "./CreatePost.css";

// Additional Libraries
import moment from "moment";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const CreatePost = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const [collapseModal,setCollapseModal]=useState(false);
  const [createPost, setCreatePost] = useState({
    Text: "",
    IsPrivate: false,
    Location: "",
    ImageFiles: [],
    VideoFiles: [],
    PublicationTime: "",
  });
  const handleChange = (name, value) => {
    setCreatePost({ ...createPost, [name]: value });
  };
  const handleSubmit = async (e) => {
    setCollapseModal(true);
    e.preventDefault();
    const formData = new FormData();
    const date = new Date();
    createPost.PublicationTime = moment(date).format();
    formData.append("Text", createPost.Text);
    formData.append("IsPrivate", createPost.IsPrivate);
    formData.append("Location", createPost.Location);
    Array.from(createPost.ImageFiles).forEach((ImageFile)=>
      formData.append("ImageFiles",ImageFile)
    );
    Array.from(createPost.VideoFiles).forEach((VideoFile)=>
      formData.append("VideoFiles",VideoFile)
    );
    formData.append("PublicationTime", createPost.PublicationTime);

    console.log(formData);

       await postServices.createPostService(formData);
  };

  return (
    <>
      <div className="createPost p-3">
        <div className="createPost-top">
        
          <Link to={"/user"}>
              <div>
                <img
                 src={"http://localhost:39524/"+currentUser?.imageUrl}
                  alt="profile-photo"
                  className="post-profile"

                />
            </div>
              </Link>
          
          <input
            className="createPost-input w-100"
            placeholder="Crate your post..."
            data-bs-toggle="modal"
            data-bs-target="#exampleModal1"
          />
{
  collapseModal?(null):(
<form>
            <div
              className="modal fade create"
              id="exampleModal1"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                
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
                        name="Text"
                        onChange={(e) =>
                          handleChange(e.target.name, e.target.value)
                        }
                      />
                    </div>

                    <div className="add-post">
                      <div className="text-center mb-3">Add to your post</div>
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex">
                           <div className="me-2">
                           <label htmlFor="photo">
                              <div className="photo-icon">
                                <HiOutlinePhotograph />
                              </div>
                            </label>
                            <input
                              type="file"
                              accept="images/*"
                              id="photo"
                              className="custom-file-upload d-none"
                              name="ImageFiles"
                              multiple
                              onChange={(e) =>
                                handleChange(e.target.name, e.target.files)
                              }
                            />
                          </div>
                          <div className="me-2">
                            <label htmlFor="video">
                              <div className="video-icon">
                                <MdVideoCall />
                              </div>
                            </label>
                            <input
                              type="file"
                              id="video"
                             
                              className="custom-file-upload d-none"
                              name="VideoFiles"
                              multiple
                              onChange={(e) =>
                                handleChange(e.target.name, e.target.files)
                              }
                            />
                          </div>
                          <div className="d-flex">
                            {/* <label htmlFor="location">
                              <div className="location-icon">
                                <HiOutlineLocationMarker />
                              </div>
                            </label> */}
                            <input
                              type="text"
                              id="location"
                              className="custom-file-upload"
                              placeholder="Location..."
                              name="Location"
                              onChange={(e) =>
                                handleChange(e.target.name, e.target.value)
                              }
                            />
                          </div>
                        </div>
                        <div>
                          <label htmlFor="IsPrivate"> Private Post</label>
                          <input
                            type="checkbox"
                            id="IsPrivate"
                            name="IsPrivate"
                            onChange={(e) =>
                              handleChange(e.target.name, e.target.checked)
                            }
                          />
                        </div>

                        
                      </div>

                      <div>
                        {/* <div className="mb-3">
                          <input
                            type="file"
                            name="ImageFiles"
                            style={{ width: "90%" }}
                            multiple
                            onChange={(e) =>
                              handleChange(e.target.name, e.target.files)
                            }
                          />
                        </div> */}
                        {/* <div className="mb-3">
                          <input
                            type="file"
                            name="VideoFiles"
                            style={{ width: "90%" }}
                            multiple
                            onChange={(e) =>
                              handleChange(e.target.name, e.target.files)
                            }
                          />
                        </div> */}
                        {/* <div className="mb-3">
                          <input
                            type="text"
                            name="Location"
                            style={{ width: "90%" }}
                            placeholder=" Enter Location"
                            onChange={(e) =>
                              handleChange(e.target.name, e.target.value)
                            }
                          />
                        </div> */}
                      
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      onClick={handleSubmit}
                    >
                      Share
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
  )
}
          
        </div>

        {/* <div className="createPost-bottom mt-3 d-flex">
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
        </div> */}
      </div>
    </>
  );
};

export default CreatePost;
