export class musicBot{
    constructor(
        music,isPlaying,setIsPlaying
    ){
        this.music = music;
        this.isPlaying = isPlaying;
        this.setIsPlaying = setIsPlaying;
    }
    playMusic(){
        this.music.play();
        this.setIsPlaying(true);
    }
    pauseMusic(){
        this.music.pause();
        this.setIsPlaying(false)
    }
}