var map;
var myLatLng;
var contentString = 'bar';
var autocomplete1;
var autocomplete2;


//adresse completion
function init_adresse() {
                var input = document.getElementById('locationTextField');
                autocomplete1 = new google.maps.places.Autocomplete(input);
                var place=autocomplete1.getPlace();
            }
//adresse completion2
function init_adresse2(){
                var input2 = document.getElementById('locationTextField2');
                autocomplete2 = new google.maps.places.Autocomplete(input2);
            }

//place markers on clients position
function  placeMarkerClient() {
	var human_icon = {
	path:human,
	scale:0.02,
	rotation : 180,
	color: '#cc0000',
	fillOpacity:1
	
	};

	
	var place1 = autocomplete1.getPlace();
	var place2=autocomplete2.getPlace();
	new google.maps.Marker({
		icon:human_icon,
		position : place1.geometry.location,
		map      : map

		});

	new google.maps.Marker({
		icon:human_icon,
		position : place2.geometry.location,
		map      : map

		});


			}
function initMap() {
	ORSAY={lat: 48.862725, lng: 2.287592000000018} 
	map = new google.maps.Map(document.getElementById('map'), {
	center: ORSAY,
	zoom: 12,
	disableDefaultUI: true,
	styles: map_style
	});
	
	// Svg icon
	var icon_svg = {
		    path: path, 
		    scale: 0.15,
		    fillOpacity: 0.8

  		};
	
	var infowindow=new google.maps.InfoWindow();
	function placeMarker( loc ) {
		var latLng = new google.maps.LatLng( loc['lat'], loc['lng']);
		var marker = new google.maps.Marker({
		  icon: icon_svg,
		  position : latLng,
		  map      : map

		});
		google.maps.event.addListener(marker, 'click', function(){
		    infowindow.close(); // Close previously opened infowindow
		    infowindow.setContent( "<div id='infowindow'>"+ loc['Nom'] + "<br />" + loc['Prix'] + "</div>");
		    infowindow.open(map, marker);
		});
	}

for(var i=0; i<bars.length; i++) {
    placeMarker( bars[i] );
  } 


};
