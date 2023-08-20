let api_key = 'dd57c848114289b284ce645a7ac54cce';

let input = document.querySelector("#input");

let btn = document.querySelector("#go");

let pecp = document.querySelector("#precepition");
let temp= document.querySelector("#temperature");
let wind = document.querySelector("#wind");

let country = document.querySelector("#country");
let rain = document.querySelector("#rain");
let date= document.querySelector("#date");

btn.addEventListener('click', ()=>{

    let city= input.value;
    weather(city);



})

input.addEventListener('keypress', (e)=>{
    if(e.keyCode ===13 || e.key ==='Enter'){
        let city= input.value;
        weather(city);

       
    
    }
    
})



let weather =(city)=>{
 
     let data=  fetch(`https://api.weatherapi.com/v1/current.json?key=97d6a536670d4e3191b124322233007&q=${city}&aqi=no`);

     data.then(value=> value.json())
     .then(value1=> showdata(value1))
     .catch((error)=>console.log("error was encounter"));

     

}


let showdata =(data)=>{

     pecp.innerHTML=`Precepition: ${ data.current.precip_mm}`+'mm';
     temp.innerHTML=`Temperature: ${data.current.temp_c}`+"°C";
     wind.innerHTML=`Wind: ${data.current.wind_kph}`+"kph";

     country.innerHTML= `Contry: ${data.location.country}`;

     rain.innerHTML= `Rain: ${data.current.condition.text}`;
     date.innerHTML= `Date: ${data.location.localtime}`;




}


