import { Button, TextField } from '@material-ui/core';
import React from 'react';
import Editor from '../../components/Editor';
import styles from '../../styles.scss';

export default function EditView() {
  return (
    <div className={styles.editorContainer}>
      <div>
        <h3 className={styles.editorTitle}>Page Title</h3>
        <TextField
          id="outlined-full-width"
          label=""
          placeholder="Page Title"
          fullWidth
          margin="normal"
          variant="outlined"
        />
      </div>
      <Editor />
      <div className={styles.editorButtonsContainer}>
        <Button>Save Page</Button>
        <Button>Back to Book</Button>
      </div>
    </div>
  );
}
