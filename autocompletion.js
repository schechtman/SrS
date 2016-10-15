//define bound: to favor Paris results

var ParisBound = new google.maps.LatLngBounds(
new google.maps.LatLng(48.856614, 2.3522219000000177));

//adresse completion
function init_adresse() {
                var input = document.getElementById('locationTextField');
                autocomplete1 = new google.maps.places.Autocomplete(input,{bounds:ParisBound});
                var place=autocomplete1.getPlace();
            }
//adresse completion2
function init_adresse2(){
                var input2 = document.getElementById('locationTextField2');
                autocomplete2 = new google.maps.places.Autocomplete(input2,{bounds:ParisBound});
            }