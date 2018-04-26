import React from 'react';
import ReactDOM from 'react-dom';
import PhotosModal from './PhotosModal.jsx';

class PhotoGrid extends React.Component {
	constructor(props) {
		super(props);

	this.state = {
		showModal: false
	}

this.toggleShowModal = this.toggleShowModal.bind(this)
	}

toggleShowModal() {
	this.setState({showModal: !this.state.showModal})
}

	render() {
		return (
						<div className='gridPhotosBackground'>
			<div className='gridPhotosContainer' onClick={this.toggleShowModal}>

				<span className='seeAllOverlay'>See all</span>
			{this.props.grid_photos.map((item, key) => 
		  	(<img className='gridPhotos' key={key} src={`https://s3-us-west-1.amazonaws.com/foodeesphotos/${item.photo_id}.jpg`}/>)
				)}
			{this.state.showModal ?
		<PhotosModal biz_id={this.props.biz_id} toggleShowModal={this.toggleShowModal}/> :
		<div></div>
	}
	</div>
			</div>
			);
	}
}

export default PhotoGrid;


			// <i className="fas fa-th-large"></i>