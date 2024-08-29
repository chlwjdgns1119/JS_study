import './FoodtruckNav.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const FoodtruckNav = () => {
    const [hover, setHover] = useState(false);

    return(
        <div className="main" onMouseOver={() => {setHover(true)}} onMouseOut={() => {setHover(false)}}>
            <Link to='/Foodtruck'style={{ textDecoration: "none"}}>
                <span>푸드트럭</span>
            </Link>
            {hover && 
                <ul className="dropdown-item">
                    <li>
                        <Link to='/Foodtruck/localfestival' style={{ textDecoration: "none"}}>지역축제</Link>
                    </li>
                    <li>
                        <Link to='/Foodtruckcollegefestival' style={{ textDecoration: "none"}}>대학축제</Link>
                    </li>
                    <li>
                        <Link to='/Foodtruck/rental' style={{ textDecoration: "none"}}>차량렌탈</Link>
                    </li>
                </ul>
            }
        </div>
    );
};

export default FoodtruckNav;