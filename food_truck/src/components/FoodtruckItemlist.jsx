import './FoodtruckItemlist.css';
import './FoodtruckItem';
import FoodtruckItem from './FoodtruckItem';

const FoodtruckItemlist = () => {
    return(
        <div className='fodotruck-main-itemlist'>
            <FoodtruckItem />
            <FoodtruckItem />
            <FoodtruckItem />
            <FoodtruckItem />
        </div>
    );
}

export default FoodtruckItemlist;