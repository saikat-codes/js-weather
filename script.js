const apiKey = 'da9230bd97fb338a43a5fd7d86cd2c5b'

const searchBtn = document.querySelector('.search-btn')
const weatherImg = document.querySelector('.weather-img')

searchBtn.addEventListener('click', () => {
    const cityName = document.querySelector("#search-bar").value
    const container = document.querySelector('.container');
    const input = document.getElementById('search-bar');
    
    input.placeholder = cityName; 

    

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`)
    .then((response) => {

        container.classList.remove('none')
        container.style.height = "570px";
        // console.log(response);
        
        return response.json();
    })
    .then((response) => {
        console.log(response);

        if (response.cod === '404' || response.cod === '400') {
            weatherImg.src = 'images/error-new.png'
            document.querySelector('.temp').innerHTML = 'Oops!'
            document.querySelector('#unit-temp').style.visibility = 'hidden'
            document.querySelector('.weather-desc').innerHTML = 'Location not Found.'
            document.querySelector('.more-desc').innerHTML = 'Search something else...'
            document.querySelector('.city-name').innerHTML = ''
            document.querySelector('.date').innerHTML = ''
            document.querySelector('.humidity-text').innerHTML = '--%'
            document.querySelector('.wind-speed-text').innerHTML = '-- Km/h'


        } else {
            let date = +response.dt;
        const currentDate = new Date( date * 1000);        
        
        document.querySelector('.more-desc').innerHTML = ''
        document.querySelector('#unit-temp').style.visibility = 'visible'
        document.querySelector('.city-name').innerHTML = response.name
        document.querySelector('.temp').innerHTML = Math.round(response.main.temp)
        document.querySelector('.date').innerHTML = currentDate.toLocaleDateString()
        document.querySelector('.wind-speed-text').innerHTML = parseInt(response.wind.speed) + ` Km/h`
        document.querySelector('.humidity-text').innerHTML = response.main.humidity + `%`
        document.querySelector('.weather-desc').innerHTML = response.weather[0].description

        switch (response.weather[0].main) {
            case 'Clear': 
                weatherImg.src = 'images/sun.png'
                break;
            case 'Rain': 
                weatherImg.src = 'images/rainy-day.png'
                break;
            case 'Clouds': 
                weatherImg.src = 'images/clouds.png'
                break;
            case 'Snow': 
                weatherImg.src = 'images/snow.png'
                break;            
            case 'Mist': 
                weatherImg.src = 'images/fog.png'
                break;
            case 'Haze': 
                weatherImg.src = 'images/haze.png'
                break;    
            default:
                weatherImg.src = 'images/clouds.png'
        }
        }        
    })
    .catch((error) => {
        console.log(error);
    });
   document.querySelector("#search-bar").value = ""
   
})