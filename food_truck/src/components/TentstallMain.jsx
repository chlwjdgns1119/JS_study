import { useState, useRef, useEffect } from 'react';
import { FaCheck } from "react-icons/fa6";
import { HiOutlineChevronDown } from "react-icons/hi";
import TentstallItemlist from './TentstallItemlist';

import './TentstallMain.css';

const TentstallMain = () => {

    const [rent_toggle, setRentToggle] = useState(false);
    const [rent_state, setRentState] = useState('전체');
    const [sort_checked, setSortchecked] = useState(1);

    const divRef = useRef(null);

    const handleClickOutside = (event) => {
        if (divRef.current && !divRef.current.contains(event.target)) {
            setRentToggle(false);
        }
    };

    const handleClickInside = (event) => {
        event.stopPropagation();
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return(
        <div className='tentstall-main'>
            <div className='tentstall-main-filter'>
                <div className='tentstall-main-filter-rent' onClick={()=>{(rent_toggle ? setRentToggle(false): setRentToggle(true))}}  ref={divRef}>
                   <div className='filter-state'>
                        {rent_state}
                        <HiOutlineChevronDown className='filter-state-down'/>
                    </div>
                    {rent_toggle && (
                        <div className='filter-dropdown'>
                            <div className='filter-dropdown-item'>전체</div>
                            <div className='filter-dropdown-item'>구매</div>
                            <div className='filter-dropdown-item'>대여</div>
                        </div>
                    )}
                </div>
                <div className='tentstall-main-filter-sort'>
                    <div 
                        className={`${(sort_checked===1) ? `sort-hovered` : ""}`}
                        onClick={()=>{setSortchecked(1)}}
                    >
                        {(sort_checked===1)&&<FaCheck className='tentstall-main-checkicon'/>}추천순
                    </div>
                    <span>|</span>
                    <div
                        className={`${(sort_checked===2) ? `sort-hovered` : ""}`}
                        onClick={()=>{setSortchecked(2)}}
                    >
                        {(sort_checked===2)&&<FaCheck className='tentstall-main-checkicon'/>}인기순
                    </div>
                    <span>|</span>
                    <div 
                        className={`${(sort_checked===3) ? `sort-hovered` : ""}`}
                        onClick={()=>{setSortchecked(3)}}
                    >
                        {(sort_checked===3)&&<FaCheck className='tentstall-main-checkicon'/>}평점순
                    </div>
                    <span>|</span>
                    <div 
                        className={`${(sort_checked===4) ? `sort-hovered` : ""}`}
                        onClick={()=>{setSortchecked(4)}}
                    >
                        {(sort_checked===4)&&<FaCheck className='tentstall-main-checkicon'/>}최신순
                    </div>
                </div>
            </div>
            <div className='tentstall-main-itemlist'>
                <TentstallItemlist />
            </div>
        </div>
    );
}

export default TentstallMain;