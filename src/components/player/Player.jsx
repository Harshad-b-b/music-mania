import "./player.css";
import playerImg from "../../assets/default-img.jpg";
import FrequencyControl from "../frequencycontrol/FrequencyControl";
import { songDatabase } from "../../songdatabase/songList";
import first from "../../songdatabase/first.mp3"
import second from "../../songdatabase/second.mp3"
import React from "react";
// import * as robot from "../../robots/robots.js";
export default function Player({index=0,skipSong,refLoader}){
    let [show,setShow] = React.useState(false);
    let[playPause,setPlayPause] = React.useState(false);
    let [trackMusic,setTrackMusic] = React.useState(0); 
    let audioEl = React.useRef(null);
    let waveEl = React.useRef(null);
    let waveEl2 = React.useRef(null);
    let totalDurationEl = React.useRef(null);
    let [currTime,setCurrTime] = React.useState("00:00")
    let [totalDuration,setTotalDuration] = React.useState("00:00")
    let [seekerPostion,setSeekerPosition] = React.useState(0) 
    // let a = document.querySelector(`.bar-graph-3:nth-child(${index+1})`)
    React.useEffect(()=>{
        if(playPause){
            audioEl.current.play();
            waveEl.current.classList.add("loader")
            waveEl2.current.classList.add("loader-2")
            // a.style.display = "flex";
            trackDuration()
        }else{
            audioEl.current.pause();
            waveEl.current.classList.remove("loader")
            waveEl2.current.classList.remove("loader-2")
            // if(a){
//  a.style.display = "none";
            // }
           
        }
        console.log(seekerPostion)
    })

    function trackDuration(){
        let seekPosition = ""
        setInterval(()=>{
            seekPosition = audioEl.current.currentTime * (100 / audioEl.current.duration);
        // seek_slider.value = seekPosition;
            setSeekerPosition(seekPosition)
            
        let currentMinutes = Math.floor(audioEl.current.currentTime / 60);
        let currentSeconds = Math.floor(audioEl.current.currentTime - currentMinutes * 60);
        let durationMinutes = Math.floor(audioEl.current.duration / 60);
        let durationSeconds = Math.floor(audioEl.current.duration - durationMinutes * 60);

        if(currentSeconds < 10) {currentSeconds = "0" + currentSeconds; }
        if(durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
        if(currentMinutes < 10) {currentMinutes = "0" + currentMinutes; }
        if(durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

        setCurrTime( currentMinutes + ":" + currentSeconds);
        setTotalDuration( durationMinutes + ":" + durationSeconds);
        })
    }
  

    return(
        <>
        {/* <p>{typeof(seekerPostion)}</p> */}
        <div className="player-holder">
        <audio src={songDatabase[index].music} ref={audioEl}></audio>
            <img src={songDatabase[index].img} alt="player image" />
            <div className="song-details">
                <p className="song-title">{songDatabase[index].name}</p>
                <p className="singer">{songDatabase[index].artist}</p>
            </div>
            <div className="controls"> 
                
                <div className="pause-play-btn-holder">
                <div ref={waveEl} className="bar-graph" style={{display:'flex',gap:"6px",width:"10%"}}>
                <div className="bar-graph-design" style={{height:"30px",}}></div>
                <div className="bar-graph-design" style={{height:"25px"}}></div>
                <div className="bar-graph-design" style={{height:"20px",}}></div>
                <div className="bar-graph-design" style={{height:"27px",}}></div>
                <div className="bar-graph-design" style={{height:"20px",}}></div>
                </div>
                <div className="pause-play-btn">
                
                    <button className="prev-btn"onClick={()=>skipSong(false)}>
                        <i class="fa-sharp fa-solid fa-chevron-left" style={{fontSize:"15px"}}></i>
                    </button>
                    <button  className="playPauseBtn" onClick={()=>setPlayPause(!playPause)}>
                        {!playPause ? <i class="fa-sharp fa-solid fa-play" style={{fontSize:"15px"}} ></i>: <i class="fa-sharp fa-solid fa-pause" style={{fontSize:"15px"}}></i>}
                       
                    </button>
                    <button className="next-btn" onClick={()=>skipSong()}>
                    <i class="fa-sharp fa-solid fa-chevron-right" style={{fontSize:"15px"}}></i>
                    </button>
                </div>
               
                </div>
                {/* audio seeker */}
                <div className="skeer-holder" >
                    <div className="song-time">
                    <div className="totalDuration" 
                    style={{background:"linear-gradient(180deg, rgba(255, 255, 255, 0.2108) 0%, rgba(255, 255, 255, 0.1767) 100%)",padding:"2px",color:"wheat",fontWeight:"bold"}}>
                        {currTime}
                    </div>
                    <div className="currTime"
                     style={{padding:"2px",background:"#712685",color:"wheat",fontWeight:"bold"}}>
                       {totalDuration}
                    </div>
                   
                    </div>
                    <div  style={{width:seekerPostion.toString() + "%",display:"flex",flexDirection:"column",alignSelf:"flex-start"}} className="seeker-wrapper ">
                    <div ref={waveEl2} className="bar-graph-2" style={{display:'flex',gap:"4px",width:"30px",height:"15px",alignSelf:"flex-end"}}>
                <div className="small-bar-graph-design" style={{height:"14px",alignSelf:"flex-end"}}></div>
                <div className="small-bar-graph-design" style={{height:"10px",alignSelf:"flex-end"}}></div>
                <div className="small-bar-graph-design" style={{height:"12px",alignSelf:"flex-end"}}></div>
                <div className="small-bar-graph-design" style={{height:"15px",alignSelf:"flex-end"}}></div>
                <div className="small-bar-graph-design" style={{height:"10px",alignSelf:"flex-end"}}></div>
                </div>
                <div className="seeker" onClick={()=>alert("walla")} style={{width:"100%",background:"wheat",height:"6px",alignSelf:"flex-start",zIndex:"2"}} > 
                </div>
                <div className="seeker-bg" onClick={()=>alert("hello")} style={{width:"33%",background:"black",height:"6px",alignSelf:"flex-start",position:"absolute",bottom:"8px"}}></div>
                    </div>
                    
                </div>
            </div>
            <div className="song-operation">
               <div className="flat-btn">
               <i class="fa-sharp fa-solid fa-heart" style={{color:"red"}}></i>
               </div>
               <div className="flat-btn" >
               <i class="fa-sharp fa-solid fa-shuffle" style={{color:"aqua"}}></i>
               </div>
               <div className="flat-btn" onClick={()=>setShow(show ? false : true)}>
               <i class="fa-sharp fa-solid fa-sliders" style={{color:"rosybrown"}} ></i>
               </div>
               
               <div className="flat-btn">
               <i class="fa-sharp fa-solid fa-volume-high" style={{color:"yellow"}}></i>
               </div>
            </div>
           <div className="fc-card" style={{display: show ? "block":"none"}}>
           <FrequencyControl/>
           </div>
        </div>
       
        </>
    )
}