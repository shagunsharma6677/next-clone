import { Link } from "react-router-dom"
import "./Navbar.css"
export default function Navbar() {
    return <>
        <div className="max-cont">
            <nav>
                <ul className="container flex nav-ul">
                    <li><Link to="/"><img src="" alt="logo" /></Link></li>
                    <li><Link to="/mac">Mac</Link></li>
                    <li><Link to="ipad">iPad</Link></li>
                    <li><Link to="iphone">iPhone</Link></li>
                    <li><Link to="watch">Watch</Link></li>
                    <li><Link to="tv">TV</Link></li>
                    <li><Link to="music">Music</Link></li>
                    <li><Link to="support">Support</Link></li>
                    <li><Link to="whereToBuy">Where to buy</Link></li>
                </ul>
            </nav>
        </div>
    
    </>
}