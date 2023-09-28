//const stateArray = [0,1,2,3,4];
//const currentStateIndex = 0;
async function testApi(){
    const apiKey = '66dab46513751c53cd2300f5a230f3e1';
    const zipCode = '40517';

    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?zip=' + zipCode +'&appid=' + apiKey
    try {
        const response = await axios.get(apiUrl);
    
        if (response.status === 200) {
          console.log('Data successfully retrieved from the API');
        } else {
          console.log('API request returned a non-200 status code:', response.status);
        }
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    }
    
    testApi();


  