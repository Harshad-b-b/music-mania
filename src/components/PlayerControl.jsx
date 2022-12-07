import React from "react";

export default function PlayerControls(props){
    return(
        <div className="c-player--controls">
            <button className="skip-btn" onClick={()=>props.skipSong(false)}>
            <i class="fa-sharp fa-solid fa-chevron-left"></i>
            </button>
            <button className="play-btn" onClick={()=>props.setIsPlaying(!props.isPlaying)}>
            <i class="fa-sharp fa-solid fa-play"  ></i>
            </button>
            <button className="skip-btn" onClick={()=>props.skipSong()}>
            <i class="fa-sharp fa-solid fa-chevron-right"></i>
            </button>
        </div>
    )
}