let cityname=document.getElementById('cityname');
let degree=document.getElementById('degree')
let description=document.getElementById('description')

// degree.innerText="24%"
// cityname.innerText="arvi"

window.onload=function getweather(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition)
    }
    else{
        degree.innerText="geolocation not supported"
    }
}

function showPosition (data) {
    console.log(data);
    let lat = data.coords.latitude;
    let long = data.coords.longitude;
    console.log(lat,long)
    let url=`https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${long}&mode=json&units=metric&cnt=1&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`

    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        console.log(data) 
        // console.log(data.city.name)
        cityname.innerText=data.city.name;
        console.log(data.list[0].temp)
        degree.innerText=data.list[0].temp.night;
        degree.innerHTML+=" "+'<span>&#8451;</span>'
        console.log(data.list[0].weather[0].description)
        description.innerText=data.list[0].weather[0].description;
        // let icon=document.getElementById('icon').innerText=data.list[0].weather[0].icon;

       
       
       
    })
    // cityname.innerText=lat;
    // degree.innerText=long;
    
}

// efb0fc86c241e968d94b20af3bf5b161




// var x = document.getElementById("out")
// var y = document.getElementById("address")
// var z =  document.getElementById('icon')
// function geolocation(){
//     if(navigator.geolocation){
//         navigator.geolocation.getCurrentPosition(showPosition)
//     }else{
//         x.innerText="Geo Not Supported"
//     }
// }

// function showPosition(data){
//     console.log(data)
//     x.innerText=`Latitude is ${data.coords.latitude}, longitude is ${data.coords.longitude}`
//     let lat = data.coords.latitude;
//     let long = data.coords.longitude
//     var url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${long}&mode=json&units=metric&cnt=1&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`
//     /*var url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${data.coords.latitude},${data.coords.longitude}&key=`;
//     */
//     fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//         console.log(data)                 
//         /*data.list.map((item) => {
//             console.log(item.temp.day)
//             y.innerText=`${item.temp.day}°C and ${item.weather[0].description}`
//             z.innerHTML=`<img class='card-img-top' src='https://openweathermap.org/img/w/${item.weather[0].icon}.png' alt='weather'/>`
//         })*/
        
//     })
// }