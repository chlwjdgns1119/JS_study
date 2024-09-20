import './LoginButton.css';
import { useState } from 'react';
import LoginModal from './LoginModal';

const LoginButton = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return(
        <div className='login-button'>
            <button onClick={openModal}>로그인</button>
            <LoginModal isOpen={isModalOpen} closeModal={closeModal} />
        </div>
    );
};

export default LoginButton;