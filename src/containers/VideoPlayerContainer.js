import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';
import changeVideo from '../actions/currentVideo.js';

var mapStateToProps = (state) => {
  return {video: state.currentVideo};
}

var VideoPlayerContainer = connect(mapStateToProps)(VideoPlayer);

//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.

var mapStateToProps = (state) => {
  return {video: state.currentVideo};
};

var VideoPlayerContainer = connect(mapStateToProps)(VideoPlayer);

export default VideoPlayerContainer;
