import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import Edit from './pages/Edit';
import Notfound from "./pages/Notfound";
import { useReducer, useRef } from 'react';

const mockData = [
  {
    id: 1,
    createDate: new Date().getTime(),
    emotionId: 1,
    content: "1번 일기",
  },
  {
    id: 2,
    createDate: new Date().getTime(),
    emotionId: 2,
    content: "2번 일기",
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "Update":
      return state.map((item) => 
        String(item.id) === String(action.data.id)
         ? action.data 
         : item
      );
    case "Delete":
      return state.filter(
        (item) => String(item.id) !== String(action.data.id)
      );
    default :
      return state;
  }
}

function App() {
  const [data, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  const onCreate = (createdDate, emotionId, content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  const onUpdate = (id, createdDate, emotionId, content) => {
    dispatch({
      type: "Update",
      data: {
        id,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  const onDelete = (id) => {
    dispatch({
      type: "Delete",
      id,
    })
  }

  return (
    <>
    <button onClick={()=>{
      onCreate(new Date().getTime(), 1, "일기 3번")
    }}>일기 추가 테스트</button>

    <button onClick={()=>{
      onUpdate(1, new Date().getTime(), 3, "일기 수정")
    }}>일기 수정 테스트</button>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/new" element={<New />}/>
        <Route path="/diary/:id" element={<Diary />}/>
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
