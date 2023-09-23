import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <div className="Navbar">
            <div className="Logo_Name">
                <p>I hate 240</p>
            </div>
            <div className="Links">
                <a className="link" href="/">About</a>
                <a href="/search" className="link">Search Classes</a>
            </div>
        </div>
     );
}
 
export default Navbar;