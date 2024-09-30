import "./Header.css"
import brand_logo from '../assets/brand_logo.png';
import Stage from './Stage';
import FoodStall from './FoodStall';
import Announce from './Announce';
import Community from './Community';
import Search from './Search';
import LoginButton from "./LoginButton";
import RegisterButton from "./RegisterButon";
import { RiInstagramFill } from "react-icons/ri";
import { SiNaver } from "react-icons/si";
import { FaYoutube } from "react-icons/fa";


const Header = () => {
    return(
        <header id="header">
            <div className="header_class">
                <img src={brand_logo} />
                <div className="navbar-left">
                    <div className="navbar-social-media">
                        <RiInstagramFill className="navbar-instagram-icon" onClick={()=>{window.open("https://www.instagram.com/")}} />
                        <SiNaver className="navbar-naver-icon" onClick={()=>{window.open("https://www.naver.com/")}} />
                        <FaYoutube className="navbar-youtube-icon" onClick={()=>{window.open("https://www.youtube.com/")}} />
                        {/* <img src={instagram_logo} onClick={()=>{window.open("https://www.instagram.com/")}} />
                        <img src={naverblog_logo} onClick={()=>{window.open("https://www.naver.com/")}} />
                        <img src={youtube_logo} onClick={()=>{window.open("https://www.youtube.com/")}} /> */}
                    </div>
                    <div className="navbar-right">
                        <Stage />
                        <FoodStall />
                        <Announce />
                        <Community />
                        <Search />
                        <div className="navbar-auth">   
                            <LoginButton />
                            <RegisterButton />
                        </div>
                    </div>
                </div>
            </div>        
                        
        </header>
    );
};

export default Header;
