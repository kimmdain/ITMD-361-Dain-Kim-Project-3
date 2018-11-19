function initMap(){
  var school = {lat: 37.375140, lng: 126.632782};
  var home = {lat: 37.3880586, lng: 126.6629434};
  var songdo = {lat: 37.392605, lng: 126.638687};
  var ICN = {lat:37.4487281, lng: 126.4500637};
  var yellowsea = {lat:37.376978, lng:126.579286};
  var outlet = {lat:37.381483, lng: 126.6549862};
  var bridge = {lat:37.4136633, lng: 126.564332};
  var map = new google.maps.Map(
    document.getElementById('map'), {
    zoom: 12.5, center: bridge
    }
  );

  var marker1 = new google.maps.Marker({
    position: school,
    map: map
  });
        
  var marker2 = new google.maps.Marker({
    position: home,
    map: map
  });
        
  var marker3 = new google.maps.Marker({
    position: songdo,
    map: map
  });
  
  var marker4 = new google.maps.Marker({
    position: ICN,
    map: map
  });
  
  var marker5 = new google.maps.Marker({
    position: yellowsea,
    map: map
  });
  
  var marker6 = new google.maps.Marker({
    position: outlet,
    map: map
  });
  
  var marker7 = new google.maps.Marker({
    position: bridge,
    map: map
  });
}