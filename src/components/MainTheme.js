import React from 'react';
import koryspng1 from '../styles/koryspng1.png';

class MainTheme extends React.Component {
    render() {
        return(
            <div className="mtns-container">
                <span className="text1">Welcome</span>
                <span className="text2">on my route</span>
                <img className="my-img img-fluid" src={koryspng1} alt="myimage"></img>
            </div>
        );
    }
}

export default MainTheme;