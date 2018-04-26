import React from 'react';
import ReactDOM from 'react-dom';


var ShowcasePhotos = (props) => (
	<div className="firstTwoPhotos">
		{props.showcase_photos.map((item, key) =>
			(<div className="showcaseImage">
        <img onMouseEnter={console.log('test')} className='showcasePhotos' key={key} src={`https://s3-us-west-1.amazonaws.com/foodeesphotos/${item.photo_id}.jpg`}/>
      </div>)
		)}
	</div>
);

export default ShowcasePhotos;