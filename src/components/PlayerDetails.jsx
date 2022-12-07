import React from "react";

export default function PlayerDetails(props){
return(
    <div className="c-player--details">
        <div className="details-img">
            <img src={props.song.img} alt="Imagewqaaaer" />
        </div>
        <h3 className="details-title">{props.song.name}</h3>
        <h4 className="details-artist">{props.song.artist}</h4>
    </div>
)
}