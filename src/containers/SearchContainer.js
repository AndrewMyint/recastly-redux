import React from 'react';
import Search from './../components/Search.js';
import { connect } from 'react-redux';
import handleSearchChange from '../actions/search.js';
import handleVideoSearch from '../actions/search.js';
import searchYouTube from '../lib/searchYouTube.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

var mapStateToProps = (state) => {
  return {state: state};
};

var mapDispatchToProps = (dispatch) => {
  return {
    handleSearchInputChange: () => dispatch(handleVideoSearch())
  };
};

var SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);
//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.
//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.

export default SearchContainer;
