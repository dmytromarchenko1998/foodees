import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import $ from 'jquery';
import ShowcasePhotos from './ShowcasePhotos.jsx';
import PhotoGrid from './PhotoGrid.jsx';
// import PhotoModal from './PhotoModal.jsx';

class App extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			biz_id: document.URL.split('/')[4],
			showcase_photos: [],
      grid_photos: []
		}
	}

  componentDidMount() {
    axios.get(`http://localhost:3001/api/biz/${this.state.biz_id}`)
      .then(response => {
			  this.setState({
        // grab first 2 photos in db
				showcase_photos: response.data.slice(0, 2),
        //grab next 4 photos in db
        grid_photos: response.data.slice(2, 6)
			  })
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className='showcaseContainer'>
        <ShowcasePhotos showcase_photos={this.state.showcase_photos} />
        <PhotoGrid grid_photos={this.state.grid_photos} biz_id={this.state.biz_id} />
      </div>
    );
  }
}



ReactDOM.render(<App />, document.getElementById('app'));
// window.App = App;
// export default App;
