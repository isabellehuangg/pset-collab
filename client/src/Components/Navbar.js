import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <div className="Navbar">
            <div className="Logo_Name">
                <p>I hate 240</p>
            </div>
            <div className="Links">
                <li className="link">About</li>
                <li className="link">Search Classes</li>
            </div>
        </div>
     );
}
 
export default Navbar;