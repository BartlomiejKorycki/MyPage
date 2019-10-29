import React from 'react';
import bedoka from '../styles/bedoka.png';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

function Navbar() {
    const { t } = useTranslation();

    function handleClick(lang) {
        i18next.changeLanguage(lang)
    }

    return(
        <nav className="navbar navbar-expand-md">
            <div className="container container-fluid">
                <a className="navbar-brand" href="/" data-toggle="tooltip" title="Start">
                    <img className="navbar-img" src={bedoka} alt="mylogo" width="100px"></img>
                </a>
                <button className="navbar-toggler" data-toggle="collapse" data-target="#my-navbar-button">
                    <i className="fas fa-fingerprint"></i>
                </button>
                <div className="collapse navbar-collapse" id="my-navbar-button">
                    <ul className="nav navbar-nav text-center">
                        <li><a className="active am" href='about'>{t('About.1')}</a></li>
                        <li><a className="active pf" href="portfolio">Portfolio</a></li>         
                        <li className="nav-item-dropdown">
                            <a className="nav-link dropdown-toggle lrg" href="google.com" data-toggle="dropdown">
                                {t('Language.1')}
                            </a>
                            <div className="dropdown-menu text-center">
                                <a className="dropdown-item pl" href="/" onClick={()=>handleClick('pl')}>Polski</a>
                                <a className="dropdown-item de" href="/" onClick={()=>handleClick('de')}>Deutsch</a>
                                <a className="dropdown-item en" href="/" onClick={()=>handleClick('en')}>English</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;