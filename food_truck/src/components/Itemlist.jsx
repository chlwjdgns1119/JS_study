import './Itemlist.css';
import Item from './Item';

const Itemlist = () => {
    
    return(
        <div className='itemlist-class'>
            <Item score={ 3.5 } />
            <Item />
            <Item />
            <Item />
            <Item />
        </div>
    );
};

export default Itemlist;