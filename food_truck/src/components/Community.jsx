import './Community.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Community = () => {

    const [main_hover, setMainHover] = useState(false);
    const [dropdown_hover, setDropdownHover] = useState(false);

    return (
       <div className={`main-community ${main_hover ? `hovered-community` : ""}`} onMouseOver={() => {setMainHover(true)}} onMouseOut={() => {setMainHover(false)}}>
            커뮤니티

            {main_hover &&
                <div className='dropdown-community'>
                    <div className={`dropdown-item dropdown-item-top ${dropdown_hover===1 ? `hovered-community` : ""}`} 
                        onMouseOver={() => {setDropdownHover(1)}} 
                        onMouseOut={() => {setDropdownHover(false)}}
                    >
                        <Link className='community-dropdown-item-link' to='/community/free' style={{ textDecoration: "none"}}>자유</Link>
                    </div>
                    <div className={`dropdown-item ${dropdown_hover===2 ? `hovered-community` : ""}`} 
                        onMouseOver={() => {setDropdownHover(2)}} 
                        onMouseOut={() => {setDropdownHover(false)}}
                    >
                        <Link className='community-dropdown-item-link' to='/community/promote' style={{ textDecoration: "none"}}>홍보</Link>
                    </div>
                    <div className={`dropdown-item ${dropdown_hover===3 ? `hovered-community` : ""}`} 
                        onMouseOver={() => {setDropdownHover(3)}} 
                        onMouseOut={() => {setDropdownHover(false)}}
                    >
                        <Link className='community-dropdown-item-link' to='/community/marketplace' style={{ textDecoration: "none"}}>거래</Link>
                    </div>
                    <div className={`dropdown-item dropdown-item-bottom ${dropdown_hover===4 ? `hovered-community` : ""}`} 
                        onMouseOver={() => {setDropdownHover(4)}} 
                        onMouseOut={() => {setDropdownHover(false)}}
                    >
                        <Link className='community-dropdown-item-link' to='/community/recipe' style={{ textDecoration: "none"}}>레시피</Link>
                    </div>
                </div>
            }            
       </div>
    );
};

export default Community;