import './Content.css'
import Itemlist from './Itemlist';

const Content = () => {
    return(
        <div className='content'>
            <div className='itemlist'>
                <div className='itemlist-title'>Hot한 푸드트럭</div>
                <Itemlist />
            </div>
            <div className='itemlist'>
                <div className='itemlist-title'>Hot한 푸드트럭</div>
                <Itemlist />
            </div>
            <div className='itemlist'>
                <div className='itemlist-title'>Hot한 푸드트럭</div>
                <Itemlist />
            </div>
        </div>
    );
};

export default Content;
