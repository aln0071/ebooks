import React from 'react';
import { useDispatch } from 'react-redux';
import styles from '../../styles.scss';
import { setCurrentView, setPage } from '../../store/actions';

export default function Page({ id, title, html }) {
  const dispatch = useDispatch();
  return (
    <div>
      <h1 className={styles.pageHeader}>
        {title}
        {' '}
        <button
          onClick={(_) => {
            dispatch(setPage({ id, title, html }));
            dispatch(setCurrentView('editorView'));
          }}
        >
          Edit
        </button>
      </h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
