import React from 'react'
import Navbar from './Navbar'
import { getAuth } from 'firebase/auth'

function Blogs() {
  const auth = getAuth();
  return (
    <>
      <Navbar/>
      <div className="container d-flex justify-content-center align-items-center flex-column my-3">
        <div className="box">

      <div className="username" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
          <img style={{borderRadius:'50%',width:'15%',margin:'1rem'}} src={auth?.currentUser.photoURL} alt="Upload error" />
          <h3>{auth?.currentUser.displayName}</h3>
           </div>
           </div>
      <div className="card mb-3 bg-secondary" style={{maxWidth:"700px"}}>
  <div className="row g-0">
    <div className="col-md-4 ">
      <img src="https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/g/x/9/-original-imaggsudg5fufyte.jpeg?q=70" className="img-fluid rounded-start" alt="Upload Error" style={{width:'100%'}}/>
    </div>
    <div className="col-md-8">
      <div className="card-body text-center text-white">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
        <button className='btn btn-danger mx-4'>View More</button>
      <button className='btn btn-warning'>Delete</button>
      </div>
      
    </div>
  </div>
</div>
</div>
      </>
  )
}

export default Blogs