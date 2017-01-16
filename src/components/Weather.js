import React from 'react'
import WeatherForm from './WeatherForm';
import WeatherMessage from './WeatherMessage';
import getTemp from '../API/openWeatherMap';

export default class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false
        }
    }

    handleSearch(location) {
        let that = this;

        this.setState({isLoading: true});

        getTemp(location).then(function (temp) {
            that.setState({
                location: location,
                temp: temp,
                isLoading: false
            })
        }, function (errorMsg) {
            that.setState({isLoading: false});
            alert(errorMsg);
        });
    }

    render() {
        let {isLoading, temp, location} = this.state;

        function renderMessage() {
            if (isLoading) {
                return <h3 className="text-center">Fetching data...</h3>
            } else if (temp && location) {
                return <WeatherMessage
                    temp={temp}
                    location={location}
                />
            }
        }

        return (
            <div>
                <h1 className="text-center">Get Weather</h1>
                <WeatherForm
                    onSearch={(location) => this.handleSearch(location)}
                />
                {renderMessage()}
            </div>
        )
    }
}