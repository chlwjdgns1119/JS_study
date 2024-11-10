import { useState, useEffect } from 'react';
import { convertToRaw, convertFromRaw, Editor, EditorState, RichUtils } from 'draft-js';
import 'draft-js/dist/Draft.css';

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

  const toggleBold = event => {
    event.preventDefault()
    setEditorState(RichUtils.toggleInlineStyle(editorState, 'BOLD'))
  }

  const saveContent = () => {
    const contentState = editorState.getCurrentContent();
    const raw = convertToRaw(contentState);
    console.log(raw);
    localStorage.setItem('my-draft', JSON.stringify(raw, null, 2))
  }

  return (
    <div>
      <button onClick={saveContent}>저장입니다</button>
      <button onClick={toggleBold}>BOLD</button>
      <Editor editorState={editorState} onChange={setEditorState} />
    </div>
  )
};

export default TestEditorForm;