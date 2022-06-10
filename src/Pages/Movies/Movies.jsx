import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "./Movie.css";
import Card from '../../Components/Card';
function Movies() {
  const [movie,setmovie]=useState([]);
  const [count,setCount]=useState(1);
  const getMovie=async()=>{
    const {data}=await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=3aebd4f3bb98e0b738d034f8fdd49e46&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${count}&with_watch_monetization_types=flatrate`);
    console.log(data);

    setmovie(data.results);
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
    <div className='movie-page'>
    <p className='movie-header'>Movie List</p>
    <div className="buttons">
      <button className='toFroBtn' onClick={()=>{goPrev()}}>{'<'}</button>
      <button  className="toFroBtn" onClick={goNext}>{'>'} </button>
    </div>
    <div className="trending-container">

    {
           movie.map((t)=>{
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
           })
            
             
            
          
        }
        </div>
    </div>
  )
}

export default Movies