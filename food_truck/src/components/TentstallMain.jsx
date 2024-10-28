import TentstallItemlist from './TentstallItemlist';
import './TentstallMain.css';

const TentstallMain = () => {
    return(
        <div className='tentstall-main'>
            <div className='tentstall-main-filter'>
                <div className='tentstall-main-filter-rent'>
                    <div>추천순</div>
                    <span>|</span>
                    <div>인기순</div>
                    <div>평점순</div>
                    <div>최신순</div>
                </div>
                <div className='tentstall-main-filter-sort'>

                </div>
            </div>
            <div className='tentstall-main-itemlist'>
                <TentstallItemlist />
            </div>
        </div>
    );
}

export default TentstallMain;