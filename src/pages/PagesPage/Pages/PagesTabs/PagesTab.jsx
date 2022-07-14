import React, { useEffect } from "react";
import "./index.css";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { setUsers } from "../../../../redux/User/UserSlice";
import Carousel from "../../../../components/Carousel/Carousel";
import { useDispatch, useSelector } from "react-redux";
import { setFollowing } from "../../../../redux/Follow/FollowSlice";
import { Link } from "react-router-dom";
import * as followServices from "../../../../services/FollowService";
import * as userServices from "../../../../services/UserService";

export default function PagesTabs() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);
  const currentUser = useSelector((state) => state.user.currentUser);
  const following = useSelector((state) => state.follow.following);
  const followers = useSelector((state) => state.follow.followers);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    (async function () {
      const usersData = await userServices.getUsersService();
      dispatch(setUsers(usersData));
    })();
  }, [dispatch]);

  const handleSubmit = async (id) => {
    const data = await followServices.followService(id);
    const user = await userServices.getUserService();
    const following = await followServices.getSubscribesService(user);
    dispatch(setFollowing(following));
  };
  const handleUnfollow = async (id) => {
    const data = await followServices.unFollowService(id);
    const user = await userServices.getUserService();
    const following = await followServices.getSubscribesService(user);
    dispatch(setFollowing(following));
  };

  return (
    <>
      <div className="d-flex justify-content-between">
        <h4 className="mb-4">Pages</h4>
        <a href="#" className="text-decoration-none">
          See all
        </a>
      </div>
      <Carousel mdViewCount={3}>
        {users && users.length > 0
          ? users.map((user, index) =>
              user.id !== currentUser.id ? (
                <div key={index} className="pages-card">
                  <div className="pages-card-top">
                    {user?.imageUrl === "Resources\\Images\\" ? (
                      <img
                        src={require("../../../../helpers/images/avatar.jpg")}
                        className="w-100"
                      />
                    ) : (
                      <img
                        src={"http://localhost:39524/" + user?.imageUrl}
                        className="w-100"
                      />
                    )}
                  </div>
                  <div className="pages-card-body">
                    <h5 className="pages-card-title">{user.fullName}</h5>
                    <Link
                      to={`/user/${user.id}`}
                      key={index}
                      className="text-decoration-none"
                    >
                      <h5 className="pages-card-title text-lowercase">
                        @{user.userName}
                      </h5>
                    </Link>
                    <div className="d-flex justify-content-end">
                      {Boolean(following.find((f) => f.id === user.id)) ? (
                        <button
                          className="following-button"
                          onClick={(e) => {
                            handleUnfollow(user.id);
                            // e.stopPropagation();
                          }}
                        >
                          Following
                        </button>
                      ) : (
                        <button
                          className="follow-button"
                          onClick={(e) => {
                            handleSubmit(user.id);
                            e.stopPropagation();
                          }}
                        >
                          Follow
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ) : null
            )
          : null}
      </Carousel>
    </>
  );
}
