function start(){
    let coordinatesInp = document.querySelector("input");
    coordinatesInp.value = "53.919212,27.592844"
    let callSimulationbtn = document.getElementsByTagName("button")[0];
    let smsScreen = document.getElementById("smsScreen");
    
    smsScreen.value = "work is off"
    
    
    
    let workMode = false;
    console.log(map)
    
    let savedCoordinates = {
        
        lan: "",
        lat: "",
        
    
    };
    
    let currentCoordinates = {
        lan: "",
        lat: "",
       
    }
    
    callSimulationbtn.addEventListener("click", () => {
        getCall();
    })
    
    
    setInterval(() => {
        loop();
        
    }, 1000);
    
    
    
    
    function loop() {
        getCoordinates();
        if (workMode) {
            if (compareCoord()) {
    
            } else {
                sendSms();
    
            }
        }
    
    }
    
    
    function getCoordinates() {
        let arrcrd = coordinatesInp.value.split(",");
        currentCoordinates.lan = arrcrd[1];
        currentCoordinates.lat = arrcrd[0];
    
    };
    
    
    function saveCoordinates() {
        savedCoordinates.lan = currentCoordinates.lan;
        savedCoordinates.lat = currentCoordinates.lat;
    
    }
    
    function sendSms() {
        
        if (workMode) {
            smsScreen.value === "work is off" ? smsScreen.value = "work is on" : "";
            smsScreen.value = smsScreen.value + ` lan = ${currentCoordinates.lan} lat = ${currentCoordinates.lat}\n`;

            let newmarker = new google.maps.Marker({
                position: {lat: +currentCoordinates.lat, lng: +currentCoordinates.lan},
            
                // Указываем на какой карте он должен появится. (На странице ведь может быть больше одной карты)
                map: map,
            
                // Пишем название маркера - появится если навести на него курсор и немного подождать
                title: 'машина тут'
            });/////'этот кусок просто рисует маркеры
    
        } else {
            smsScreen.value = "";
            smsScreen.value = "work is off"
        }
    
    
    }
    
    function compareCoord() {
    
        if (currentCoordinates.lan.substring(0,6) === savedCoordinates.lan.substring(0,6) && currentCoordinates.lat.substring(0,6) === savedCoordinates.lat.substring(0,6)) {
            return true;
        } else {
            return false;
        }
    
    
    }
    
    
    
    function getCall() {
        workMode = !workMode;
        getCoordinates();
        saveCoordinates();
        sendSms();
    
    };
}
