import "./navbar.css";

export default function () {
    return(
        <>
        <div className="navbar-holder">
            <div className="icon-holder">
            <i class="fa-sharp fa-solid fa-house navbar-icons"></i>
            </div>
            <div className="icon-holder">
            <i class="fa-sharp fa-solid fa-music navbar-icons"></i>
            </div>
            <div className="icon-holder">
            <i class="fa-sharp fa-solid fa-square-plus navbar-icons"></i>
            </div>
            <div className="icon-holder">
            <i class="fa-sharp fa-solid fa-user navbar-icons"></i>
            </div>
            <div className="icon-holder">
            <i class="fa-sharp fa-solid fa-gear navbar-icons"></i>
            </div>
        </div>
        </>
    )
}