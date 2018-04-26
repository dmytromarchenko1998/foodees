import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class PhotoModal extends React.Component {
  constructor(props) {
    super(props);

    this.changeCount= this.changeCount.bind(this)
  }



  changeCount(type) {
  axios.patch(`http://34.216.115.125/:3001/api/biz_photos/${this.props.photo_id}/${type}`)
    .then(response => {
    console.log(response.data)
    })
    .catch(function(error){
      console.log(error)
    })
}


render() {
	
	return (
		<div>
		<img src={`https://s3-us-west-1.amazonaws.com/foodeesphotos/${this.props.photo_id}.jpg`}/>
		<div>
		<img></img>
		<div>UserName</div>
			<span>
				{this.props.caption}
			</span>
		</div>
		<button onClick={() => this.changeCount('increase')}>Helpful</button>
		<button onClick={() => this.changeCount('decrease')}>Not Helpful</button>
    <button onClick={() => this.props.changeView('all')}>Browse All</button>
    </div>
		)
}

}



export default PhotoModal;