import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
  root: {
    background: '#dedee0',
    '&.Mui-selected': {
      background: '#aeaeb0',
    },
  },
});

export default function ClassesNesting(props) {
  const classes = useStyles();

  return (
    <Tab
      classes={{
        root: classes.root, // class name, e.g. `classes-nesting-root-x`
        label: classes.label, // class name, e.g. `classes-nesting-label-x`
      }}
      {...props}
    />
  );
}
