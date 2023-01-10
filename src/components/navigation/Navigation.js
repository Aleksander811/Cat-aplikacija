import {Link} from "react-router-dom";

const Navigation = ()=> {
    return (
        <nav>
            <ul className="nav nav-pills nav-fill">
                <li className="nav-item">
                    <Link to={"/"} className="nav-link">Pradinis</Link>
                </li>
                <li className="nav-item">
                    <Link to={"/about"} className="nav-link">Apie projektą</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation