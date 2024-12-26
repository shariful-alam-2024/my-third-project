
import './App.css'
import Navbar from './Components/Common/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Pages/Home'

import Sermon from './Components/Pages/Sermon'
import Blog from './Components/Pages/Blog'
// import Error from './Components/Pages/Error'
import Footer from './Components/Common/Footer'
import AboutUs from './Components/Pages/AboutUs.JSX'

function App() {
 

  return (
    <>
      <Router>
      
        <Navbar />
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/AboutUs" element={<AboutUs/>}></Route>
            <Route path="/Sermon" element={<Sermon/>}></Route>
            <Route path="/Blog" element={<Blog/>}></Route>
            {/* <Route path="*" element={<Error/>}></Route> */}
          </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
