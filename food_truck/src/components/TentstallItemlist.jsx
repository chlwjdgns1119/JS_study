import './TentstallItemlist.css';
import TentstallItem from './TentstallItem';

const TentstallItemlist = () => {

    return(
        <div className='tentstall-itemlist'>
            <TentstallItem className='tentstall-itemlist-container' score={4.4} reviewer={189}/>
            <TentstallItem className='tentstall-itemlist-container' score={4.4} reviewer={189}/>
            <TentstallItem className='tentstall-itemlist-container' score={4.4} reviewer={189}/>
            <TentstallItem className='tentstall-itemlist-container' score={4.4} reviewer={189}/>
            <TentstallItem className='tentstall-itemlist-container' score={4.4} reviewer={189}/>
            <TentstallItem className='tentstall-itemlist-container' score={4.4} reviewer={189}/>
            <TentstallItem className='tentstall-itemlist-container' score={4.4} reviewer={189}/>
            <TentstallItem className='tentstall-itemlist-container' score={4.4} reviewer={189}/>
            <TentstallItem className='tentstall-itemlist-container' score={4.4} reviewer={189}/>
        </div>
    );
};

export default TentstallItemlist;