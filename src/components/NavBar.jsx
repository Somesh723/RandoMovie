import "./../style/NavBar.css";
import Menu from "./../assets/menu.png";
import Cross from "./../assets/close.png"
import { Link } from "react-router-dom";
import {useState} from 'react';

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div id="mainNav">
                <Link id="logo" to='/RandoMovie/'>RandoMovie</Link>
                <div>
                    <div id="navLinks">
                        <Link className="linkItem" to="/RandoMovie/about">About Me</Link>
                        <Link className="linkItem" to="/RandoMovie/contact">Contact Me</Link>
                        <Link className="linkItem" to="/RandoMovie/directions">Directions</Link>
                    </div>
                    <button id="burgerMenu" onClick={() => setIsOpen(!isOpen)}><img src={Menu} id="menuImg" /></button>
                </div>
                {isOpen && 
                <>
                    <div className="backdrop" onClick={() => setIsOpen(false)}>
                    <button id="burgerSideMenu" ><img src={Cross} id="menuImg" /></button>
                        <div id="mobileLinks">
                            <Link className="mobileLinkItem" to="/RandoMovie/about">About Me</Link>
                            <Link className="mobileLinkItem" to="/RandoMovie/contact">Contact Me</Link>
                            <Link className="mobileLinkItem" to="/RandoMovie/directions">Directions to use</Link>
                        </div>  
                    </div>
                </>}
            </div>

        </>
    )
}

export default NavBar;