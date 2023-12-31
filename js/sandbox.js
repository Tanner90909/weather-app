const apiKey = '66dab46513751c53cd2300f5a230f3e1';
const zipCode = 40517;

const getWeatherButton = document.getElementById("get-weather");

const zipCodeInput = document.getElementById("zip-code-input");
const displayLocation = document.getElementById("location");
const displayKelvin = document.getElementById("kelvin");
const displayFahrenheit = document.getElementById("fahrenheit");
const displayCelcius = document.getElementById("celcius");
const displayCondition = document.getElementById("condition");
const errorMessage = document.getElementById("error-message");
const displayIcon = document.getElementById("icons");

// async function testApi(){
//   const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?zip=' + zipCode +'&appid=' + apiKey;
//     try {
//         const response = await axios.get(apiUrl);
    
//         if (response.status === 200) {
//           console.log(response);
//           console.log('Data successfully retrieved from API')
//         } else {
//           console.log('API request returned a non-200 status code:', response.status);
//         }
//       } catch (error) {
//         console.error('Error fetching weather data:', error);
//       }
//     }
//     testApi();

async function accessWeather(){
  const zipCode = zipCodeInput.value;
  const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?zip=' + zipCode +'&appid=' + apiKey;
  try {
    const response = await axios.get(apiUrl);
   if (response.status === 200){
    const location = response.data.name;
    const tempKelvin = response.data.main.temp;
    const tempFahrenheit = (1.8*(response.data.main.temp - 273) + 32);
    const tempCelcius = (response.data.main.temp - 273);
    const weatherCondition = response.data.weather[0].description;
    displayLocation.textContent = 'City: '+ location;
    displayKelvin.textContent = Math.floor(tempKelvin) + '° K';
    displayFahrenheit.textContent = Math.floor(tempFahrenheit) + '° F';
    displayCelcius.textContent = Math.floor(tempCelcius) + '° C';
    displayCondition.textContent = "Condition: " + weatherCondition;
    displayIcon.src = `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    errorMessage.textContent = "";
   } else {
    console.log("Data NOT successfully retrieved from API" + response.status);
   } 
  } catch (error){
    //console.error("Error fetching weather data" + error);
    errorMessage.textContent = "Invalid Zip Code";
  }
}

getWeatherButton.addEventListener('click', accessWeather);


  