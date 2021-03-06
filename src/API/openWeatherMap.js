import axios from 'axios';

const OPEN_WEATHER_MAP_URL = `http://api.openweathermap.org/data/2.5/weather?appid=b1f7d5b48755b578b59cd565cf0be712&units=metric`;

export default function getTemp(location) {
    let encodedLocation = encodeURIComponent(location);
    let requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function (res) {
        if (res.data.cod && res.data.message) {
            throw new Error(res.data.message);
        } else {
            return res.data.main.temp;

        }
    }, function (res) {
        throw new Error(res.data.message);
    })

}