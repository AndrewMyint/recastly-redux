import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

//   var test = searchYouTube({key: YOUTUBE_API_KEY, query: 'Hello', max: 5}, (data) => console.log("data",data));
//  console.log("test", test);
// thunk action creator
var handleVideoSearch = (q) => {
  //TODO:  Write an asynchronous action to handle a video search!

  // var callback = function(data) {
  //   return  {
  //     type: 'searchVideo',
  //     videos: data
  //   }
  // };

  var option = {
    key : YOUTUBE_API_KEY,
    query : q,
    max : 5
  }

  return (dispatch) => {

      searchYouTube(option, (videos) => {
      // return {
      //     type: 'searchVideo',
      //     videos: data
      // }
        dispatch(changeVideo(videos[0]))
        dispatch(changeVideoList(videos))
    })
  }
};

export default handleVideoSearch;
