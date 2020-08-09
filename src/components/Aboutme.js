import React from 'react';
//import { useTranslation } from 'react-i18next';

function Aboutme() {
    //const { t } = useTranslation();

        return(
            <div className="am-container">
                <div className="am-window text-center">
                    <div className="am-info-fluid">
                        <header className="am-header">About me</header>
                        <article className="am-content">
                            <p>I was born in '93. I have been <strong>interested in computers for ages</strong>, but I would never thought that working with them can be my profession.</p> 
                            <p>I finished Logistics Management at University of Economics in Poznan in 2018 and started working as Junior Transport Planner in Eurocash.
                               Meanwhile I have started <strong>studying German language</strong> and the basics of programming.
                               I also finished <strong>CodersCamp</strong> where I learned basics of <strong>Front End</strong> (HTML, CSS, JS, Node.js, npm, React).</p> 
                            <p>Currently I am learning everything what is important to be <strong>Java Programmer</strong> (GIT, JVM, TDD, SQL/NoSQL, JDBC, Hibernate, JSP, Servlet, Spring, Scrum Methodology)</p>
                            <p>I would like you invite you to follow my website and social media. If you have any questions, do not hesitate to contact me.</p>
                        </article>
                    </div>
                    <div className="am-skills row">
                        <div className="frontend col-md-6">
                        FRONTEND: HTML5 - CSS - JS
                            <ul className="front text-left">
                                <li className="row">
                                    <i className="fab fa-html5"></i>
                                    <div className="progress">
                                        <div className="html progress-bar progress-bar-striped progress-bar-animated">Middle</div>
                                    </div>
                                </li>
                                <li className="row">
                                    <i class="fab fa-css3-alt"></i>
                                    <div className="progress">
                                        <div className="css progress-bar progress-bar-striped progress-bar-animated">Middle</div>
                                    </div>
                                </li>
                                <li className="row">
                                    <i className="fab fa-js-square"></i>
                                    <div className="progress">
                                        <div className="js progress-bar progress-bar-striped progress-bar-animated">Junior</div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="backend col-md-6">
                            BACKEND: JAVA - PYTHON - SQL
                            <ul className="back text-left">
                                <li className="row">
                                    <i className="fab fa-java"></i>
                                    <div className="progress">
                                        <div className="java progress-bar progress-bar-striped progress-bar-animated">Junior</div>
                                    </div>
                                </li>
                                <li className="row">
                                    <i className="fab fa-python"></i>
                                    <div className="progress">
                                        <div className="python progress-bar progress-bar-striped progress-bar-animated">Trainee</div>
                                    </div>
                                </li>
                                <li className="row">
                                    <i className="fas fa-database"></i>
                                    <div className="progress">
                                        <div className="sql progress-bar progress-bar-striped progress-bar-animated">Trainee</div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

export default Aboutme;
