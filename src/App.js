import React from 'react'
import Header from './Components/Header'
import Navbar from './Components/Navbar';
import { BrowserRouter,Route,Routes,Link} from 'react-router-dom';
import Movies from "./Pages/Movies/Movies";
import Trending from "./Pages/Trending/Trending";
import Search from "./Pages/Search/Search";
import Shows from "./Pages/Shows/Shows";

import "./style.css";
function App() {
  return (
<BrowserRouter>
    <Header></Header>
    <div className='app'>
    <Routes>
     <Route path= "/" element={<Trending></Trending>}></Route>
     <Route path= "movies" element={<Movies></Movies>} ></Route>
     <Route path= "shows" element={<Shows></Shows>}></Route>
     <Route path= "search" element={<Search></Search>}></Route>

    </Routes>
    <Navbar></Navbar>
    </div>
</BrowserRouter>
  )
}

export default App