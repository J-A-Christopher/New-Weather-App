class Weather {
  constructor() {
  this.apiKey="1048214c3100753f329a02f65c4a1fac";
  
}


//Fetch weather from the api
async getWeather() {
const response= await fetch(`http://api.openweathermap.org/data/2.5/onecall?lat=40.730610&lon=-73.935242&exclude=hourly,daily,minutely
&appid=${this.apiKey}`);
const responseData = await response.json();

return responseData.current;
}




}