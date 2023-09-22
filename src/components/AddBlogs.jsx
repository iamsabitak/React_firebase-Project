import React, { useState } from "react";
import Navbar from "./Navbar";
function AddBlogs() {
  const [formData, setFormData] = useState({
    title: "",
    shortDescription: "",
    fullDescription: "",
    img: "",
  });
  const handleChange = (e) => {
    console.log('handleChange is called');
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData.title);
  };
  return (
    <>
      <Navbar />
      <div
        className="container"
        style={{
          width: "700px",
          marginTop: "40px",
        }}
      >
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Title
            </label>
            <input 
            value={formData.title}
            name="title"
            onChange={handleChange}
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Short Discription
            </label>
            <input
            value={formData.shortDescription}
            name="shortDescription"
            onChange={handleChange}
              type="text"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Full Discription
            </label>
            <textarea
            value={formData.fullDescription}
            name="fullDescription"
            onChange={handleChange}
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>

          <div className="mb-3 ">
            <label htmlFor="exampleInputPassword1" className="form-label">
              img Url{" "}
            </label>
            <input
            value={formData.img}
            name="img"
            onChange={handleChange}
              type="text"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <button type="button" className="btn btn-primary">
            Add Blog
          </button>
        </form>
      </div>
    </>
  );
}

export default AddBlogs;
