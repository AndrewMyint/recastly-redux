import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {
  //TODO:  Write an asynchronous action to handle a video search!

  var callback = function(data) {
    return data;
  };

  var option = {
    key : YOUTUBE_API_KEY,
    query : q,
    max : 5
  }

  return function() {
    return {
      type: 'searchVideo',
      videos: searchYouTube(option, callback)
    };
  };
};

export default handleVideoSearch;


/*

function not_a_thunk() {
  // this one is a "thunk" because it defers work for later:
  return function() {
    {type: X,
     videos: searchYouTube({YOUTUBE_API_KEY, q, max}, callback)
    }
  };
}
\
*/