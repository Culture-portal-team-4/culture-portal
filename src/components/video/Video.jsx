import React, { useState } from "react";
import PropTypes from "prop-types";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import YouTubeIcon from "@material-ui/icons/YouTube";
import Typography from "@material-ui/core/Typography";
import styles from './videoStyles'

function Video({ youTubeVideoUrl, id, width, height }) {
  const classes = styles()
  const [state, setState] = useState({
    modalVisible: false,
    videoLoaded: false
  });
  const openModal = () => {
    setState({ modalVisible: true });
  };
  const closeModal = () => {
    setState({ modalVisible: false, videoLoaded: false });
  };
  const { modalVisible, videoLoaded } = state;

  return (
    <div className={classes.root}>
      <Button
        className={classes.videoButton}
        size="small"
        color="secondary"
        variant="contained"
        onClick={openModal}
      >
        <YouTubeIcon />{" "}
        <Typography variant="body2" color="textSecondary" component="p">
          Watch the video
        </Typography>
      </Button>
      <Modal
        open={modalVisible}
        onClose={closeModal}
        style={{
          opacity: videoLoaded ? 1 : 0
        }}
      >
        <iframe
          className={classes.frame}
          onLoad={() => {
              setState({
              modalVisible: true,
              videoLoaded: true
            });
          }}
          title={id}
          src={youTubeVideoUrl}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          width={width}
          height={height}
        />
      </Modal>
    </div>
  );
}

Video.propTypes = {
  youTubeVideoUrl: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number
};

Video.defaultProps = {
  width: 560,
  height: 315
};

export default Video;
