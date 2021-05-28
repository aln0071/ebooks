import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { useDispatch } from 'react-redux';
import MyTab from '../../components/Tabs/Tab';
import TabBody from '../../components/Tabs/TabBody';
import { setCurrentView } from '../../store/actions';

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
  const [value, setValue] = React.useState(0);
  const dispatch = useDispatch();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        className={classes.tabs}
        TabIndicatorProps={{
          style: {
            display: 'none',
          },
        }}
      >
        <MyTab label="Item One" {...a11yProps(0)} />
        <Tab label="Item Two" {...a11yProps(1)} />
        <Tab label="Item Three" {...a11yProps(2)} />
        <Tab label="Item Four" {...a11yProps(3)} />
        <Tab label="Item Five" {...a11yProps(4)} />
        <Tab label="Item Six" {...a11yProps(5)} />
        <Tab label="Item Seven" {...a11yProps(6)} />
        <Tab label="Item Seven" {...a11yProps(6)} />
        <Tab label="Item Seven" {...a11yProps(6)} />
        <Tab label="Item Seven" {...a11yProps(6)} />
        <Tab label="Item Seven" {...a11yProps(6)} />
        <Tab label="Item Seven" {...a11yProps(6)} />
        <Tab label="Item Seven" {...a11yProps(6)} />
        <Tab label="Item Seven" {...a11yProps(6)} />
        <Tab label="Item Seven" {...a11yProps(6)} />
        <Tab label="Item Seven" {...a11yProps(6)} />
        <Tab label="Item Seven" {...a11yProps(6)} />
        <Tab label="Item Seven" {...a11yProps(6)} />
        <Tab label="Item Seven" {...a11yProps(6)} />
        <Tab label="Item Seven" {...a11yProps(6)} />
        <Tab label="Item Seven" {...a11yProps(6)} />
        <Tab label="Item Seven" {...a11yProps(6)} />
        <Tab label="Item Seven" {...a11yProps(6)} />
        <Tab label="Item Seven" {...a11yProps(6)} />
        <Tab label="Item Seven" {...a11yProps(6)} />
        <Tab label="Item Seven" {...a11yProps(6)} />
        <Tab label="Item Seven" {...a11yProps(6)} />
      </Tabs>
      <TabBody className={classes.tab} value={value} index={0}>
        Item One
      </TabBody>
      <TabBody className={classes.tab} value={value} index={1}>
        Item Two
      </TabBody>
      <TabBody className={classes.tab} value={value} index={2}>
        Item Three
      </TabBody>
      <TabBody className={classes.tab} value={value} index={3}>
        Item Four
      </TabBody>
      <TabBody className={classes.tab} value={value} index={4}>
        Item Five
      </TabBody>
      <TabBody className={classes.tab} value={value} index={5}>
        Item Six
      </TabBody>
      <TabBody className={classes.tab} value={value} index={6}>
        Item Seven
      </TabBody>
      <div className={classes.addpage}>
        <Button
          onClick={(_) => dispatch(setCurrentView('editorView'))}
          variant="contained"
          endIcon={<AddIcon />}
        >
          Add New Page
        </Button>
      </div>
    </div>
  );
}
