import React from 'react';
import timer from '../styles/timer.JPG';

class Portfolio extends React.Component {
    render() {
        return(
            <div className="pf-container">
                <div className="portfolio-window text-center">
                <header className="portfolio-header">Portfolio</header>
                    <div className="container row portfolio-info-fluid"> 
                        <div className="col-sm portolio-content">
                            <h4><a href="https://bartlomiejkorycki.github.io/Timer/" target="_blank" title="Timer">My timer</a></h4>
                            <div className="overlay">
                                <img className="timer" src={timer} alt="timer" width="400px"></img>
                                <a className="link">
                                    <p>Simply webside created in Java Script for myself. You can find there countdown to my nearest birthday and timer which i use in
                                        <a href="https://en.wikipedia.org/wiki/Pomodoro_Technique" target="_blank" title="Wikipedia"><i> Pomodoro Technique</i></a>.
                                    </p>
                                </a>
                            </div>
                        </div>
                        <div className="col-sm portolio-content">Weather App</div>
                        <div className="col-sm portolio-content">Intro Webside</div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Portfolio;