import "./player.css";
import playerImg from "../../assets/default-img.jpg";
import FrequencyControl from "../frequencycontrol/FrequencyControl";
import { songDatabase } from "../../songdatabase/songList";
import first from "../../songdatabase/first.mp3"
import second from "../../songdatabase/second.mp3"
import React from "react";
// import * as robot from "../../robots/robots.js";
export default function Player({index=0,skipSong,setIndex}){
    let [show,setShow] = React.useState(false);
    let[playPause,setPlayPause] = React.useState(false);
    let [trackMusic,setTrackMusic] = React.useState(0); 
    let audioEl = React.useRef(null);
    let waveEl = React.useRef(null);
    let waveEl2 = React.useRef(null);
    let waveEl3 = React.useRef(null);
    let removerEl = React.useRef(null);
    let [currTime,setCurrTime] = React.useState("00:00")
    let [totalDuration,setTotalDuration] = React.useState("00:00")
    let [seekerPostion,setSeekerPosition] = React.useState(0) 
    let [tester,setTester] = React.useState(0)
    let [startTester,setStartTester] = React.useState(0);
    let timeInterval = React.useRef(false);
    let [isDisabled,setIsDisabled] = React.useState();
    // let a = document.querySelector(`.bar-graph-3:nth-child(${index+1})`)
    React.useEffect(()=>{
        if(playPause){
            audioEl.current.play();
            waveEl.current.classList.add("loader")
            waveEl2.current.classList.add("loader-2")
            waveEl3.current.classList.add("loader-2")
            trackDuration()
            // forwordSong()
        }else{
            audioEl.current.pause();
            waveEl.current.classList.remove("loader")
            waveEl2.current.classList.remove("loader-2")
            waveEl3.current.classList.remove("loader-2")
        }

       
    })

    React.useEffect(()=>{
        removerEl.current.addEventListener("mousedown",forwordSong)
        removerEl.current.addEventListener("mouseup",clearForwardSong);
        removerEl.current.addEventListener("click",()=>{
            if(Number(startTester) < 5){
                removerEl.current.addEventListener("clicl",skipSong)
                setIndex(index + 1)
            }else{
                console.log(startTester,"Dfa")
            }
        })
    },[])


    let forwordSong = ()=>{ 
 
        
       timeInterval.current =  setInterval(() => {
        // setStartTester(startTester + 1)
        audioEl.current.currentTime = audioEl.current.currentTime + 1;
            setTester(audioEl.current.currentTime) 
           setStartTester(startTester ++ )
           console.log(startTester,"ds")
           },500);   
        }

    function clearForwardSong(e){
        removerEl.current.removeEventListener('click', skipSong);
        clearInterval(timeInterval.current)
    //    console.log(startTester,"dfsa")
    }

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
            <img className="player-img" src={songDatabase[index].img} alt="player image" />
            <div className="song-details">
                <p className="song-title">{songDatabase[index].name}</p>
                <p className="singer">{songDatabase[index].artist}</p>
            </div>
            <div className="mobile-controls" style={{width:"100%",height:"100%"}}>
                <div className="responsive-button-holder">
                <button className="prev-btn control-icon"onClick={()=>skipSong(false)}>
                        <i class="fa-sharp fa-solid fa-chevron-left " style={{fontSize:"30px"}}></i>
                    </button>
                    <button  className="playPauseBtn control-icon" onClick={()=>setPlayPause(!playPause)}>
                        {!playPause ? <i class="fa-sharp fa-solid fa-play " style={{fontSize:"29px"}} ></i>: <i class="fa-sharp fa-solid fa-pause" style={{fontSize:"30px"}}></i>}
                       
                    </button>
                    <button className="next-btn control-icon"  onClick={()=>skipSong()}>
                    <i class="fa-sharp fa-solid fa-chevron-right " style={{fontSize:"30px",}}></i>
                    </button>
                    <div ref={waveEl3} className="bar-graph-2 bar-graph-3">
                <div className="small-bar-graph-design" style={{height:"20px",alignSelf:"flex-end"}}></div>
                <div className="small-bar-graph-design" style={{height:"25px",alignSelf:"flex-end"}}></div>
                <div className="small-bar-graph-design" style={{height:"15px",alignSelf:"flex-end"}}></div>
                <div className="small-bar-graph-design" style={{height:"18px",alignSelf:"flex-end"}}></div>
                <div className="small-bar-graph-design" style={{height:"11px",alignSelf:"flex-end"}}></div>
                </div>
                </div>
                <div className="responsive-song-time">
                <span style={{background:"wheat",opacity:"0.5"}}>{currTime}</span>
                <span style={{background:"#712685"}}>{totalDuration}</span>
               
                </div>
                
                    <div className="responsive-seek-wrapper">
                       
                    <div style={{width:seekerPostion,background:"#F8FFDB",height:"10px",borderRadius:"3px"}} ></div>
                    </div>
                  
                    
            </div>
            <div className="controls"> 
                
                <div className="pause-play-btn-holder">
                <div ref={waveEl} className="bar-graph">
                <div className="bar-graph-design" style={{height:"30px",}}></div>
                <div className="bar-graph-design" style={{height:"25px"}}></div>
                <div className="bar-graph-design" style={{height:"20px",}}></div>
                <div className="bar-graph-design" style={{height:"27px",}}></div>
                <div className="bar-graph-design" style={{height:"20px",}}></div>
                </div>
                <div className="pause-play-btn">
                
                    <button className="prev-btn btnwa"onClick={()=>skipSong(false)}>
                        <i class="fa-sharp fa-solid fa-chevron-left" style={{fontSize:"15px"}}></i>
                    </button>
                    <button  className="playPauseBtn btnwa" onClick={()=>setPlayPause(!playPause)}>
                        {!playPause ? <i class="fa-sharp fa-solid fa-play" style={{fontSize:"15px"}} ></i>: <i class="fa-sharp fa-solid fa-pause" style={{fontSize:"15px"}}></i>}
                       
                    </button>
                    <button className="playPauseBtn btnwa" ref={removerEl} >
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
                    <span>{tester}</span>
                    <h1>{startTester}</h1>
                    <div className="currTime"
                     style={{padding:"2px",background:"#712685",color:"wheat",fontWeight:"bold"}}>
                       {totalDuration}
                    </div>
                   
                    </div>
                    <div  style={{width:seekerPostion.toString() + "%",display:"flex",flexDirection:"column",alignSelf:"flex-start"}} className="seeker-wrapper ">
                    <div ref={waveEl2} className="bar-graph-2 fsadf" >
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