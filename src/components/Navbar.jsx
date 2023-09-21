import React from 'react'
import {getAuth} from 'firebase/auth';
import {useNavigate } from 'react-router-dom';
import { Link ,useLocation} from 'react-router-dom';
function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
const auth = getAuth();
  // console.log(getAuth());

  const logOut=()=>{
    auth.signOut();
    navigate('/')
  }
  // console.log(useLocation);
  
  return (
    <>
      <div className='bg-primary d-flex aign-items-center p-1' style={{justifyContent:'space-between'}}>
 <div className="username" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
          <img style={{borderRadius:'50%',width:'20%',marginRight:'1rem'}} src={auth?.currentUser.photoURL} alt="Upload error" />
          <h3>{auth?.currentUser.displayName}</h3>
           </div>

        <div className="email"style={{gap:'2rem',display:'flex',justifyContent:'center',alignItems:'center'}} >
          
          {/* {(pathname==='/blogs')?(<Link to={'/addblogs'} className='btn btn-warning'>Addblogs</Link>):''} */}
{(location.pathname==='/blogs') && (<Link to={'/addblogs'} className='btn btn-warning'>Add blog</Link>)}

{(location.pathname !=='/blogs') && (<Link to={'/blogs'} className='btn btn-warning'>Back to blog</Link>)}
          <h3>{auth?.currentUser.email}</h3>
          <button
           onClick={logOut}
          className="btn btn-danger">Log out</button>
        </div>
      </div>
      </>
  );
}

export default Navbar