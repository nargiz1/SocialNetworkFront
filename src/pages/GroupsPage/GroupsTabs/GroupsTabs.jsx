import * as React from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import Tabs from "../../../components/Tabs/Tabs";
import TabPanel from "../../../components/Tabs/TabPanel";
import Carousel from "../../../components/Carousel/Carousel";
import "../../GroupsPage/index.css";

export default function GroupTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h3>Groups</h3>
        <a href="#" className="add-button">
          <BsFillPlusCircleFill />
        </a>
      </div>
      <Tabs
        activeTab={value}
        handleTabChange={handleChange}
        tabs={["Suggestions", "Newest", "My groups"]}
      >
        <TabPanel value={value} index={0}>
          <Carousel mdViewCount={4}>
            <div className="group-card card">
              <img
                src={require("../../../helpers/images/group-cover-1.jpg")}
                className="card-img-top"
                alt="slidePhoto"
              />
              <div className="card-body">
                <a className="group-card-title">Graphic Design</a>
                <div className="card-text">
                  <span>212K Members</span> <span>21 Post A Day</span>
                </div>
                <div className="card-followers d-flex">
                  <div className="avatar-group d-flex">
                    <div className="avatar-item">
                      <img
                        src={require("../../../helpers/images/avatar1.jpg")}
                        alt=""
                        className="w-100"
                      />
                    </div>
                    <div className="avatar-item">
                      <img
                        src={require("../../../helpers/images/avatar2.jpg")}
                        alt=""
                        className="w-100"
                      />
                    </div>
                  </div>
                  <p className="ms-2">
                    <strong>Johson</strong> and 5 friend are members
                  </p>
                </div>
                <div className="d-flex justify-content-between">
                  <a href="#" className="first-button">
                    Join
                  </a>
                  <a href="#" className="second-button">
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="group-card card">
              <img
                src={require("../../../helpers/images/group-cover-1.jpg")}
                className="card-img-top"
                alt="slidePhoto"
              />
              <div className="card-body">
                <a className="group-card-title">Graphic Design</a>
                <div className="card-text">
                  <span>212K Members</span> <span>21 Post A Day</span>
                </div>
                <div className="card-followers d-flex">
                  <div className="avatar-group d-flex">
                    <div className="avatar-item">
                      <img
                        src={require("../../../helpers/images/avatar1.jpg")}
                        alt=""
                        className="w-100"
                      />
                    </div>
                    <div className="avatar-item">
                      <img
                        src={require("../../../helpers/images/avatar2.jpg")}
                        alt=""
                        className="w-100"
                      />
                    </div>
                  </div>
                  <p className="ms-2">
                    <strong>Johson</strong> and 5 friend are members
                  </p>
                </div>
                <div className="d-flex justify-content-between">
                  <a href="#" className="first-button">
                    Join
                  </a>
                  <a href="#" className="second-button">
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="group-card card">
              <img
                src={require("../../../helpers/images/group-cover-1.jpg")}
                className="card-img-top"
                alt="slidePhoto"
              />
              <div className="card-body">
                <a className="group-card-title">Graphic Design</a>
                <div className="card-text">
                  <span>212K Members</span> <span>21 Post A Day</span>
                </div>
                <div className="card-followers d-flex">
                  <div className="avatar-group d-flex">
                    <div className="avatar-item">
                      <img
                        src={require("../../../helpers/images/avatar1.jpg")}
                        alt=""
                        className="w-100"
                      />
                    </div>
                    <div className="avatar-item">
                      <img
                        src={require("../../../helpers/images/avatar2.jpg")}
                        alt=""
                        className="w-100"
                      />
                    </div>
                  </div>
                  <p className="ms-2">
                    <strong>Johson</strong> and 5 friend are members
                  </p>
                </div>
                <div className="d-flex justify-content-between">
                  <a href="#" className="first-button">
                    Join
                  </a>
                  <a href="#" className="second-button">
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="group-card card">
              <img
                src={require("../../../helpers/images/group-cover-1.jpg")}
                className="card-img-top"
                alt="slidePhoto"
              />
              <div className="card-body">
                <a className="group-card-title">Graphic Design</a>
                <div className="card-text">
                  <span>212K Members</span> <span>21 Post A Day</span>
                </div>
                <div className="card-followers d-flex">
                  <div className="avatar-group d-flex">
                    <div className="avatar-item">
                      <img
                        src={require("../../../helpers/images/avatar1.jpg")}
                        alt=""
                        className="w-100"
                      />
                    </div>
                    <div className="avatar-item">
                      <img
                        src={require("../../../helpers/images/avatar2.jpg")}
                        alt=""
                        className="w-100"
                      />
                    </div>
                  </div>
                  <p className="ms-2">
                    <strong>Johson</strong> and 5 friend are members
                  </p>
                </div>
                <div className="d-flex justify-content-between">
                  <a href="#" className="first-button">
                    Join
                  </a>
                  <a href="#" className="second-button">
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="group-card card">
              <img
                src={require("../../../helpers/images/group-cover-1.jpg")}
                className="card-img-top"
                alt="slidePhoto"
              />
              <div className="card-body">
                <a className="group-card-title">Graphic Design</a>
                <div className="card-text">
                  <span>212K Members</span> <span>21 Post A Day</span>
                </div>
                <div className="card-followers d-flex">
                  <div className="avatar-group d-flex">
                    <div className="avatar-item">
                      <img
                        src={require("../../../helpers/images/avatar1.jpg")}
                        alt=""
                        className="w-100"
                      />
                    </div>
                    <div className="avatar-item">
                      <img
                        src={require("../../../helpers/images/avatar2.jpg")}
                        alt=""
                        className="w-100"
                      />
                    </div>
                  </div>
                  <p className="ms-2">
                    <strong>Johson</strong> and 5 friend are members
                  </p>
                </div>
                <div className="d-flex justify-content-between">
                  <a href="#" className="first-button">
                    Join
                  </a>
                  <a href="#" className="second-button">
                    View
                  </a>
                </div>
              </div>
            </div>
          </Carousel>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div className="group-card card">
            <img
              src={require("../../../helpers/images/group-cover-2.jpg")}
              className="card-img-top"
              alt="slidePhoto"
            />
            <div className="card-body">
              <a className="group-card-title">Graphic Design</a>
              <div className="card-text">
                <span>212K Members</span> <span>21 Post A Day</span>
              </div>
              <div className="card-followers d-flex">
                <div className="avatar-group d-flex">
                  <div className="avatar-item">
                    <img
                      src={require("../../../helpers/images/avatar1.jpg")}
                      alt=""
                      className="w-100"
                    />
                  </div>
                  <div className="avatar-item">
                    <img
                      src={require("../../../helpers/images/avatar2.jpg")}
                      alt=""
                      className="w-100"
                    />
                  </div>
                </div>
                <p className="ms-2">
                  <strong>Johson</strong> and 5 friend are members
                </p>
              </div>
              <div className="d-flex justify-content-between">
                <a href="#" className="first-button">
                  Join
                </a>
                <a href="#" className="second-button">
                  View
                </a>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={2}>
          Group3
        </TabPanel>
      </Tabs>

      <h4>Categories</h4>
      <div className="d-flex justify-content-between align-items-center pe-2 border-bottom mb-3">
        <p className="info">Find a group by browsing top categories.</p>
        <a href="#" className="text-decoration-none">
          See all
        </a>
      </div>
      <Carousel mdViewCount={5}>
        <div className="category-card position-relative">
          <img
            className="w-100"
            src={require("../../../helpers/images/business.jpg")}
            alt="categoryImage"
          />
          <h5 className="category-group-card-title text-light">Business</h5>
        </div>
        <div className="category-card position-relative">
          <img
            className="w-100"
            src={require("../../../helpers/images/business.jpg")}
            alt="categoryImage"
          />
          <h5 className="category-group-card-title text-light">Business</h5>
        </div>
        <div className="category-card position-relative">
          <img
            className="w-100"
            src={require("../../../helpers/images/business.jpg")}
            alt="categoryImage"
          />
          <h5 className="category-group-card-title text-light">Business</h5>
        </div>
        <div className="category-card position-relative">
          <img
            className="w-100"
            src={require("../../../helpers/images/business.jpg")}
            alt="categoryImage"
          />
          <h5 className="category-group-card-title text-light">Business</h5>
        </div>
        <div className="category-card position-relative">
          <img
            className="w-100"
            src={require("../../../helpers/images/business.jpg")}
            alt="categoryImage"
          />
          <h5 className="category-group-card-title text-light">Business</h5>
        </div>
      </Carousel>

      <h4>Your Groups</h4>
      <div className="row">
        <div className="col-md-9">
          <Tabs
            activeTab={value}
            handleTabChange={handleChange}
            tabs={[
              "All Groups",
              "Recently added",
              "Family",
              "University",
              "more",
            ]}
          >
            <TabPanel value={value} index={0}>
              <div className="row">
                <div className="col-md-6">
                  <div className="d-flex justify-content-between align-items-center your-groups rounded overflow-hidden">
                    <div className="d-flex">
                      <div className="your-groups-img me-3 align-items-center">
                        <img
                          className="w-100"
                          src={require("../../../helpers/images/group-4.jpg")}
                          alt="group-4"
                        />
                      </div>
                      <div>
                        <a className="group-card-title d-block">Graphic Design</a>
                        <span>212K Members</span>
                      </div>
                    </div>
                    <div>
                      <a href="#" className="second-button fw-bold">
                        Join
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex justify-content-between align-items-center your-groups pe-md-4 rounded overflow-hidden">
                    <div className="d-flex align-items-center">
                      <div className="your-groups-img me-3">
                        <img
                          className="w-100"
                          src={require("../../../helpers/images/group-4.jpg")}
                          alt="group-4"
                        />
                      </div>
                      <div>
                        <a className="group-card-title d-block">Graphic Design</a>
                        <span>212K Members</span>
                      </div>
                    </div>
                    <div>
                      <a href="#" className="second-button fw-bold">
                        Join
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
              2
            </TabPanel>
            <TabPanel value={value} index={2}>
              3
            </TabPanel>
            <TabPanel value={value} index={3}>
              4
            </TabPanel>
            <TabPanel value={value} index={4}>
              5
            </TabPanel>
          </Tabs>
        </div>
        <div className="col-md-3">
          <h4 className="mb-3">Suggested For You</h4>
          <div className="group-card card mb-3">
            <img
              src={require("../../../helpers/images/group-cover-1.jpg")}
              className="card-img-top"
              alt="slidePhoto"
            />
            <div className="card-body">
              <a className="group-card-title">Graphic Design</a>
              <div className="card-text">
                <span>212K Members</span> <span>21 Post A Day</span>
              </div>
              <div className="d-flex justify-content-center">
                <a href="#" className="first-button w-100 text-center">
                  Join
                </a>
              </div>
            </div>
          </div>
          <div className="group-card card">
            <img
              src={require("../../../helpers/images/group-cover-1.jpg")}
              className="card-img-top"
              alt="slidePhoto"
            />
            <div className="card-body">
              <a className="group-card-title">Graphic Design</a>
              <div className="card-text">
                <span>212K Members</span> <span>21 Post A Day</span>
              </div>

              <div className="d-flex justify-content-center">
                <a href="#" className="first-button w-100 text-center">
                  Join
                </a>
              </div>
            </div>
          </div>
        </div>

        <h4>Suggestions</h4>
        <div className="d-flex justify-content-between align-items-center pe-2 border-bottom mb-2">
          <p className="info">Find a groups You Might Be Interested In.</p>
          <a href="#" className="text-decoration-none">
            See all
          </a>
        </div>
        <div className="row mb-5">
          <div className="col-md-6 mt-3">
          <div className="d-flex suggestions mb-3 justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <div className="me-3">
                  <img className="suggestions-img w-100"
                    src={require("../../../helpers/images/group-4.jpg")}
                    alt=""
                  />
                </div>
                <div className="border-bottom">
                  <a className="group-card-title d-block m-0">Graphic Design</a>
                  <span>212K Members</span> <span>| 12 post a week</span>
                  <div className="avatar-group d-flex align-items-center pb-2">
                    <div className="avatar-item">
                      <img
                        src={require("../../../helpers/images/avatar1.jpg")}
                        alt=""
                        className="w-100"
                      />
                    </div>
                    <div className="avatar-item">
                      <img
                        src={require("../../../helpers/images/avatar2.jpg")}
                        alt=""
                        className="w-100"
                      />
                    </div>
                    <span className="ms-2">2 friends are members</span>
                  </div>
                </div>
              </div>
              <div>
              <a href="#" className="follow-button text-decoration-none">Follow</a>
              </div>
            </div>
            <div className="d-flex suggestions mb-3 justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <div className="me-3">
                  <img className="suggestions-img w-100"
                    src={require("../../../helpers/images/group-4.jpg")}
                    alt=""
                  />
                </div>
                <div className="border-bottom">
                  <a className="group-card-title d-block m-0">Graphic Design</a>
                  <span>212K Members</span> <span>| 12 post a week</span>
                  <div className="avatar-group d-flex align-items-center pb-2">
                    <div className="avatar-item">
                      <img
                        src={require("../../../helpers/images/avatar1.jpg")}
                        alt=""
                        className="w-100"
                      />
                    </div>
                    <div className="avatar-item">
                      <img
                        src={require("../../../helpers/images/avatar2.jpg")}
                        alt=""
                        className="w-100"
                      />
                    </div>
                    <span className="ms-2">2 friends are members</span>
                  </div>
                </div>
              </div>
              <div>
              <a href="#" className="follow-button text-decoration-none">Follow</a>
              </div>
            </div>
          </div>
          <div className="col-md-6 mt-3">
          <div className="d-flex suggestions mb-3 justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <div className="me-3">
                  <img className="suggestions-img w-100"
                    src={require("../../../helpers/images/group-4.jpg")}
                    alt=""
                  />
                </div>
                <div className="border-bottom">
                  <a className="group-card-title d-block m-0">Graphic Design</a>
                  <span>212K Members</span> <span>| 12 post a week</span>
                  <div className="avatar-group d-flex align-items-center pb-2">
                    <div className="avatar-item">
                      <img
                        src={require("../../../helpers/images/avatar1.jpg")}
                        alt=""
                        className="w-100"
                      />
                    </div>
                    <div className="avatar-item">
                      <img
                        src={require("../../../helpers/images/avatar2.jpg")}
                        alt=""
                        className="w-100"
                      />
                    </div>
                    <span className="ms-2">2 friends are members</span>
                  </div>
                </div>
              </div>
              <div>
                <a href="#" className="follow-button text-decoration-none">Follow</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
