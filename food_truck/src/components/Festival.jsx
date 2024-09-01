import { Link } from 'react-router-dom';
import './Festival.css'

const Festival = () => {
    return(
        <div className='main'>
            <Link to='/festival'style={{ textDecoration: "none"}}>
                <span>행사/케이터링</span>
            </Link>
        </div>
    );
};

export default Festival;