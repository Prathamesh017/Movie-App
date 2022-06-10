import React from 'react'
import "./Modal.css";
import {img_500} from "../Config/Config";
import { unavailable } from '../Config/Config';
// onClick={(e)=>{e.currentTarget.style.display="none"}
function Modal({name,poster,title,date, media,average,overview}) {
  // console.log(name,title);
  return (
    <div className='modal'>
      <img src={`${img_500}/${poster}`} alt={`${unavailable}`}></img>
     <div className="modal-info">
       <h2 className='modal-info-name'>{name||title}</h2>
       <h3 className='modal-info-overview'>{overview}</h3>
       <h3 className='modal-info-date'>{date}</h3>
       <h3 className='modal-info-average'>{average}</h3>
       {/* <h3 className='modal-info-overview'>{overview}</h3> */}
       

     </div>
    </div>
  )
}

export default Modal