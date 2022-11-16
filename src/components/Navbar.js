import React from "react"
import {NavLink} from "react-router-dom"
import { Link } from "react-router-dom";


function Navbar (){
    return (
        <div>
            <NavLink to="/portfolio"></NavLink>
    <nav className="nav">
        <Link href="/src/components/Hero.js" className="site-tittle"> My Github Portfolio</Link>
        <ul>
            <li className="active">
                <Link href="/src/Pages/Profile.js">Profile</Link>
                </li>
                <li>
                <Link href="/Github"> Repositories</Link>
            </li>
        </ul>

    </nav>
    </div>
    );
}
export default Navbar