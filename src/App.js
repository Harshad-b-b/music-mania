import React from "react";
import "./App.css"
import Player from "./components/Player";
import img from "./assets/tc1.jpg"
import Home from "./pages/home/Home";
function App() {
  const [currentSongIndex,setCurrentSongIndex] = React.useState(0);
  const[nextSongIndex,setNextSongIndex] = React.useState(currentSongIndex + 1);
   const[songs,setSongs] = React.useState([
    {
      img :'./assets/tc2.jpg',
      name : 'First',
      artist : 'Imagine dragons',
      music : "songDatabase/first.mp3"
  },
  {
      img : './assets/tc1.jpg',
      name : 'Second',
      artist : 'Justin',
      music : "./songDatabase/second.mp3"
  },
  {
      img : './assets/tc3.jpg',
      name : 'Third',
      artist : 'Sonu Nigma',
      music : "./songDatabase/third.mp3"
  },
  {
      img : './assets/tc4.jpg',
      name : 'Fourth',
      artist : 'Arjit singh',
      music : "./songDatabase/fourth.mp3"
  },
  ])

  React.useEffect(()=>{
    setNextSongIndex(()=>{
      if(currentSongIndex + 1 > songs.length -1){
        return 0;
      }else{
        return currentSongIndex + 1;
      }
    })
  },[currentSongIndex])
  return (
    <div className="App">
      {/* <Player
      currentSongIndex = {currentSongIndex}
      setCurrentSongIndex = {setCurrentSongIndex}
      nextSongIndex = {nextSongIndex}
      songs = {songs} 
       /> */}
       <Home/>
    </div>
  );
}

export default App;
