import Axios from 'axios';

const OPEN_WEATHER_MAP_URL = `http://api.openweathermap.org/data/2.5/weather?appid=b1f7d5b48755b578b59cd565cf0be712&units=metric`;

//b1f7d5b48755b578b59cd565cf0be712

export default function getTemp(location) {
    let encodedLocation = encodeURIComponent(location);
    let requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return Axios.get(requestUrl).then(function (res) {
        if (res.data.cod && res.data.message) {
            throw new Error(res.data.message);
        } else {
            return res.data.main.temp;

        }
    }, function (res) {
        throw new Error(res.data.message);
    })
}