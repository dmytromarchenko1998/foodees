import React from 'react';

const BusinessTitle = function(props){
	var checkStar = function (num) {
		var rating = num;
	  var starPosition = 0;
	  if (rating >= 1) {
	    starPosition += ((rating * 2 * -24) + 24);
	  }
	  var percentage = props.rating/5 * 100;
	  // return (<span style={{'backgroundPositionY':starPosition + 'px'}} className="HeaderStars"></span>)
	  return (
		  <span> 
	      <span style={{'backgroundPositionY':starPosition + 'px'}} className="HeaderStars"></span>
	    </span>
    )
	}

	var checkRange = function(num){
		return '$'.repeat(num)
	}

	return(
		<div>
	 		<h1 className="title">{props.infors.name}</h1>
	 		<div className="HeaderRating" >{checkStar(props.infors.stars)}<span>{props.infors.review_count}  reviews</span></div>
	 		<p>{checkRange(props.infors.attributes.RestaurantsPriceRange2)}<span>{props.infors.categories.map((item) => <a key={item} className="typeFood" href={`https://www.yelp.com/c/las-vegas/${item.substr(0,1).toLowerCase() + item.substr(1,item.length)}`}> {item} </a>)}  </span></p>
	 	</div>
 )	
}

export default BusinessTitle;