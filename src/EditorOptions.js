import { RichUtils } from 'draft-js';

export default {
  bold() {
    this.editorRef.current.focus();
    this.setEditorState(RichUtils.toggleInlineStyle(this.editorState, 'BOLD'));
  },
};
