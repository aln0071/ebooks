import React, { useRef, useState } from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';
import 'draft-js/dist/Draft.css';
import editorOptions from './EditorOptions';

function App() {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());
  const editorRef = useRef(null);

  const handleKeyCommand = (command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);
      return 'handled';
    }
    return 'not-handled';
  };

  const setEditorOption = (type) => {
    editorOptions[type].call({
      editorState,
      setEditorState,
      editorRef,
    });
  };

  return (
    <div>
      <div>hello world</div>
      <button
        onClick={() => {
          // editorRef.current.focus()
          // setEditorState(RichUtils.toggleInlineStyle(editorState, 'BOLD'))
        }}
      >
        focus
      </button>
      <div>
        <button onClick={() => setEditorOption('bold')}>Bold</button>
        <Editor
          ref={editorRef}
          editorState={editorState}
          handleKeyCommand={handleKeyCommand}
          onChange={setEditorState}
        />
      </div>
    </div>
  );
}

export default App;
