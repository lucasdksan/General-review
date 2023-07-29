const btnGetLocalization = document.querySelector(".getLoca");

function printLocalization(longitude, latitude){
    document.querySelector(".longitude > span").append(longitude);
    document.querySelector(".latitude > span").append(latitude);
}


function getLocalization(){
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function (position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);

            printLocalization(longitude, latitude)
        });
    } else {
        console.log("Geolocation is not supported in this browser.");
        alert("Algo deu errado");
    }
}

btnGetLocalization.addEventListener("click", getLocalization);

