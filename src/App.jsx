import React, { useState } from 'react';
import './styles.scss';
import RichTextEditor, {
  createEmptyValue,
  getTextAlignClassName,
} from 'react-rte/lib/RichTextEditor';

function App() {
  const [textValue, setTextValue] = useState(createEmptyValue());
  return (
    <div>
      <div>hello world</div>
      <div>
        <RichTextEditor
          value={textValue}
          onChange={(value) => setTextValue(value)}
          blockStyleFn={getTextAlignClassName}
        />
      </div>
    </div>
  );
}

export default App;
