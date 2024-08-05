import { useReducer } from "react";

// reducer: 변환기
// 상태를 실제 변환시키는 역할을 한다.
function reducer(state, action) {
    console.log(state, action);
    /* if(action.type === "INCREASE"){
        return state + action.data;
    }
    else if(action.type === "DECREASE"){
        return state - action.data;
    } */
   switch(action.type){
     case 'INCREASE':  return state + action.data;
     case 'DECREASE':  return state - action.data;
     default: 
        return state;
   }
}

const Exam = () => {
    const  [state, dispatch] = useReducer(reducer, 0);

    const onClickPlus = () => {
        dispatch({
            type: "INCREASE",
            data: 1,
        })
    }

    const onClickMinus = () => {
        dispatch({
            type: "DECREASE",
            data: 1,
        })
    }

    return (
        <div>
            <h1>0</h1>
            <button onClick={onClickPlus}>+</button>
            <button onClick={onClickMinus}>-</button>
        </div>
    );
};

export default Exam;