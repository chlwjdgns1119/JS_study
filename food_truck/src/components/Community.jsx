import './Community.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Community = () => {
    const [hover, setHover] = useState(false);

    return (
        <div className={`main ${hover ? `hovered` : ""}`} onMouseOver={() => {setHover(true)}} onMouseOut={() => {setHover(false)}}>
            <Link className="community" to='/community'style={{ textDecoration: "none"}}>
                <span>커뮤니티</span>
            </Link>
            {hover && 
                <ul className="dropdown-community">
                    <li>
                        <Link to='/community/free' style={{ textDecoration: "none"}}>자유</Link>
                    </li>
                    <li>
                        <Link to='/community/purchase' style={{ textDecoration: "none"}}>구매</Link>
                    </li>
                    <li>
                        <Link to='/community/sales' style={{ textDecoration: "none"}}>판매</Link>
                    </li>
                    <li>
                        <Link to='/community/marketing' style={{ textDecoration: "none"}}>홍보</Link>
                    </li>
                </ul>
            }
        </div>
    );
};

export default Community;