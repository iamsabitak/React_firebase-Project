import './App.css';
import Logins from './components/Logins';
import AddBlogs from './components/AddBlogs';
import Blogs from './components/Blogs';
// import Navbar from './components/Navbar';
import Singleblog from './components/Singleblog';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
function App() {
  return (
   <Router>
  
   <Routes>
  <Route path='/' element={<Logins/>}/>
  <Route path='/addblogs' element={<AddBlogs/>}/>
  <Route path='/blogs/:id' element={<Singleblog/>}/>
  <Route path='/blogs' element={<Blogs/>}/>
   </Routes>
   </Router>
  );
}

export default App;
