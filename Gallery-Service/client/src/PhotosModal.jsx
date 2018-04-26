import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import axios from 'axios';
import PhotoModal from './PhotoModal.jsx';
import PhotoUploader from './PhotoUploader.jsx';
import App from './index.jsx'
import $ from 'jquery'
import Pagination from "react-js-pagination";

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)

  Modal.setAppElement('#app');


class PhotosModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: true,
      all_photos: [],
      photo_details: {},
      view: 'all',
      tab: '',
      activePage:1
    };

   // this.afterOpenModal = this.afterOpenModal.bind(this);
    this.openOnePhoto = this.openOnePhoto.bind(this);
    this.displayPhotos = this.displayPhotos.bind(this);
        this.changeView = this.changeView.bind(this);
        this.handlePageChange = this.handlePageChange.bind(this)
   
  }

    handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({activePage: pageNumber});
    this.displayPhotos('')
  }



  openOnePhoto(photo_id) {
    axios.get(`http://34.216.115.125:3001/api/biz_photos/${this.props.biz_id}`, {
      params: {
        select: photo_id
      }
    })
      .then(response => {
        this.setState({
          view: 'one',
          photo_details: response.data[0]
        })
      })
      .catch(error => {
        console.log(error);
      });
  }

  
  changeView(view) {
    this.setState({
      view: view
    })
  }
  // afterOpenModal() {
  //   axios.get(`/api/biz_photos/${this.props.biz_id}`)
  //     .then(response => {
  //       this.setState({
  //       all_photos: response.data
  //       })
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });

  // }

    displayPhotos(query) {
      $('#search').val('');
      axios.get(`http://34.216.115.125:3001/api/biz_photos/${this.props.biz_id}`, {
        params: query
      })
      .then(response => 


      {

        this.setState({

        all_photos: response.data.slice((this.state.activePage * 10), ((this.state.activePage + 1) * 10)),
        number_of_photos: response.data.length

        })
      })
      .catch(error => {
        console.log(error);
      });
  }



  renderView() {
    const {view} = this.state;
    if(view ==='one') {
      return <PhotoModal photo_id={this.state.photo_details.photo_id} caption={this.state.photo_details.caption} changeView={this.changeView}/>
    } else if (view ==='upload') {
     return  (<PhotoUploader biz_id={this.props.biz_id}/>)
    } else {
        return(  
          <div>
 <button onClick={()=>this.changeView('upload')}>Add Photos</button>
           <nav>
             {console.log(this.state.number_of_photos)}
             <div onClick={() => this.displayPhotos({tab:''})}>All</div>
             <div onClick={() => this.displayPhotos({tab:'food'})}>Food</div>
             <div onClick={() => this.displayPhotos({tab:'inside'})}>Inside</div>
             <div onClick={() => this.displayPhotos({tab:'menu'})}>Menu</div>
             <div onClick={() => this.displayPhotos({tab:'outside'})}>Outside</div>
             <div onClick={() => this.displayPhotos({tab:'drink'})}>Drink</div>
              <input type="text" placeholder='Search Photos...' id='search'></input>
              <button onClick={() => this.displayPhotos({caption: {$regex: `.*${$('#search').val()}.*`}})}>Submit</button>
              <button onClick={() => this.displayPhotos({tab:''})}>Clear</button>
           </nav>



          <div className='allPhotosContainer'>
            {this.state.all_photos.map((item, key) =>
      (<img key={key} onClick={() => this.openOnePhoto(item.photo_id)} className='allPhotos' src={`https://s3-us-west-1.amazonaws.com/foodeesphotos/${item.photo_id}.jpg`}/>)
    )} 
                       </div>
 <Pagination
          activePage={this.state.activePage}
          totalItemsCount={this.state.number_of_photos}
          pageRangeDisplayed={Math.ceil(this.state.number_of_photos/10)}
          onChange={this.handlePageChange}
        />



            </div>)
    }
  
  }



  render() {
    return (
      <div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={() => this.displayPhotos('')}
          // onRequestClose={this.closeModal}
          // style={customStyles}
          // contentLabel="Example Modal"
        >
           <button onClick={this.props.toggleShowModal}>close</button>
          
          {this.renderView()}
        </Modal>
      </div>
    );
  }
}


export default PhotosModal;

/* grab all the urls from the db first then render a subset*/


