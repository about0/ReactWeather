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
                return <h3>Fetching data...</h3>
            } else if (temp && location) {
                return <WeatherMessage
                    temp={temp}
                    location={location}
                />
            }
        }

        return (
            <div>
                <h3>Weather Component</h3>
                <WeatherForm
                    onSearch={(location) => this.handleSearch(location)}
                />
                {renderMessage()}
            </div>
        )
    }
}