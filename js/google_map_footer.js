var map;
var MY_MAPTYPE_ID = 'custom_style';
// Координаты здания по умолчанию: 55.657991, 37.476006
var addr = new google.maps.LatLng(55.658591, 37.476006);
var mark_pos = new google.maps.LatLng(55.658441, 37.474506);
// А в этой переменной данные по адресу. Ну то что в окошке.
// var addr_info = '<i class="fa fa-map-marker"></i>  <b>Просп. Вернадского, 88</b><br><i class="fa fa-phone"></i> Телефон: (499) 792-00-54';
function initialize() {
    // Большая часть что ниже, это как раз настройки дизайна.
    // Что бы что-то проверить - расскоментируешь cmd+/ и смотришь, чего делает.
    // На это же сочетание клавиш закомментировать обратно. =)
    var featureOpts = [
    {
      stylers: [
        // Классный эффект. Типа накладывает градиент на всю карту.
        // { hue: '#890000' },
        // { gamma: 1 },
        // { weight: 1 },
        // Эффект унылости =)
        { saturation: -80 },
      ]
    },
    {
      elementType: 'labels',
      stylers: [
        { visibility: 'on' } // Стиль карты. Показывает и скрывает названия цлиц и прочего.
      ]
    },
    // Цвет воды
    // {
    //   featureType: 'water',
    //   stylers: [
    //     { color: '#62c2e4' }
    //   ]
    // },

    // Цвет стандартный
    // {
    //   featureType: 'landscape.natural',
    //   stylers: [
    //     { color: '#e6e6e2' }
    //   ]
    // },

    // Цвет типа дорог наверное
    // {
    //   featureType: 'landscape.man_made',
    //   stylers: [
    //     { color: '#eaeae9' }
    //   ]
    // },

    // Цвет парков
    // {
    //   featureType: 'poi.park',
    //   stylers: [
    //     { color: '#c4e17f' }
    //   ]
    // },

    // Цвет дорог
    //     {
    //   featureType: 'road.highway',
    //   stylers: [
    //     { color: '#b7b7ad' }
    //   ]
    // },

    // Цвет каких-то других дорог.. =)
    //     {
    //   featureType: 'road.arterial',
    //   stylers: [
    //     { color: '#dedfd7' }
    //   ]
    // },

  ];

  var mapOptions = {
    // Степерь приближения.
    zoom: 15,
    center: addr,
    // Возможность скроллить карту колесиком
    scrollwheel: false,
    // Убирает или добавляет базовые кнопки гугла.
    disableDefaultUI: true,
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
    },
    mapTypeId: MY_MAPTYPE_ID
  };

  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  // Инфо окошко с текстом было.
  // var infowindow = new google.maps.InfoWindow({
  //   content: addr_info,
  //   position: addr
  // });
  // infowindow.open(map);

  // Маркер
  var image = 'img/mark.png';
  var beachMarker = new google.maps.Marker({
      position: mark_pos,
      map: map,
      icon: image,
      // Куда ведет клик по маркеру
      url: "contact.html"
  });

  // Клик по маркеру
  google.maps.event.addListener(beachMarker, 'click', function() {
        window.location.href = beachMarker.url;
    });

  var styledMapOptions = {
    name: 'Custom Style'
  };

  var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);

  map.mapTypes.set(MY_MAPTYPE_ID, customMapType);
}


google.maps.event.addDomListener(window, 'load', initialize);