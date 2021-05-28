import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { useDispatch } from 'react-redux';
import MyTab from '../../components/Tabs/Tab';
import TabBody from '../../components/Tabs/TabBody';
import { resetPageData, setCurrentView } from '../../store/actions';
import { getAllData } from '../../utils';
import Page from '../../components/Page/Page';

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: '100vh',
    overflow: 'auto',
    paddingBottom: '70px',
    marginBottom: '-70px',
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  addpage: {
    position: 'absolute',
    bottom: '80px',
    right: '15px',
  },
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [currentTab, setCurrentTab] = React.useState(0);
  const [allPages, setAllPages] = React.useState(getAllData());
  const dispatch = useDispatch();

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={currentTab}
        onChange={(event, newTabId) => setCurrentTab(newTabId)}
        className={classes.tabs}
        TabIndicatorProps={{
          style: {
            display: 'none',
          },
        }}
      >
        {allPages.map((page, index) => (
          <MyTab
            key={`tab-${index}`}
            label={page.title}
            {...a11yProps(index)}
          />
        ))}
      </Tabs>
      {allPages.map((page, index) => (
        <TabBody
          key={`body-${index}`}
          className={classes.tab}
          value={currentTab}
          index={index}
        >
          <Page {...page} />
        </TabBody>
      ))}
      <div className={classes.addpage}>
        <Button
          onClick={(_) => {
            dispatch(setCurrentView('editorView'));
            dispatch(resetPageData());
          }}
          variant="contained"
          endIcon={<AddIcon />}
        >
          Add New Page
        </Button>
      </div>
    </div>
  );
}
