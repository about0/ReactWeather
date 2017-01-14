import axios from 'axios';

const OPEN_WEATHER_MAP_URL = `https://api.openweathermap.org/data/2.5/weather?appid=b1f7d5b48755b578b59cd565cf0be712&units=metric`;
const DARKSKY_URL = `https://api.darksky.net/forecast/0abdc4a45808f9fd8381b6f331fa1095`;






export default function getTemp(location) {
    let encodedLocation = encodeURIComponent(location);
    // let requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
    let requestUrl = `${DARKSKY_URL}/${encodedLocation}`;

    return axios.get(requestUrl).then(function (res) {
        if (res.data.cod && res.data.message) {
            throw new Error(res.data.message);
        } else {
            return res.data.main.temp;

        }
    }, function (res) {
        throw new Error(res.data.message);
    })

    // const config = {
    //     method: 'get',
    //     url: `${DARKSKY_URL}/${encodedLocation}`,
    //     headers: {'Access-Control-Allow-Origin': true},
    //     responseType: 'json'
    // };
    //
    //
    // return axios.request(config)
    //     .then(function (res) {
    //         if (res.data.cod && res.data.message) {
    //             throw new Error(res.data.message);
    //         } else {
    //             return res.data.main.temp;
    //
    //         }
    //     });

}