import './Market.css';
import { Link } from 'react-router-dom';

const Market = () => {
    return(
        <div className='main'>
            <Link to='/market'style={{ textDecoration: "none"}}>
                <span>장터</span>
            </Link>
        </div>
    )
}

export default Market;