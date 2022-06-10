import React from 'react'
import "./Card.css"
import {img_300,unavailable} from "../Config/Config"; 
import Modal from './Modal';
import { useState } from 'react';
function Card({name,poster,title,date, media,average,overview}) {
const [modal,showmodal]=useState(false)
const cardClick=()=>{
  console.log(modal);
   showmodal(prev=>!prev);
}

  return (
    <div  className='card' onClick={()=>{cardClick()}}>
    <img className='poster' src={poster ?`${img_300}/${poster}`:`${unavailable}`} alt="title"></img>
    <p className='movie-title'>{title}</p>
    <div className="movie-info">
    <p>{media==="tv" ? "Tv Series" :"Movie"}</p>
    <p>{date}</p >
    </div>
      {modal && <Modal name={name} poster={poster} title={title} date={date} media={media} average={average} overview={overview}></Modal>}
      </div>
  )
  
}

export default Card