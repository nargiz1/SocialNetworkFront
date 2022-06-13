import React, { useState } from 'react';
import Tabs from "../../../components/Tabs/Tabs";
import TabPanel from "../../../components/Tabs/TabPanel";
import Carousel from "../../../components/Carousel/Carousel";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { AiOutlineHeart, AiOutlineCloudUpload } from "react-icons/ai";
import "../ProductsTabs/index.css";

export default function ProductsTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h3>Products</h3>
        <a
          href="#"
          className="add-button"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
        >
          <BsFillPlusCircleFill />
        </a>
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel"
        >
          <div className="offcanvas-header border-bottom p-4">
            <h5 className="offcanvas-title" id="offcanvasRightLabel">
              Sell new product
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <form action="">
              <div className="mb-2">
                <label>Product name</label>
                <input id="prod-name" className="w-100" required />
              </div>
              <div>
                <label>Description</label>
                <textarea
                  id="prod-desc"
                  rows="4"
                  cols="50"
                  placeholder="Please describe your product."
                  className="w-100"
                  required
                />
              </div>
              <div className="row mb-2">
                <div className="col-8">
                  <label>Category</label>
                  <select name="category" id="category">
                    <option value="2">Autos &amp; Vehicles</option>
                    <option value="3">Baby &amp; Children's Products</option>
                    <option value="4">Beauty Products &amp; Services</option>
                  </select>
                </div>
                <div className="col-4">
                  <label>Price</label>
                  <input placeholder="0.00" type="number" className="w-100" />
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-8">
                  <label>Type</label>
                  <select name="category" id="category" className="w-100">
                    <option value="3">New</option>
                    <option value="4">Stock</option>
                  </select>
                </div>
                <div className="col-4">
                  <label>Currency</label>
                  <select name="category" id="category" className="w-100">
                    <option value="3">AZN</option>
                    <option value="4">USD</option>
                    <option value="4">Euro</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="file-input-div mt-3">
                    <label htmlFor="img">
                      <i className="upload-icon">
                        <AiOutlineCloudUpload />
                      </i>
                    </label>
                    <input
                      type="file"
                      id="img"
                      className="custom-file-upload"
                    />
                  </div>
                </div>
              </div>
              <div className="form-submit mt-5">
                <button type="submit" className="w-100">Create Now</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Tabs
        activeTab={value}
        handleTabChange={handleChange}
        tabs={["Suggestions", "Newest", "My products"]}
      >
        <TabPanel value={value} index={0}>
          <Carousel mdViewCount={5}>
            <div className="prod-card position-relative">
              <div className="prod-card-top">
                <img
                  src={require("../../../helpers/images/prod-img-1.jpg")}
                  alt="prod-1"
                  className="w-100"
                />
                <a href="#" className="position-absolute">
                  <AiOutlineHeart />
                </a>
              </div>
              <div className="prod-card-bottom">
                <div className="prod-price-primary">$12.99</div>
                <a href="#" className="text-decoration-none">
                  <h6 className="prod-type">Herbal</h6>
                  <span className="prod">Herbal Shampoo</span>
                </a>
              </div>
            </div>
            <div className="prod-card position-relative">
              <div className="prod-card-top">
                <img
                  src={require("../../../helpers/images/prod-img-1.jpg")}
                  alt="prod-1"
                  className="w-100"
                />
                <a href="#" className="position-absolute">
                  <AiOutlineHeart />
                </a>
              </div>
              <div className="prod-card-bottom">
                <div className="prod-price-primary">$12.99</div>
                <a href="#" className="text-decoration-none">
                  <h6 className="prod-type">Herbal</h6>
                  <span className="prod">Herbal Shampoo</span>
                </a>
              </div>
            </div>
          </Carousel>
        </TabPanel>
        <TabPanel value={value} index={1}>
          Products2
        </TabPanel>
        <TabPanel value={value} index={2}>
          Products3
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
          <h5 className="category-card-title text-light">Business</h5>
        </div>
        <div className="category-card position-relative">
          <img
            className="w-100"
            src={require("../../../helpers/images/business.jpg")}
            alt="categoryImage"
          />
          <h5 className="category-card-title text-light">Business</h5>
        </div>
        <div className="category-card position-relative">
          <img
            className="w-100"
            src={require("../../../helpers/images/business.jpg")}
            alt="categoryImage"
          />
          <h5 className="category-card-title text-light">Business</h5>
        </div>
        <div className="category-card position-relative">
          <img
            className="w-100"
            src={require("../../../helpers/images/business.jpg")}
            alt="categoryImage"
          />
          <h5 className="category-card-title text-light">Business</h5>
        </div>
        <div className="category-card position-relative">
          <img
            className="w-100"
            src={require("../../../helpers/images/business.jpg")}
            alt="categoryImage"
          />
          <h5 className="category-card-title text-light">Business</h5>
        </div>
        <div className="category-card position-relative">
          <img
            className="w-100"
            src={require("../../../helpers/images/business.jpg")}
            alt="categoryImage"
          />
          <h5 className="category-card-title text-light">Business</h5>
        </div>
      </Carousel>
      <div className="d-flex justify-content-between align-items-center pe-2 border-bottom mb-3 mt-3">
        <h4>New Collection</h4>
        <a href="#" className="text-decoration-none">
          See all
        </a>
      </div>
      <Carousel mdViewCount={3}>
        <div className="prod-card d-flex align-items-center p-2 position-relative">
          <div className="prod-card-left me-3">
            <img
              src={require("../../../helpers/images/chanel.jpg")}
              alt="new-prod"
              className="w-100 h-100"
            />
          </div>
          <div className="prod-card-right">
            <div className="prod-price-secondary">$12.99</div>
            <h6 className="prod-type">PARFUMDDS</h6>
            <span className="prod d-block">Parfum Spray</span>
            <span className="like-count">15 Likes</span>{" "}
            <span className="view-count">286 Views</span>
          </div>
        </div>
        <div className="prod-card d-flex align-items-center p-2 position-relative">
          <div className="prod-card-left me-3">
            <img
              src={require("../../../helpers/images/chanel.jpg")}
              alt="new-prod"
              className="w-100 h-100"
            />
          </div>
          <div className="prod-card-right">
            <div className="prod-price-secondary">$12.99</div>
            <h6 className="prod-type">PARFUMDDS</h6>
            <span className="prod d-block">Parfum Spray</span>
            <span className="like-count">15 Likes</span>{" "}
            <span className="view-count">286 Views</span>
          </div>
        </div>
      </Carousel>
      <div className="d-flex justify-content-between align-items-center pe-2 border-bottom mb-3">
        <h4>Brand Collection</h4>
        <a href="#" className="text-decoration-none">
          See all
        </a>
      </div>
      <Carousel mdViewCount={5}>
        <div className="prod-card position-relative">
          <div className="prod-card-top">
            <img
              src={require("../../../helpers/images/prod-img-1.jpg")}
              alt="prod-1"
              className="w-100"
            />
            <a href="#" className="position-absolute">
              <AiOutlineHeart />
            </a>
          </div>
          <div className="prod-card-bottom">
            <div className="prod-price-primary">$12.99</div>
            <a href="#" className="text-decoration-none">
              <h6 className="prod-type">Herbal</h6>
              <span className="prod">Herbal Shampoo</span>
            </a>
          </div>
        </div>
      </Carousel>
    </>
  );
}
