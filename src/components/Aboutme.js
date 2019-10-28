import React from 'react';
import { useTranslation } from 'react-i18next';

function Aboutme() {
    const { t } = useTranslation();

        return(
            <div className="am-container">
                <div className="am-window text-center">
                    <div className="am-info-fluid">
                        <header className="am-header">{t('Aboutme-title.1')}</header>
                        <article className="am-content">{t('About-me.1')}</article>
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

export default Aboutme;