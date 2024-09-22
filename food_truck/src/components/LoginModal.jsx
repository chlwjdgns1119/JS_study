import './LoginModal.css';
import brand_logo from '../assets/brand_logo.png';
import { useRef } from 'react';
import { FcGoogle } from "react-icons/fc";
import { RiKakaoTalkFill } from "react-icons/ri";
import { SiNaver } from "react-icons/si";



const LoginModal = ({ isOpen, closeModal}) => {
    const modalBackground = useRef();

    return(
        <div style={{display: isOpen ? "block" : "none"}}>
            <div className='login_modal-overlay' ref={modalBackground} onClick={e => {
                if(e.target === modalBackground.current){
                    closeModal();
                }
            }}
            >
                <div className='login_modal-window'>
                    <img src={brand_logo} />
                    <form action="" method='post'>
                        <input type="text" placeholder="  이메일" />
                        <input type="text" placeholder="  비밀번호"/>
                        <button>로그인</button>
                    </form>
                    <div className='login_modal-singIn-modal'>
                        <a href='id'>아이디(이메일) 찾기</a>
                        <span>|</span>
                        <a href='password'>비밀번호 찾기</a>
                        <span>|</span>
                        <a href='register'>회원가입</a>
                    </div>
                    <div className='login_modal-social-login'>
                        <hr className='login_modal-in_line'/>
                        <span className='login_modal-social-login_title'>소셜 로그인</span>
                        <div className='login_modal-social-login-button'>
                            <button className='login_modal-kakaotalk-login-button'>
                                <RiKakaoTalkFill className='login_modal-kakaotalk-login-img'/>
                            </button>
                            <button className='login_modal-google-login-button'>
                                <FcGoogle className='login_modal-google-login-img'/>
                            </button>
                            <button className='login_modal-naver-login-button'>
                                <SiNaver className='login_modal-naver-login-img'/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginModal