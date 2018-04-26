import React from 'react';

var ReviewSearch = (props) => (
  <div id="reviews-search">
    <span id="reviews-search-bar">
      <input id="reviews-input" type="text" onChange={props.setSearchTerm}/>
      <button id="reviews-button" onClick={props.searchReviews}></button>
    </span>
    <span id="reviews-sort"> <span>Sort By: </span>
      <select id="sortBy" onChange={props.sort}>
        <option value="newestFirst" defaultValue>Newest First</option>
        <option value="oldestFirst">Oldest First</option>
        <option value="highestRated">Highest Rated</option>
        <option value="lowestRated">Lowest Rated</option>
      </select>
    </span>
  </div>
);

//"^4.5.0"
//"^2.2.1"

export default ReviewSearch;
