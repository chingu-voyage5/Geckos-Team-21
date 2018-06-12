import React from 'react';
import YouTubePlayer from 'react-player/lib/players/YouTube';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  playerWrapper: {
    position: 'relative',
    paddingTop: '56.25%'
  },
  reactPlayer: {
    position: 'absolute',
    top: 0,
    left: 0
  }
});

const Player = ({ classes }) => (
  <div className={classes.playerWrapper}>
    <YouTubePlayer
      className={classes.reactPlayer}
      config={{
        youtube: {
          playerVars: {
            showinfo: 1
          }
        }
      }}
      url="https://www.youtube.com/watch?v=jtgA0jvhp2A"
      controls
      width="100%"
      height="100%"
    />
  </div>
);

Player.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Player);
