import { useState, useRef } from "react";

// 간단한 회원가입 폼
// 이름, 생년월일, 국적, 자기소개

const Register=()=>{

    const [input, setInput] = useState({
        name : "",
        birth: "",
        country: "",
        bio: "",
    });

    const countRef = useRef(0);
    const inputRef = useRef();

    const onSubmit = () => {
        if(input.name === ""){
            // 이름을 입력하는 dom 요소에 focus
            inputRef.current.focus();
            console.log(inputRef.current);  
        }
    } 

    const onChange = (e) => {
        setInput({
            ...input,
            [e.target.name] : e.target.value,
        });
    };

    return (
        <div>
            <div>
                <input 
                    ref={inputRef}
                    name="name"
                    value={input.name}
                    onChange={onChange} 
                    placeholder={"이름"} 
                />
                {input.name}
            </div>
        
            <div>
                <input
                    name="birth"
                    value={input.birth}
                    type="date"
                    onChange={onChange}
                />
                {input.birth}
            </div>

            <div>
                <select 
                    name="country"
                    value={input.country} 
                    onChange={onChange}>
                    <option value=""></option>
                    <option value="kr">한국</option>
                    <option value="us">미국</option>
                    <option value="uk">영국</option>
                </select>
                {input.country}
            </div>

            <div>
                <textarea 
                    name="bio"
                    value={input.bio} 
                    onChange={onChange} />
                {input.bio}
            </div>

            <button onClick={onSubmit}>제출</button>
        </div>
    );
};

export default Register;


