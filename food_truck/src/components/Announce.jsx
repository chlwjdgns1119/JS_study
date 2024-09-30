import './Announce.css';
import { useState } from 'react';

const Announce = () => {

    const [main_hover, setMainHover] = useState(false);

    return (
       <div className={`main-announce ${main_hover ? `hovered-announce` : ""}`} onMouseOver={() => {setMainHover(true)}} onMouseOut={() => {setMainHover(false)}}>
            입점&케이터링     
       </div>
    );
}


export default Announce;