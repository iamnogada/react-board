import React from 'react';
import { Link } from 'react-router';

class Welcome extends React.Component {
    render() {
        return (
            <div>
                <div className="section no-pad-bot" id="index-banner">
                    <div className="container">
                        <br /><br />
                        <h1 className="header center orange-text">React + Material Design Sample</h1>
                        <div className="row center">
                            <h5 className="header col s12 light">A modern responsive front-end framework based on Material Design</h5>
                        </div>
                        <div className="row center">
                            <Link to="/board" id="download-button" className="btn-large waves-effect waves-light orange">Board</Link>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <Link to="/sampleui" id="download-button" className="btn-large waves-effect waves-light orange">Sample</Link>
                        </div>
                        <br /><br />
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Welcome;