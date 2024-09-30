import './FoodStall.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const FoodStall = () => {

    const [main_hover, setMainHover] = useState(false);
    const [dropdown_hover, setDropdownHover] = useState(false);

    return (
       <div className={`main-foodstall ${main_hover ? `hovered-foodstall` : ""}`} onMouseOver={() => {setMainHover(true)}} onMouseOut={() => {setMainHover(false)}}>
            노점

            {main_hover &&
                <div className='dropdown-foodstall'>
                    <div className={`dropdown-item dropdown-item-top ${dropdown_hover===1 ? `hovered-foodstall` : ""}`} 
                        onMouseOver={() => {setDropdownHover(1)}} 
                        onMouseOut={() => {setDropdownHover(false)}}
                    >
                        <Link className='foodstall-dropdown-item-link' to='/foodstall/foodtruck' style={{ textDecoration: "none"}}>푸드 트럭</Link>
                    </div>
                    <div className={`dropdown-item dropdown-item-bottom ${dropdown_hover===2 ? `hovered-foodstall` : ""}`} 
                        onMouseOver={() => {setDropdownHover(2)}} 
                        onMouseOut={() => {setDropdownHover(false)}}
                    >
                        <Link className='foodstall-dropdown-item-link' to='/foodstall/tentstall' style={{ textDecoration: "none"}}>포장 마차</Link>
                    </div>
                </div>
            }            
       </div>
    );
}


export default FoodStall;