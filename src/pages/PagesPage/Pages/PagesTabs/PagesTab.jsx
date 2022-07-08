import * as React from "react";
import "./index.css";
import { BsFillPlusCircleFill } from "react-icons/bs";

import Carousel from "../../../../components/Carousel/Carousel";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import * as followServices from "../../../../services/FollowService";

export default function PagesTabs() {
  const users = useSelector((state) => state.user.users);
  const currentUser = useSelector((state) => state.user.currentUser);
  console.log("users pages tabs", users);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleSubmit = async (id,e) => {
    const data=await followServices.followService(id);

  };

  return (
    <>
      {/*<div className="d-flex justify-content-between align-items-center">
        <a href="#" className="add-button">
          <BsFillPlusCircleFill />
        </a>
      </div>
     <Tabs
        activeTab={value}
        handleTabChange={handleChange}
        tabs={["Suggestions", "Newest", "My pages"]}
      >
        <TabPanel value={value} index={0}>
          <Carousel mdViewCount={3}>
            <div className="pages-card">
              <img
                src={require("../../../../helpers/images/avatar4.jpg")}
                className="card-img-top"
                alt="slidePhoto"
              />
              <div className="pages-card-body">
                <h5 className="pages-card-title">James Levis</h5>
                <p className="pages-card-text">
                  <span>212K</span> Following
                </p>
              </div>
            </div>
            <div className="pages-card">
              <img
                src={require("../../../../helpers/images/avatar4.jpg")}
                className="card-img-top"
                alt="slidePhoto"
              />
              <div className="pages-card-body">
                <h5 className="pages-card-title">James Levis</h5>
                <p className="pages-card-text">
                  <span>212K</span> Following
                </p>
              </div>
            </div>
            <div className="pages-card">
              <img
                src={require("../../../../helpers/images/avatar3.jpg")}
                className="card-img-top"
                alt="slidePhoto"
              />
              <div className="pages-card-body">
                <h5 className="pages-card-title">James Levis</h5>
                <p className="pages-card-text">
                  <span>212K</span> Following
                </p>
              </div>
            </div>
          </Carousel>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Carousel mdViewCount={3}>
            <div className="pages-card" style="width: 18rem;">
              <img
                src={require("../../../../helpers/images/avatar1.jpg")}
                className="card-img-top"
                alt="..."
              />
              <div className="pages-card-body">
                <h5 className="pages-card-title">James Levis</h5>
                <p className="pages-card-text">
                  <span>212K</span> Following
                </p>
              </div>
            </div>
            <div className="pages-card" style="width: 18rem;">
              <img
                src={require("../../../../helpers/images/avatar3.jpg")}
                className="card-img-top"
                alt="..."
              />
              <div className="pages-card-body">
                <h5 className="pages-card-title">James Levis</h5>
                <p className="pages-card-text">
                  <span>212K</span> Following
                </p>
              </div>
            </div>
          </Carousel>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Carousel mdViewCount={3}>
            <div className="pages-card" style="width: 18rem;">
              <img
                src={require("../../../../helpers/images/avatar1.jpg")}
                className="card-img-top"
                alt="..."
              />
              <div className="pages-card-body">
                <h5 className="pages-card-title">James Levis2</h5>
                <p className="pages-card-text">
                  <span>212K</span> Following2
                </p>
              </div>
            </div>
            <div className="pages-card" style="width: 18rem;">
              <img
                src={require("../../../../helpers/images/avatar3.jpg")}
                className="card-img-top"
                alt="..."
              />
              <div className="pages-card-body">
                <h5 className="pages-card-title">James Levis2</h5>
                <p className="pages-card-text">
                  <span>212K</span> Following2
                </p>
              </div>
            </div>
          </Carousel>
        </TabPanel>
      </Tabs> */}
      <div className="d-flex justify-content-between">
        <h4 className="mb-4">Pages</h4>
        <a href="#" className="text-decoration-none">
          See all
        </a>
      </div>
      <Carousel mdViewCount={3}>
        {users && users.length > 0
          ? users.map((user, index) => (
           <Link to={`user/${user.id}`} key={index} className="text-decoration-none">
              <div  className="pages-card">
                <div className="pages-card-top">
               {
                 user?.imageUrl==="Resources\\Images\\" ? (
                  <img src={require("../../../../helpers/images/avatar.jpg")}
                  className="w-100" />
                  ):(
                  <img
                    src={"http://localhost:39524/" + user?.imageUrl}
                    className="w-100"
                  />
                  )
               }
                </div>
                <div className="pages-card-body">
                  <h5 className="pages-card-title">{user.fullName}</h5>
                  <h5 className="pages-card-title text-lowercase">@{user.userName}</h5>
                  <div className="d-flex justify-content-end">
                  <button className="follow-button" onClick={()=>{handleSubmit(user.id)}}>follow</button>

                  </div>
                </div>
              </div>
              </Link>
            ))
          : null}

        
      </Carousel>
    </>
  );
}
