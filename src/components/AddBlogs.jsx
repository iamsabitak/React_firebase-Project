import React from 'react'
import Navbar from './Navbar'
function AddBlogs() {
  return (
    <>
    <Navbar />
    <div className="container" style={{
      width:'700px',
      marginTop:'40px',
    
    }}>

    <form>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Title</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>


  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Short Discription</label>
    <input type="text" className="form-control" id="exampleInputPassword1"/>
  </div>

  <div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Full Discription</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>

  <div className="mb-3 ">
  <label for="exampleInputPassword1" className="form-label">img Url </label>
  <input type="text" className="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="button" className="btn btn-primary">Add Blog</button>
</form>
  
    </div>
    
      </>
  )
}

export default AddBlogs