import Redux from 'redux';

var sampleData = [];

var videoListReducer = (state = sampleData, action) => {
  //TODO: define a reducer for the videoList field of our state.
  if (action.type === 'CHANGE_VIDEO_LIST') {
    return action.videos;
  } else {
    return state;
  }
};

export default videoListReducer;
