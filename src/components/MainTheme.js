import React from 'react';
import koryspng1 from '../styles/koryspng1.png';

class MainTheme extends React.Component {
    render() {
        return(
            <div className="mtns-container">
                <h1 cassName="text-md-center">Welcome on my trail.</h1>
                <img className="my-img img-fluid" src={koryspng1} alt="myimage"></img>
            </div>
        );
    }
}

export default MainTheme;