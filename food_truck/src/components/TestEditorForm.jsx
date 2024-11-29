import { useState, useEffect } from 'react';
import { convertToRaw, convertFromRaw, Editor, EditorState, RichUtils } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import DOMPurify from 'dompurify';
import 'draft-js/dist/Draft.css';

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

  const sanitizedContent = DOMPurify.sanitize(htmlCode);

  return (
    <div>
      <button onClick={saveContent}>저장입니다</button>
      <button onClick={toggleBold}>BOLD</button>
      <button onClick={getStateByHtml}>html코드 출력 {console.log(htmlCode)}</button>
      <Editor editorState={editorState} onChange={setEditorState} />
      <div dangerouslySetInnerHTML={{ __html: sanitizedContent }} />
    </div>
  )
};

export default TestEditorForm;