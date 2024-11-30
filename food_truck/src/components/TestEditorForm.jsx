import { useState, useEffect } from 'react';
import { convertToRaw, convertFromRaw, EditorState, RichUtils } from 'draft-js';

import { Editor } from "react-draft-wysiwyg";
import draftToHtml from 'draftjs-to-html';
import DOMPurify from 'dompurify';
import 'draft-js/dist/Draft.css';
import './TestEditorForm.css';

const TestEditorForm = () => {
  const [editorState, setEditorState] = useState(()=>
    EditorState.createEmpty()
  );

  const htmlCode = draftToHtml(JSON.parse(localStorage.getItem("my-draft")));

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
  }

  const toolbar = {
    list: { inDropdown: true }, // list 드롭다운
    textAlign: { inDropdown: true }, // align 드롭다운
    link: { inDropdown: true }, // link 드롭다운
    history: { inDropdown: false }, // history 드롭다운 // 이미지 커스텀 업로드
}

  const sanitizedContent = DOMPurify.sanitize(htmlCode);

  return (
    <div>
      <div>
        <button onClick={saveContent}>저장입니다</button>
        <button onClick={toggleBold}>BOLD</button>
        <button onClick={getStateByHtml}>html코드 출력 {console.log(htmlCode)}</button>
        <Editor
          editorClassName="editor"
          toolbarClassName="toolbar-class"
          toolbar={toolbar} 
          placeholder="내용을 작성해주세요."
          // 한국어 설정
          localization={{
              locale: 'ko',
          }}
          editorState={editorState} 
          onChange={setEditorState} 
        />
        <div dangerouslySetInnerHTML={{ __html: sanitizedContent }} />
        
      </div>
      <Editor editorClassName="loaded_state" editorState={editorState} />
    </div>
  )
};

export default TestEditorForm;