import { Button, TextField } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Editor from '../../components/Editor';
import styles from '../../styles.scss';
import { setCurrentView, setPageTitle, setPageId } from '../../store/actions';
import { savePage, getNewPageId } from '../../utils';

export default function EditView() {
  const dispatch = useDispatch();
  const pageTitle = useSelector((state) => state.page.title);
  const page = useSelector((state) => state.page);

  const saveThisPage = () => {
    if (page.id === -1) {
      const newPageId = getNewPageId();
      savePage({
        ...page,
        id: newPageId,
      });
      dispatch(setPageId(newPageId));
    } else {
      savePage(page);
    }
  };

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
          value={pageTitle}
          onChange={(event) => {
            dispatch(setPageTitle(event.target.value));
          }}
        />
      </div>
      <Editor />
      <div className={styles.editorButtonsContainer}>
        <Button onClick={(_) => saveThisPage()}>Save Page</Button>
        <Button onClick={(_) => dispatch(setCurrentView('bookView'))}>
          Back to Book
        </Button>
      </div>
    </div>
  );
}
