import React from "react";
import PlayerDetails from "./PlayerDetails";
import PlayerControls from "./PlayerControl";
export default function Player(props){
    const audioEl = React.useRef(null);
    const [isPlaying,setIsPlaying] = React.useState(false);
    React.useEffect(()=>{
        if(isPlaying){
            audioEl.current.play();
        }else{
            audioEl.current.pause();
        }
    })
    const skipSong = (forwad = true) => {
        if(forwad){
            props.setCurrentSongIndex(()=>{
                let temp = props.currentSongIndex;
                temp++;
                if(temp > props.songs.length-1){
                    temp = 0;
                }
                return temp;
            })
        }else{
            props.setCurrentSongIndex(()=>{
                let temp = props.currentSongIndex;
                temp--;
                if(temp < 0 ){
                    temp = props.songs.length - 1;
                }
                return temp;
            })
        }

    }
    return(
        <div className="c-player">
            <audio src={props.songs[props.currentSongIndex].music} ref={audioEl}></audio>
            <h4>Play now</h4>
            <PlayerDetails song = {props.songs[props.currentSongIndex]}/>
            <PlayerControls
             isPlaying={isPlaying}
             setIsPlaying={setIsPlaying}
             skipSong={skipSong}/>
            <p><strong>Next up</strong>{props.songs[props.nextSongIndex].title} by {props.songs[props.nextSongIndex].artist}</p>
        </div>
    )
}