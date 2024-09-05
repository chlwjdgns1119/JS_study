import './Rental.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Rental = () => {
    const [hover, setHover] = useState(false);

    return(
        <div className="main" onMouseOver={() => {setHover(true)}} onMouseOut={() => {setHover(false)}}>
            <Link to='/rental'style={{ textDecoration: "none"}}>
                <span>렌탈</span>
            </Link>
            {hover && 
                <ul className="dropdown-rental">
                    <li>
                        <Link to='/rental/foodtruck' style={{ textDecoration: "none"}}>푸드트럭 렌탈</Link>
                    </li>
                    <li>
                        <Link to='/rental/machine' style={{ textDecoration: "none"}}>기계 렌탈</Link>
                    </li>
                    <li>
                        <Link to='/rental/equipment' style={{ textDecoration: "none"}}>장비 렌탈</Link>
                    </li>
                </ul>
            }
        </div>
    );
};

export default Rental;