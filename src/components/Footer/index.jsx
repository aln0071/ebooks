import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import PinterestIcon from '@material-ui/icons/Pinterest';
import GitHubIcon from '@material-ui/icons/GitHub';
import AllInboxIcon from '@material-ui/icons/AllInbox';
import styles from '../../styles.scss';

export default function Footer(props) {
  return (
    <div className={styles.footer}>
      <IconButton color="inherit" aria-label="facebook" component="span">
        <FacebookIcon fontSize="small" />
      </IconButton>
      <IconButton color="inherit" aria-label="facebook" component="span">
        <TwitterIcon fontSize="small" />
      </IconButton>
      <IconButton color="inherit" aria-label="facebook" component="span">
        <YouTubeIcon fontSize="small" />
      </IconButton>
      <IconButton color="inherit" aria-label="facebook" component="span">
        <PinterestIcon fontSize="small" />
      </IconButton>
      <IconButton color="inherit" aria-label="facebook" component="span">
        <GitHubIcon fontSize="small" />
      </IconButton>
      <IconButton color="inherit" aria-label="facebook" component="span">
        <AllInboxIcon fontSize="small" />
      </IconButton>
    </div>
  );
}
