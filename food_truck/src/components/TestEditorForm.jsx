/* import { useState, useEffect } from 'react';
import { convertToRaw, convertFromRaw, EditorState, RichUtils } from 'draft-js';
import "../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from 'draftjs-to-html';
import DOMPurify from 'dompurify';
import './TestEditorForm.css';

const TestEditorForm = () => {
  const [editorState, setEditorState] = useState(()=>
    EditorState.createEmpty()
  );

  

  useEffect(() => {
    const raw = localStorage.getItem("my-draft");

    if (raw) {
      const contentState = convertFromRaw(JSON.parse(raw));
      const newEditorState = EditorState.createWithContent(contentState);
      setEditorState(newEditorState);
    }
  }, []);

  const toggleBold = (event) => {
    event.preventDefault()
    setEditorState(RichUtils.toggleInlineStyle(editorState, 'BOLD'))
  }

  const saveContent = () => {
    const contentState = editorState.getCurrentContent();
    const raw = convertToRaw(contentState);
    console.log(raw);
    localStorage.setItem("my-draft", JSON.stringify(raw, null, 2))
  }

  const getStateByHtml = () => {
    console.log(htmlCode);

  const htmlCode = draftToHtml(JSON.parse(localStorage.getItem("my-draft")));

  const sanitizedContent = DOMPurify.sanitize(htmlCode);
  }

  const toolbar = {
    list: { inDropdown: true }, // list 드롭다운
    textAlign: { inDropdown: true }, // align 드롭다운
    link: { inDropdown: true }, // link 드롭다운
    history: { inDropdown: false }, // history 드롭다운 // 이미지 커스텀 업로드
}

  

  return (
    <div>
      <div>
        <Editor
          editorClassName="editor"
          toolbarClassName="toolbar-class"
          toolbar={toolbar} 
          placeholder="내용을 작성해주세요."
          localization={{
              locale: 'ko',
          }}
          editorState={editorState} 
          onChange={setEditorState} 
        />
        <div dangerouslySetInnerHTML={{ __html: sanitizedContent }} />
        
      </div>
    </div>
  )
};

export default TestEditorForm; */

import { useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './TestEditorForm.css';
import { convertToRaw, EditorState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import DOMPurify from 'dompurify';
import TestGenerateTag from './TestGenerateTag';

const TestEditorForm = () => {
  // useState로 상태관리하기 초기값은 EditorState.createEmpty()
  // EditorState의 비어있는 ContentState 기본 구성으로 새 개체를 반환 => 이렇게 안하면 상태 값을 나중에 변경할 수 없음.
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [tagState, setTagState] = useState([]);
  const [pageState, setPageState] = useState({});
  const [showState, setShow] = useState(false);

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };

  const saveContent = () => {
    const contentState = editorState.getCurrentContent();
    const raw = convertToRaw(contentState);
    const sanitizedContent = DOMPurify.sanitize(draftToHtml(raw));
    setTagState([
      ...tagState,
      sanitizedContent,
    ])
  }

  const toolbar = {
    options: ['inline', 'fontSize', 'colorPicker', 'emoji', 'list', 'textAlign'],
    inline: {
      options: ['bold', 'italic', 'underline', 'strikethrough'],
    },
    fontSize: {
      options: [8, 9, 10, 11, 12, 14, 16, 18, 24, 30, 36, 48, 60, 72, 96],
    },
    list: {
      inDropdown: true,
      options: ['unordered', 'ordered'],
    },
    textAlign: { inDropdown: true },
  }

  const saveTag = (idx, tag, style) => {
    setPageState({...pageState, [idx]: [tag, style]})
  }

  const printPageState = () => {
    setShow(true);
  }

  return (
    <div className='TestEditorForm-main'>
      <TestGenerateTag tag_arr={tagState} saveTag={saveTag}/>
      <button onClick={saveContent}>생성하기</button>
      <Editor
        // 에디터와 툴바 모두에 적용되는 클래스
        wrapperClassName="wrapper-class"
        // 에디터 주변에 적용된 클래스
        editorClassName="editor"
        // 툴바 주위에 적용된 클래스
        toolbarClassName="toolbar-class"
        // 툴바 설정
        toolbar={toolbar} 
        placeholder="내용을 작성해주세요."
        // 한국어 설정
        localization={{
          locale: 'ko',
        }}
        // 초기값 설정
        editorState={editorState}
        // 에디터의 값이 변경될 때마다 onEditorStateChange 호출
        onEditorStateChange={onEditorStateChange}
      />
      <button onClick={printPageState}>저장된 페이지 출력하기</button>
      {showState && <div className="generate-savPage">
        {Object.values(pageState).map((item, idx) => {
          const styleString = Object.entries(item[1])
                              .map(([key, value]) => {
                                if(key == 'left' || key == 'top'){
                                  return (`${key}: ${value}px`)
                                }
                                else{
                                  return (`${key}: ${value}`)
                                }
                              })
                              .join('; ');
          console.log(item[1])
          return(
            <div key={idx} dangerouslySetInnerHTML={{__html: `<div style='${styleString}'>${item[0]}</div>`}}/>
          )
        })}
      </div>}
    </div>
  );
};

export default TestEditorForm;