import React from 'react'

export default class WeatherForm extends React.Component {
    onFormSubmit(e) {
        e.preventDefault();

        let location = this.refs.location.value;

        if (location.length > 0) {
            this.refs.location.value = '';
            this.props.onSearch(location);
        }
    }

    render() {
        return (
            <form onSubmit={ e => this.onFormSubmit(e) }>
                <input type="text" ref="location"/>
                <br/>
                <button>Get Weather</button>
            </form>
        )
    }

}