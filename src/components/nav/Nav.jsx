import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa"

function Nav(){
    return(
        <div className="nav">

                <ul>
                    <li><Link to="/"><FaHome/></Link></li>
                </ul>

        </div>
    )
}

export default Nav;