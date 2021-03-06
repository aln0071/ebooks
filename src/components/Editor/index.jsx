import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RichTextEditor, {
  getTextAlignClassName,
} from 'react-rte/lib/RichTextEditor';
import { setPageData, setPageHtml } from '../../store/actions';

const rteToolbarConfig = {
  display: [
    'HISTORY_BUTTONS',
    'BLOCK_TYPE_DROPDOWN',
    'INLINE_STYLE_BUTTONS',
    'BLOCK_ALIGNMENT_BUTTONS',
    'BLOCK_TYPE_BUTTONS',
  ],
  INLINE_STYLE_BUTTONS: [
    { label: 'Bold', style: 'BOLD', className: 'custom-css-class' },
    { label: 'Italic', style: 'ITALIC' },
    { label: 'Underline', style: 'UNDERLINE' },
  ],
  BLOCK_TYPE_DROPDOWN: [
    { label: 'Paragraph', style: 'unstyled' },
    { label: 'Heading Large', style: 'header-one' },
    { label: 'Heading Medium', style: 'header-two' },
    { label: 'Heading Small', style: 'header-three' },
  ],
  BLOCK_TYPE_BUTTONS: [
    { label: 'UL', style: 'unordered-list-item' },
    { label: 'OL', style: 'ordered-list-item' },
  ],
  BLOCK_ALIGNMENT_BUTTONS: [
    { label: 'Align Left', style: 'ALIGN_LEFT' },
    { label: 'Align Center', style: 'ALIGN_CENTER' },
    { label: 'Align Right', style: 'ALIGN_RIGHT' },
    { label: 'Align Justify', style: 'ALIGN_JUSTIFY' },
  ],
};

function Editor() {
  const textValue = useSelector((state) => state.page.data);
  const dispatch = useDispatch();
  const setTextValue = (newData) => {
    dispatch(setPageData(newData));
    dispatch(setPageHtml(newData.toString('html')));
  };
  return (
    <div>
      <RichTextEditor
        value={textValue}
        onChange={setTextValue}
        blockStyleFn={getTextAlignClassName}
        toolbarConfig={rteToolbarConfig}
      />
    </div>
  );
}

export default Editor;
