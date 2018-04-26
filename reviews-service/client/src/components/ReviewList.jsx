
import React from 'react';
import ReviewListEntry from './ReviewListEntry.jsx';

var ReviewList = (props) => (
  <div className="review-list">
    {props.reviews.map((review, index) => {
      for (var i = 0 ; i < props.users.length; i++) {
        if (props.users[i].id === props.reviews[index].user_id) {
          return <ReviewListEntry review={review} user= {props.users[i]} key={index}/>
        }
      }
    })}
  </div>
);

export default ReviewList;
