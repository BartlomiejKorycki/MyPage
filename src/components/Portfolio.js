import React from 'react';
import timer from '../styles/timer.JPG';
import intro from '../styles/intro.JPG';
import weatherapp from '../styles/weatherapp.JPG';

class Portfolio extends React.Component {
    render() {
        return(
            <div className="pf-container">
                <div className="portfolio-window text-center">
                <header className="portfolio-header">Portfolio</header>
                    <div className="container row portfolio-info-fluid"> 

                        <div className="col-lg portfolio-content">
                            <h4><a href="https://bartlomiejkorycki.github.io/Timer/" target="_blank" rel="noopener noreferrer" title="Timer">My timer</a></h4>
                            <div className="overlay">
                                <img className="timer" src={timer} alt="timer"></img>
                                <a className="link">
                                    <p>Website created in Java Script for myself. You can find there countdown to my nearest birthday and timer.</p>
                                    <a className="Link" href="https://bartlomiejkorycki.github.io/Timer/" data-toggle="tooltip" title="Timer">
                                        <i className="fas fa-globe-europe"></i>
                                    </a>
                                    <a className="Github" href="https://github.com/BartlomiejKorycki/Timer" data-toggle="tooltip" title="GitHub">
                                        <i className="fab fa-github"></i>
                                    </a>
                                </a>
                            </div>
                        </div>

                        <div className="col-lg portfolio-content">
                            <h4><a href="https://bartlomiejkorycki.github.io/WeatherApp/" target="_blank" rel="noopener noreferrer" title="WeatherApp">WeatherApp</a></h4>
                            <div className="overlay">
                                <img className="weatherapp" src={weatherapp} alt="WeatherApp"></img>
                                <a className="link">
                                    <p>The result of my learning to connect to api on the example of the weather application.
                                        I used the <a href="https://openweathermap.org/api" target="_blank" rel="noopener noreferrer" title="OpenWeather"><i> OpenWeather API</i></a> with React.
                                    </p>
                                    <a className="Link" href="https://bartlomiejkorycki.github.io/WeatherApp/" data-toggle="tooltip" title="WeatherApp">
                                        <i className="fas fa-globe-europe"></i>
                                    </a>
                                    <a className="Github" href="https://github.com/BartlomiejKorycki/WeatherApp" data-toggle="tooltip" title="GitHub">
                                        <i className="fab fa-github"></i>
                                    </a>
                                </a>
                            </div>
                        </div>

                        <div className="col-lg portfolio-content">
                            <h4><a href="https://bartlomiejkorycki.github.io/Intro/" target="_blank" rel="noopener noreferrer" title="Intro">Intro Website</a></h4>
                            <div className="overlay">
                                <img className="intro" src={intro} alt="IntroWebside"></img>
                                <a className="link">
                                    <p>I created this site for learning and fun.
                                    I used <a href="https://cdnjs.com/libraries/ScrollMagic" target="_blank" rel="noopener noreferrer" title="ScrollMagic on cdnjs.com"><i> ScrollMagic</i></a> to rewind the video.
                                    </p>
                                    <a className="Link" href="https://bartlomiejkorycki.github.io/Intro/" data-toggle="tooltip" title="Intro">
                                        <i className="fas fa-globe-europe"></i>
                                    </a>
                                    <a className="Github" href="https://github.com/BartlomiejKorycki/Intro" data-toggle="tooltip" title="GitHub">
                                        <i className="fab fa-github"></i>
                                    </a>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}
export default Portfolio;