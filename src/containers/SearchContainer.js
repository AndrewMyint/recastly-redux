import React from 'react';
import Search from './../components/Search.js';
import { connect } from 'react-redux';
import handleSearchChange from '../actions/search.js';
// import handleVideoSearch from '../actions/search.js';
// import searchYouTube from '../lib/searchYouTube.js'
// var handle = handleSearchChange('Hello')();
// console.log(handle)
//this.handleChange = _.debounce(this.handleChange, 500, {leading: false, trailing: true});
var mapStateToDispatch = (dispatch) => {
  var handleSearchChangeDebounce = _.debounce(handleSearchChange, 500);
  return {
    //If Redux Thunk middleware is enabled, any time you attempt to dispatch a function instead of an action object,
    //the middleware will call that function with dispatch method itself as the first argument.

    handleSearchInputChange: (q) => dispatch(handleSearchChangeDebounce(q))
  };
};

var SearchContainer = connect(null, mapStateToDispatch)(Search);
//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.
//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.


export default SearchContainer;
