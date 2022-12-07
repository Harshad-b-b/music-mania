import "./home.css";
import React from "react";
import SearchBar from "../../components/searchbar/SearchBar";
import NavBar from "../../components/navbar/NavBar";
import TrendingCard from "../../components/trending-card/TrendingCard";
import Player from "../../components/player/Player";
import card1 from "../../assets/card1.png";
import card2 from "../../assets/card2.png";
import card3 from "../../assets/card3.png";
import SongCard from "../../components/songcard/SongCard";
import { songDatabase } from "../../songdatabase/songList";

export default function Home(){
    // let [playerItems,setPlayerItems] = React.useState({
    //     name:"",
    //     artist:"",
    //     img:"",
    //     music:""
    // })
    let [animate,setanimate] = React.useState(false);
    let [trackMusic,setTrackMusic] = React.useState(0);
    function getItemIndex(index){
        setTrackMusic(index)
        setanimate(!animate)
        // let a = document.querySelector(`.bar-graph-3:nth-child(${index+1})`)
        // a.style.display = "flex";
    }
    const skipSong = (forwad = true) => {
        if(forwad){
          setTrackMusic(()=>{
                let temp = trackMusic;
                temp++;
                if(temp > songDatabase.length-1){
                    temp = 0;
                }
                return temp;
            })
        }else{
            setTrackMusic(()=>{
                let temp = trackMusic;
                temp--;
                if(temp < 0 ){
                    temp = songDatabase.length-1;
                }
                return temp;
            })
        }

    }
    return(
        <>
        
        <div className="nav-bar">
            <NavBar/>
        </div>
        <div className="holder">
           
            <div className="navbar-icon">
                <div className="line-one" ></div>
                <div className="line-two"></div>
                <div className="line-three"></div>
            </div>
            <header>
            <div  class="search-bar">
                <div className="searchbar-holder" style={{width:"60%"}}>
                <SearchBar/>
                </div>
                
            </div>

            <div class="btnr">
                <button className="btnrr">Login</button>
                <button className="btnrr">Signup</button>
            </div>
            </header>
           
           
            <div className="playlist-card">
                <div className="playlist-card-1 playlist-card-design"><img src={card1} alt="card image" /></div>
                <div className="playlist-card-2 playlist-card-design"><img src={card2} alt="card image" />

                <h1>Party Songs</h1>
                </div>
                <div className="playlist-card-3 playlist-card-design"><img src={card3} alt="card image" /></div>
            </div>
            <h1 style={{fontSize:"20px",color:"wheat",padding:"0.5em",alignSelf:"flex-start",marginLeft:"20%"}}>Recently Played</h1>
      <div  className="recently-played-card">

            
                {songDatabase.map((val,index)=>{
                    return(
                        <div>
                        <SongCard playSong={()=>getItemIndex(index)} songDatabase={songDatabase} index={index} animate={animate}/>
                        </div>
                    )
                })}
                
                </div>
            
            <div className="trending-card">
            <TrendingCard/>
            </div>
            <div className="player">
            <Player
            index={trackMusic}
             skipSong = {skipSong} /></div> 
            </div>
      
        </>
    )
}