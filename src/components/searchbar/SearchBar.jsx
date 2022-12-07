import "./searchbar.css";

export default function SearchBar(){
    return(
        <div className="searchbar-holder">
            <i class="fa-sharp fa-solid fa-magnifying-glass" style={{fontSize:"20px"}}></i>
            <input type="text" placeholder="Search music/artist/albums...." />
            <i class="fa-sharp fa-solid fa-microphone" style={{fontSize:"20px"}}></i>
        </div>
    )
}