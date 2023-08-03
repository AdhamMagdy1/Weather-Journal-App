/* Global Variables Begin */

// Personal API Key for OpenWeatherMap API
const apiKey = '7e74ddfac1ee22fdd6f79151635df18f&units=metric';
const baseURL = 'https://api.openweathermap.org/data/2.5/weather?';
const generateBtn = document.getElementById('generate');

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + '/' + d.getDate() + '/' + d.getFullYear();

/* Global Variables End */
/* Event Listener Begin */

// add event listener for the generate button
generateBtn.addEventListener('click', performAction);

/* Event Listener End */
/* Main Functions Begin */

//GET weather data , POST data to server and update UI using promis chaining when the button is clicked
function performAction(e) {
  const zip = document.getElementById('zip').value;
  const url = baseURL + `zip=${zip}&appid=${apiKey}`;

  getRequst(url);
}

// make a GET request to the OpenWeatherMap API using fetch API.
async function getRequst(URL) {
  try {
    let res = await fetch(URL);
    let allData = await res.json();
    try {
      const feelings = document.getElementById('feelings').value;
      // Write updated data to DOM elements
      document.getElementById('temp').innerHTML =
        Math.round(allData.main.temp) + ' °C';
      document.getElementById('content').innerHTML = feelings;
      document.getElementById('date').innerHTML = newDate;
    } catch (error) {
      console.log('error', error);
      alert('Please try using Valid zip code!');
    }
  } catch (error) {
    // console.log('Error! try another zip', error);
    alert('Please try using Valid zip code!');
  }
}

/* Main Functions End */
