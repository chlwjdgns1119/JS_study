import { useState } from 'react';
import TentstallItemlist from './TentstallItemlist';
import './TentstallMain.css';

const TentstallMain = () => {

    const [sort_checked, setSortchecked] = useState(1);

    return(
        <div className='tentstall-main'>
            <div className='tentstall-main-filter'>
                <div className='tentstall-main-filter-rent'>
                    
                </div>
                <div className='tentstall-main-filter-sort'>
                    <div 
                        className={`${(sort_checked===1) ? `sort-hovered` : ""}`}
                        onClick={()=>{setSortchecked(1)}}
                    >
                        {(sort_checked===1)&&`c`}추천순
                    </div>
                    <span>|</span>
                    <div
                        className={`${(sort_checked===2) ? `sort-hovered` : ""}`}
                        onClick={()=>{setSortchecked(2)}}
                    >
                        인기순
                    </div>
                    <span>|</span>
                    <div 
                        className={`${(sort_checked===3) ? `sort-hovered` : ""}`}
                        onClick={()=>{setSortchecked(3)}}
                    >
                        평점순
                    </div>
                    <span>|</span>
                    <div 
                        className={`${(sort_checked===4) ? `sort-hovered` : ""}`}
                        onClick={()=>{setSortchecked(4)}}
                    >
                        최신순
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