import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "./Shows.css";
import Card from '../../Components/Card';
function Shows() {
  const [show,setShow]=useState([]);
  const [count,setCount]=useState(1);
  const getMovie=async()=>{
    const {data}=await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=3aebd4f3bb98e0b738d034f8fdd49e46&language=en-US&sort_by=popularity.desc&page=${count}&timezone=India%2FMumbai&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`);
    console.log(data);

    setShow(data.results);
  }
  useEffect(()=>{
    getMovie();
  },[])
  const goPrev=()=>{
     if(count===0){
      return  setCount(10);
     }
     setCount((prev)=>{return --prev});
     getMovie();
  }
  const goNext=()=>{
    if(count===10){
      return  setCount(0);
     }
     setCount((prev)=>{return ++prev});
     getMovie();
  }
  return (
    <div className='show-page'>
    <p className='show-header'>New Shows</p>
    <div className="buttons">
      <button className='toFroBtn' onClick={()=>{goPrev()}}>{'<'}</button>
      <button  className='toFroBtn' onClick={goNext}>{'>'} </button>
    </div>
    
    <div className="trending-container">
    {
           show.map((t)=>{
               return(
                 <Card  key ={t.id}  id={t.id} 
                 name={t.original_name} 
                  poster={t.poster_path} 
                  title={t.title||t.name} 
                  date={t.first_air_date || t.release_date} 
                  overview={t.overview}
                  media="show">

                  </Card>
               )
           })
            
             
            
          
        }
        </div>
    </div>
  )
}

export default Shows;