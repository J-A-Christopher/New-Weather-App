const sun=new Weather();

//initializing our UI object

const ui=new UI();

//to change location

// weather.changeLocation('Kisumu')

//create an event listener to call the function when the dom loads

document.addEventListener('DOMContentLoaded',getWeather)

function getWeather() {
sun.getWeather()
.then(results=>{
  // console.log(results);
  ui.paint(results);
})
.catch(error=>{
  //  console.log(error)
});
}









































