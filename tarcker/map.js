
let map;

function initMap(lan = 27.592844 ,lat = 53.919212) {
  
    
      
  
      var centerGPS = {
        lat: lat,
        lng: lan
      };
  
     map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: centerGPS
      });
     
  
      let marker = new google.maps.Marker({

        // Определяем позицию маркера
        position: {lat: 53.919212, lng: 27.592844},
    
        // Указываем на какой карте он должен появится. (На странице ведь может быть больше одной карты)
        map: map,
    
        // Пишем название маркера - появится если навести на него курсор и немного подождать
        title: 'машина тут'
    });

    start();
    } 


 