import './Stage.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Stage = () => {
    const [main_hover, setMainHover] = useState(false);
    const [dropdown_hover, setDropdownHover] = useState(false);

    return(
        <div className={`main-stage ${main_hover ? `hovered-stage` : ""}`} onMouseOver={() => {setMainHover(true)}} onMouseOut={() => {setMainHover(false)}}>
            <Link className="stage" to='/stage'style={{ textDecoration: "none"}}>
                <span>무대</span>
            </Link>
            
            {main_hover &&
                <div className='dropdown-stage'>
                    <div className={`dropdown-item dropdown-item-top ${dropdown_hover===1 ? `hovered-stage` : ""}`} 
                        onMouseOver={() => {setDropdownHover(1)}} 
                        onMouseOut={() => {setDropdownHover(false)}}
                    >
                        <Link className='dropdown-item-link' to='/rental/foodtruck' style={{ textDecoration: "none"}}>무대 설치</Link>
                    </div>
                    <div className={`dropdown-item dropdown-item-bottom ${dropdown_hover===2 ? `hovered-stage` : ""}`} 
                        onMouseOver={() => {setDropdownHover(2)}} 
                        onMouseOut={() => {setDropdownHover(false)}}
                    >
                        <Link className='dropdown-item-link' to='/rental/equipment' style={{ textDecoration: "none"}}>장비 렌탈</Link>
                    </div>
                </ div>
            }
        </div>
    );
};

export default Stage;