import { combineReducers } from 'redux';
import currentVideo from './currentVideo.js';
import videoList from './videoList.js';

// var rootReducer = (state = {currentVideo: null, videoList: []}, action) => {
//   if (action.type === 'CHANGE_VIDEO_LIST') {
//     state.videoList = action.videos.slice();
//   }
//   if (action.type === 'CHANGE_VIDEO') {
//     state.currentVideo = action.video;
//   }
//   return state;
// };

//TODO: define the root reducer for this app

//HINT: you'll need to combine the other two reducers in this
//  app into a single reducer using the 'combineReducers' method
//  listed above.
var rootReducer = combineReducers({videoList: videoList, currentVideo: currentVideo})
console.log(rootReducer);
export default rootReducer;
