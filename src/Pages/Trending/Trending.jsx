import axios from 'axios'
import React from 'react'
import {useEffect,useState} from "react";
import Card from '../../Components/Card';
import "./Trending.css";
import Modal from '../../Components/Modal';

function Trending() {
const [trend,setTrend]=useState([]);
const arr=[1,2,3];
  const getTrending=async()=>{
    const {data}=await axios.get("https://api.themoviedb.org/3/trending/all/day?api_key=3aebd4f3bb98e0b738d034f8fdd49e46");
    console.log(data);
    setTrend(data.results);
  }

  // const cardClick=()=>{
  //   showmodal(prev=>!prev)
  //   // <Modal/>
  // }
  useEffect(()=>{
      getTrending();
  },[])
  return (
    <div className='trending'>
      <p className='trending-title'>Trending</p>
      {/* {modal && <Modal></Modal>} */}
      <div className="trending-container">
        
        {
           trend.map((t)=>{
               return(
                 <Card   key ={t.id}  id={t.id} 
                 name={t.original_name} 
                  poster={t.poster_path} 
                  title={t.title||t.name} 
                  date={t.first_air_date || t.release_date} 
                  media={t.media_type}
                  overview={t.overview}
                  // cardClick={cardClick}
                  >
                   
                  </Card>
               )
           })
            
             
            
          
        }
      </div>
    </div>
  )
}

export default Trending