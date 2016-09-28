import React from 'react';
import { BrowserRouter as Router, Link, Match, Miss } from 'react-router';
import Welcome from './Welcome';
import Board from './board/Board';
import SampleUI from './sampleui/SampleUI';


class MainApp extends React.Component {
    constructor(){
        super();
        
    }
    
    render(){
        const imgStyle = {
            "width":"300px"
        }
        const sideBarStyle = {
            "Height":"600px"
        }
        return  (
            <Router>
            <div >
                <div className="navbar-fixed">
                    <nav>
                        <div className="nav-wrapper">
                            <Link to='/' className="brand-logo center">React + MD</Link>
                            <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
                            <ul className="right hide-on-med-and-down">
                                <li><Link to='/board'>Board</Link></li>
                                <li><Link to='/sampleui'>SampleUI</Link></li>
                            </ul>
                            <ul className="side-nav" id="mobile-demo" style={sideBarStyle}>
                                <li><img src="img/sidebar-title.jpg" style={imgStyle}/></li>
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='/board'>Board</Link></li>
                                <li><Link to='/sampleui'>SampleUI</Link></li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div className="container">
                    <Match exactly pattern='/' component={ Welcome } />
                    <Match pattern='/board' component={ Board } />
                    <Match pattern='/sampleui' component={ SampleUI } />
                </div>
            </div>
            </Router>

        );
    };

    // _updateValue(randomValue){
    //     this.setState({
    //         value: randomValue
    //     });
    // }
}

// App.defaultProps = {
//     header: 'Default header',
//     contentTitle: 'Default contentTitle',
//     contentBody: 'Default contentBody'
// }

export default MainApp;