function initMap(){
  var school = {lat: 37.606721, lng: 127.042220};
  var building1 = {lat: 37.607423, lng: 127.042489};
  var postoffice = {lat: 37.606258, lng: 127.042714};
  var map = new google.maps.Map(
    document.getElementById('map'), {
    zoom: 17, center: school
    }
  );

  var firstlocation = new google.maps.Marker({
    position: school,
    map: map
  });

  var secondloction = new google.maps.Marker({
    position: building1,
    map: map
  });

  var thirdloction = new google.maps.Marker({
    position: postoffice,
    map: map
  });
}