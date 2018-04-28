import React from 'react';
import $ from 'jquery'

const Maps = function(props) {
  window.initMap = window.initMap || function () {
    var uluru = {
      lat: props.infors.latitude,
      lng: props.infors.longitude
    };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
  }

  const s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDH0g-fnZU1wn_dwSpz-NtWnjzGYvF7OOQ&callback=initMap'
    document.body.appendChild(s);

  return(
    <div className="mapbox">  
      <div id="map"></div>
      <div className="businessLocation">
        <p><i className="fas fa-map-marker-alt bus-loc-map-pin"></i><b>{props.infors.address}  {props.infors.city}  {props.infors.state}  {props.infors.postal_code}</b></p>
      </div>
    </div>
  )  
}

export default Maps;