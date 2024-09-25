import './FoodStall.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const FoodStall = () => {

    const [main_hover, setMainHover] = useState(false);
    const [dropdown_hover, setDropdownHover] = useState(false);

    return (
       <div className={`main-foodstall ${main_hover ? `hovered-foodstall` : ""}`} onMouseOver={() => {setMainHover(true)}} onMouseOut={() => {setMainHover(false)}}>
            <span>무대</span>
            
       </div> 
    );
}


export default FoodStall;