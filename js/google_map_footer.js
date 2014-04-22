var map;
var MY_MAPTYPE_ID = 'custom_style';
var addr = new google.maps.LatLng(55.657991, 37.476006);
var addr_info = '<i class="fa fa-map-marker"></i>  <b>Просп. Вернадского, 88</b><br><i class="fa fa-phone"></i> Телефон: (499) 792-00-54';
function initialize() {

  var featureOpts = [
    {
      stylers: [
        { saturation: -80 },
      ]
    },
    {
      elementType: 'labels',
      stylers: [
        { visibility: 'on' }
      ]
    },
  ];

  var mapOptions = {
    zoom: 15,
    center: addr,
    scrollwheel: false,
    disableDefaultUI: true,
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
    },
    mapTypeId: MY_MAPTYPE_ID
  };

  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  var infowindow = new google.maps.InfoWindow({
    content: addr_info,
    position: addr
  });
  infowindow.open(map);




  var styledMapOptions = {
    name: 'Custom Style'
  };

  var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);

  map.mapTypes.set(MY_MAPTYPE_ID, customMapType);
}


google.maps.event.addDomListener(window, 'load', initialize);