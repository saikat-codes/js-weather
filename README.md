# js-weather

A simple JavaScript weather app that fetches and displays current weather data for any city using the OpenWeatherMap API.

## Features

- Search weather by city name
- Displays temperature, weather description, humidity, and wind speed
- Responsive UI with weather icons
- Error handling for invalid city names

## Project Structure

```
.
├── index.html
├── style.css
├── script.js
├── images/
│   ├── background.png
│   ├── screenshot.png
│   ├── clouds.png
│   ├── sun.png
│   ├── mist.png
│   ├── haze.png
│   ├── fog.png
│   ├── rainy-day.png
│   └── snow.png
└── README.md
```

## Screenshots

![Web-App Screenshot](images/screenshot.png)

## Usage

1. Clone the repository:
    ```bash
    git clone https://github.com/saikat-codes/js-weather.git
    cd js-weather
    ```
2. Open `index.html` in your browser.
3. Enter a city name and click "Search" to view the weather.

## Files

- **index.html**: Main HTML structure for the app.
- **style.css**: Styles for layout and responsiveness.
- **script.js**: JavaScript logic for fetching and displaying weather data.
- **images/**: Weather icon images used in the UI.

## API

This app uses the [OpenWeatherMap API](https://openweathermap.org/api). You need to get a free API key and add it to `script.js`:

```js
const apiKey = 'YOUR_API_KEY_HERE';
```

## Live Demo

Check out the app on GitHub Pages: [https://saikat-codes.github.io/js-weather/](https://saikat-codes.github.io/js-weather/)

## Coded and Designed By

Coded and designed by [Saikat Das](https://github.com/saikat-codes).



