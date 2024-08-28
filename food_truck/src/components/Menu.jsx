import "./Menu.css"
import { useState } from "react";

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
                        <li>{hover && 'true입니다'}</li>
                        <li>{hover && 'true입니다'}</li>
                        <li>{hover && 'true입니다'}</li>
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