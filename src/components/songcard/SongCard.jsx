import { useState } from "react";
import { useEffect } from "react";
import "./songcard.css";
import React from "react";
export default function SongCard({songDatabase,playSong,index,animate
   }){
    let audioEl = React.useRef(null);
    let [duration,setDuration] = React.useState("");
    useEffect(()=>{
       let durationMinutes = Math.floor(Number(audioEl.current.duration) / 60);
       let durationSeconds = Math.floor(Number(audioEl.current.duration) - Number(durationMinutes) * 60);
       setDuration(durationMinutes + ":" + durationSeconds)
    },)

    return(
        <>
            <div className="song-card-design">
                <audio ref={audioEl} src={songDatabase[index].music}></audio>
                <img src={songDatabase[index].img} alt="" />
                <div className="song-description">
                    <div className="card-first-row">
                        <p style={{fontSize:"20px",color:"wheat"}}>{songDatabase[index].name}</p>
                        <i class="fa-sharp fa-solid fa-star" style={{color:"yellow"}}></i>
                        <small style={{color:"wheat",fontSize:"8px",opacity:"0.7"}}>{songDatabase[index].rating} upvotes</small>
                        <small style={{color:"wheat",fontSize:"12px",opacity:"0.7"}}>{songDatabase[index].artist}</small>
                    </div>
                </div>
                <div className="song-card-play-btn">
                    <p style={{fontSize:"12px",color:"wheat"}}>{duration}</p>
                    <button onClick={playSong}><i class="fa-sharp fa-solid fa-circle-play" style={{color:"wheat",width:"40px",height:"40px",fontSize:"40px"}}></i></button>
                </div>
                
            </div>
           
            <div style={{width:"40%",display:"flex",flexDirection:"column",alignSelf:"flex-start"}} className="bar-graph-wrapper">
                    <div  className="bar-graph-3 animate" >
                <div className="small-bar-graph-design" style={{height:"14px",alignSelf:"flex-end"}}></div>
                <div className="small-bar-graph-design" style={{height:"10px",alignSelf:"flex-end"}}></div>
                <div className="small-bar-graph-design" style={{height:"12px",alignSelf:"flex-end"}}></div>
                <div className="small-bar-graph-design" style={{height:"15px",alignSelf:"flex-end"}}></div>
                <div className="small-bar-graph-design" style={{height:"10px",alignSelf:"flex-end"}}></div>
                </div>
             
                    </div>
        
        </>
    )
}