import React, { useState } from 'react'
import axios from 'axios';
import "./Search.css";
import Card from '../../Components/Card';
function Search() {
  // const [newSearch,setmovie]=useState([]);

  const [search,newSearch]=useState();
  const [active,setActive]=useState(false);

  const searchFilter=async (event)=>{
     const target=(event.target.value);
     const {data}=await axios.get(`https://api.themoviedb.org/3/search/${active?"tv":"movie"}?api_key=3aebd4f3bb98e0b738d034f8fdd49e46&query=${target}&page=1`);
    console.log(data.results);


  newSearch(data.results);
  }
  const switchTab=(id)=>{
    if(id==='0'){
      setActive(false);
      return;
    } 
    setActive(true);
    
    
  }
  return (
    <div className="search-container">
      <div className="search-bar-icon">
        <input type="text" placeholder='Search' name="search" onChange={(e)=>searchFilter(e)}></input>
        <button className='searchBtn'>🔍</button>
      </div>
      <div className="tab-buttons">
        <button className={active?'tab-button':"active-tab-button"} onClick={(e,id='0')=>switchTab(id)}>Search Movie</button>
        <button className={active?"active-tab-button":'tab-button'} onClick={(e,id="1")=>switchTab(id)}>Search Show</button>

      </div>
    
    <div className="trending-container">

    {  search ?  search.map((t)=>{
               return(
                 <Card  key ={t.id}  id={t.id} 
                 name={t.original_name} 
                  poster={t.poster_path} 
                  title={t.title||t.name} 
                  date={t.first_air_date || t.release_date} 
                  overview={t.overview}
                  media="movie">

                  </Card>
               )
               
              }): <p className='no-found'>No Movie Found</p>
             
            
          
        }
        
        
        </div>
    </div>
  
    // </div>
  )  
}

export default Search