import "./trending-card.css"
import tc1 from "../../assets/tc1.jpg"
import tc2 from "../../assets/tc2.jpg"
import tc3 from "../../assets/tc3.jpg"
import tc4 from "../../assets/tc4.jpg"
export default function(){
    return(
        <>
        <div className="trending-card-holder">
            <p className="trending-header" style={{color:"wheat",fontSize:"18px"}}>Trending Albums</p>
            <div className="trendingrow">
            <div className="album-card">
                <img src={tc1} alt="" />
                <p>Evergreen songs</p>
            </div>
            <div className="album-card">
                <img src={tc2} alt="" />
                <p>Bollwood songs</p>
            </div>
            </div>
            
            <div className="trendingrow">
            <div className="album-card">
                <img src={tc3} alt="" />
                <p>Bollwood songs</p>
            </div>
            <div className="album-card">
                <img src={tc4} alt="" />
                <p>Bollwood songs</p>
            </div>
            </div>

            <div className="trendingrow">
            <div className="album-card">
                <img src={tc3} alt="" />
                <p>Bollwood songs</p>
            </div>
            <div className="album-card">
                <img src={tc4} alt="" />
                <p>Bollwood songs</p>
            </div>
            </div>
        </div>
        </>
    )
} 