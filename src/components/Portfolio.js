import React from 'react';

class Portfolio extends React.Component {
    render() {
        return(
            <div className="pf-container">
                <div className="portfolio-window text-center">
                    <div className="portfolio-info-fluid">
                        <header className="portfolio-header">Portfolio</header>
                        <article className="portolio-content">My timmer</article>
                        <article className="portolio-content">Weather App</article>
                    </div>
                </div>
            </div>
        );
    }
}
export default Portfolio;