/* const Button = (props) => {
    console.log(props);
    return( 
        <button style={{color: props.color}}>
            {props.text} - {props.color.toUpperCase()}
        </button>
    );
};

Button.defaultProps = {
    color: "black",
};

export default Button; */

// 구조분해 할당으로 바로 받아올 수도 있다.
const Button = ({text, color, children}) => {
    const onClickButton = (e) => {
        console.log(e);
        console.log(text);
    }
    return( 
        <button 
            onClick={onClickButton}
        style={{color: color}}>
            {text} - {color.toUpperCase()}
            {children}
        </button>
    );
};

Button.defaultProps = {
    color: "black",
};

export default Button;