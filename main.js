var map;
var myLatLng;
var contentString = 'bar';

var image= 'images/drink-beer-jar.png';




function initMap() {
	ORSAY={lat: 48.862725, lng: 2.287592000000018} 
	map = new google.maps.Map(document.getElementById('map'), {
	center: ORSAY,
	zoom: 12,
	disableDefaultUI: true,
	styles: map_style
	});
	var infowindow=new google.maps.InfoWindow();
	function placeMarker( loc ) {
		var latLng = new google.maps.LatLng( loc['lat'], loc['lng']);
		var marker = new google.maps.Marker({
		  icon: image,
		  position : latLng,
		  map      : map

		});
		google.maps.event.addListener(marker, 'click', function(){
		    infowindow.close(); // Close previously opened infowindow
		    infowindow.setContent( "<div id='infowindow'>"+ loc['Nom'] + '\n' + loc['Prix'] + "</div>");
		    infowindow.open(map, marker);
		});
	}
  
		
for(var i=0; i<bars.length; i++) {
    placeMarker( bars[i] );
  } 


};
