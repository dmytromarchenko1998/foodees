import React from 'react';
import $ from 'jquery';
import BusinessInfo from './businessInfo.jsx';
import BusinessTitle from './businessTitle.jsx';
import Hours from './hours.jsx'
import Maps from './maps.jsx'
import Reservation from './reservation.jsx'


class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			infors : {
				attributes: {
					GoodForMeal: true
				}
			},
			loaded: false
		}
	}

	componentDidMount() {
		var app = this;
    var business_id = document.URL.split('/')[4]
		$.ajax({
			url : 'http://34.216.115.125:3002/info/',
			type : 'GET',
			data: {business_id: business_id},
			success : function(data){
        		// console.log("data", data);
        		app.setState({
          			infors: data[0],
          			loaded: true
        		})
      		},
      		error : function(){
        		console.log("not working ")
      		}
		})
  	}

  	

	render() {
		return (
			<div>
				{this.state.loaded ? (
					<div>
            <BusinessTitle infors={this.state.infors}/>
					</div>
				) : (
					<p>Loading</p>
				)}
				
			</div>
		)
	}
}

class MainInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      infors : {
        attributes: {
          GoodForMeal: true
        }
      },
      loaded: false
    }
  }

  componentDidMount() {
    var app = this;
    var business_id = document.URL.split('/')[4]
    $.ajax({
      url : 'http://34.216.115.125:3002/info/',
      type : 'GET',
      data: {business_id: business_id},
      success : function(data){
            // console.log("data", data);
            app.setState({
                infors: data[0],
                loaded: true
            })
          },
          error : function(){
            console.log("not working ")
          }
    })
    }

    

  render() {
    return (
      <div>
        {this.state.loaded ? (
          <div>
            <div className="mainInfo">
              <Maps infors={this.state.infors}/>
            </div>
          </div>
        ) : (
          <p>Loading</p>
        )}
        
      </div>
    )
  }
}

class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      infors : {
        attributes: {
          GoodForMeal: true
        }
      },
      loaded: false
    }
  }

  componentDidMount() {
    var app = this;
    var business_id = document.URL.split('/')[4]
    $.ajax({
      url : 'http://34.216.115.125:3002/info/',
      type : 'GET',
      data: {business_id: business_id},
      success : function(data){
            // console.log("data", data);
            app.setState({
                infors: data[0],
                loaded: true
            })
          },
          error : function(){
            console.log("not working ")
          }
    })
    }

    

  render() {
    return (
      <div>
        {this.state.loaded ? (
          <div className="sideBar">
              <Reservation infors={this.state.infors}/>
              <Hours infors={this.state.infors}/>
              <BusinessInfo infors={this.state.infors}/>
          </div>
        ) : (
          <p>Loading</p>
        )}
        
      </div>
    )
  }
}

module.exports.MainInfo = MainInfo;
module.exports.SideBar = SideBar;
module.exports.Header = Header;