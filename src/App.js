import './App.css';
import {BrowserRouter as Router , Route , Routes, Link} from "react-router-dom";
import { Home } from './blogComponents.js/Home';
import { Title } from './blogComponents.js/Title';
import { useState } from "react"
function App() {
  const [blogs, setBlogs] = useState([
    { title: 'The Final battle', body: 'lorem ipsum...', author: 'sherlock', id: 1 },
    { title: 'Aventures of Blue Carbuncle !', body: 'lorem ipsum...', author: 'watson', id: 2 },
    { title: 'Hounds of Baskerville', body: 'lorem ipsum...', author: 'moriarty', id: 3 }
  ]);
  return (
    <>
    <Router>
      <nav>
        <div className='nav-bar'>
        <div className="title-blog">
        <h1>
          Book Components
        </h1>
        </div>
        <div className='links'>
        <Link  className="link-1" to="/home" style={{padding:5}}>
          Home
        </Link>
        <Link className='link-1' to="/title" style={{padding:5}}>
          Title
        </Link>
        </div>
        </div>
        <hr/>
      </nav>
   
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="/home" element={<Home blogs={blogs}  setBlogs={setBlogs}/>}/>
      <Route path="/title" element={<Title blogs={blogs} setBlogs={setBlogs} />}/>
    </Routes>
    </Router>
    </>

  );

}
export default App;

