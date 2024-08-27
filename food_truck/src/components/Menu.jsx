import "./Menu.css"
import { useState } from "react";

const Menu = () => {
    const [hover, setHover] = useState();



    return(
        <div className="menu-items">
            <ul>
            <li 
                onMouseOver={() => {setHover(true)}}
                onMouseOut={() => {setHover(false)}}
            >
                푸드트럭
                <p>{hover && 'true입니다'}</p>
            </li>
            <li>푸드트럭</li>
            <li>푸드트럭</li>
            <li>푸드트럭</li>
        </ul>
        </div>
    );
};

export default Menu;