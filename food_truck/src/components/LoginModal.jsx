import './LoginModal.css';

const LoginModal = ({ isOpen, closeModal}) => {
    return(
        <div style={{display: isOpen ? "block" : "none"}}>
            <div className='login_modal-window'>
                모달입니다.
            </div>
        </div>
    );
};

export default LoginModal