import { useState } from 'react';

const RichTextEditor = () => {
  const [text, setText] = useState("이 텍스트의 일부를 볼드체로 바꿔보세요!");
  const [isBold, setIsBold] = useState(false);

  // 텍스트 선택된 범위 가져오기
  const getSelection = () => {
    const selection = window.getSelection();
    const selectedText = selection.toString();
    console.log('선택된 텍스트:', selectedText);
    return selection;
  };

  // 스타일 토글
  const toggleBold = () => {
    const selection = getSelection();
    if (!selection.rangeCount) return;
    
    const range = selection.getRangeAt(0);
    const span = document.createElement('span');
    span.style.fontWeight = isBold ? 'normal' : 'bold';
    span.textContent = selection.toString();
    
    // 선택된 텍스트에 스타일 적용
    range.deleteContents();
    range.insertNode(span);

    setIsBold(!isBold);
  };

  // 텍스트 편집을 위한 contentEditable 적용
  const handleTextChange = (event) => {
    setText(event.target.innerText);
  };

  return (
    <div style={{ position: 'relative', margin: '20px' }}>
      <button onClick={toggleBold}>{isBold ? 'Unbold' : 'Bold'}</button>
      <div
        contentEditable
        onInput={handleTextChange}
        style={{
          border: '1px solid #ccc',
          padding: '10px',
          minHeight: '100px',
          fontFamily: 'Arial, sans-serif',
          fontSize: '16px',
          whiteSpace: 'pre-wrap',
        }}
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </div>
  );
};

export default RichTextEditor;