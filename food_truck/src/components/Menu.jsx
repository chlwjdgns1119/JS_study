import "./Menu.css"
import { useState } from "react";
import MenuItem from "./MenuItem";
import menuItem from "../util/menuItem";

const Menu = () => {
    const [hover, setHover] = useState();



    return(
        <div className="menu-items">
            <ul className="first-items">
                <li 
                    onMouseOver={() => {setHover(true)}}
                    onMouseOut={() => {setHover(false)}}
                >
                    푸드트럭
                    <ul
                        onMouseOver={() => {setHover(true)}}
                        onMouseOut={() => {setHover(false)}}
                    >
                        {hover&&<MenuItem items={menuItem[0]}/>}
                    </ul>
                </li>
                <li>푸드트럭</li>
                <li>푸드트럭</li>
                <li>푸드트럭</li>
            </ul>
        </div>
    );
};

export default Menu;