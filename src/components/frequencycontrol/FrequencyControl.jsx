import "./fc.css";
import React from "react";

export default function FrequencyControl() {
    let bassCount = React.useRef(null);
    let [cor,setCor] = React.useState("");
    let bassHeight = React.useRef(null)
    let prevy = ""
function myFunction(e){

    var x = e.clientX;
  var y = e.clientY;
let height = bassHeight.current.style.height;
let result = height.substr(0,height.length-1);
let newRes = ""
if(bassHeight.current.style.height === "100%"){
    if(y>=prevy){
        newRes = Number(result) - 1;
        bassHeight.current.style.height = newRes.toString() + "%";
        prevy = y
    }
    console.log(y,prevy)
    return;
}
if(prevy <= y){
    newRes = Number(result) - 1;
 bassHeight.current.style.height = newRes.toString() + "%";
 prevy = y
}else{
    newRes = Number(result) + 1;
 bassHeight.current.style.height = newRes.toString() + "%";
 prevy = y
}

}

function getCor(){
   bassCount.current.addEventListener("mousemove", myFunction);
}


function clearCor(){
    bassCount.current.removeEventListener("mousemove", myFunction)
}
    return(
        <>
       
        <div className="fc-bg">
            <div onMouseDown={getCor} onMouseUp={clearCor} ref={bassCount}  className="bass valume">
                <div ref={bassHeight} className="bass-vol volume-inside" style={{background:" #FB2576",height:"10%"}}></div>
            </div>
            <div className="sub-bass valume">
                <div className="sub-bass-vol volume-inside " style={{background:"#59C1BD",height:"70%"}}></div>
            </div>
            <div className="mids valume">
                <div className="mids-vol volume-inside" style={{background:"#FFE15D",height:"30%"}}>

                </div>
            </div>
            <div className="highs valume">
                <div className="high-vol volume-inside" style={{background:"#6F38C5",height:"60%"}}></div>
            </div>
            <div className="low-mids valume">
                <div className="low-mids-vol volume-inside" style={{background:"#FD841F",height:"90%"}}></div>
            </div>
        </div>
        </>
    )
}