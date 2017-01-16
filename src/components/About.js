import React from 'react'
import reactLogo from '../assets/react-logo.svg';
import foundationLogo from '../assets/foundation-logo.png';
import weatherLogo from '../assets/openweathermap-logo.png';

const About = () => {
    return (
        <div>
            <h1 className="text-centers">About</h1>
            <p>In this section i will specify which tools i've used in this project.</p>
            <div className="media-object">
                <div className="media-object-section">
                    <img src={reactLogo} height="150px" width="150px" alt=""/>
                </div>
                <div className="media-object-section">
                    <a href="https://facebook.github.io/react" className="large-text-center">React</a>
                    <p>One of the most hyped web development library for building user interfaces</p>
                </div>
            </div>
            <div className="media-object">
                <div className="media-object-section">
                    <img src={foundationLogo} height="150px" width="150px" alt=""/>
                </div>
                <div className="media-object-section">
                    <a href="http://foundation.zurb.com/">Foundation Framework</a>
                    <p>Advanced CSS framework for complicated applications</p>
                </div>
            </div>
            <div className="media-object">
                <div className="media-object-section">
                    <img src={weatherLogo} height="150px" width="150px" alt=""/>
                </div>
                <div className="media-object-section">
                    <a href="https://openweathermap.org/">Open Weather Map</a>
                    <p>Free to use weather forecast service</p>
                </div>
            </div>


        </div>
    )
};
export default About;