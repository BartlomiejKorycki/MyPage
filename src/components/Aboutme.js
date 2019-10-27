import React from 'react';

class Aboutme extends React.Component {
    render() {
        return(
            <div className="am-container">
                <div className="am-window text-center">
                    <div className="am-info-fluid">
                        <header className="am-header">About me</header>
                        <article className="am-content">I was born in 1993. I was interesed by computers for ages, but I never guessed that working with them can be my proffesion. I finished Logistics Management at University of Economics in Poznan in 2018 and started working as Junior Transport Planner in Eurocash. Meanwhile I started studying German language, the basics of Python, SQL and JavaScript. Now I am taking part in CodersCamp and learning basics of Front End. I will see myself as Full Stack Developer in the future. I would like encourage you to follow my website, social media. If you have any questions, don’t hesitate to contact me. </article>
                    </div>
                    <div className="am-skills row">
                        <div className="frontend col-md-6">
                        FRONTEND: HTML5 - CSS - JS
                            <ul className="front text-left">
                                <li className="row">
                                    <i class="fab fa-html5"></i>
                                    <div className="progress">
                                        <div class="html progress-bar progress-bar-striped progress-bar-animated">Junior</div>
                                    </div>
                                </li>
                                <li className="row">
                                    <i class="fab fa-css3-alt"></i>
                                    <div className="progress">
                                        <div class="css progress-bar progress-bar-striped progress-bar-animated">Junior</div>
                                    </div>
                                </li>
                                <li className="row">
                                    <i class="fab fa-js-square"></i>
                                    <div className="progress">
                                        <div class="js progress-bar progress-bar-striped progress-bar-animated">Junior</div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="backend col-md-6">
                            BACKEND: JAVA - PYTHON - SQL
                            <ul className="back text-left">
                                <li className="row">
                                    <i class="fab fa-java"></i>
                                    <div className="progress">
                                        <div class="java progress-bar progress-bar-striped progress-bar-animated">Trainee</div>
                                    </div>
                                </li>
                                <li className="row">
                                    <i class="fab fa-python"></i>
                                    <div className="progress">
                                        <div class="python progress-bar progress-bar-striped progress-bar-animated">Trainee</div>
                                    </div>
                                </li>
                                <li className="row">
                                    <i class="fas fa-database"></i>
                                    <div className="progress">
                                        <div class="sql progress-bar progress-bar-striped progress-bar-animated">Trainee</div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Aboutme;