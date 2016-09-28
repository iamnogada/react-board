import React from 'react';
import { Link } from 'react-router';
import Welcome from './Welcome';
import Board from './board/Board';
import SampleUI from './sampleui/SampleUI';


class MainApp extends React.Component {
    constructor(props){
        super(props);
        
    }
    
    render(){
        const imgStyle = {
            "width":"300px"
        }
        const sideBarStyle = {
            "Height":"600px"
        }
        return  (
            <div>
                <div className="navbar-fixed">
                    <nav>
                        <div className="nav-wrapper">
                            <Link to="/home" className="brand-logo center">React + MD</Link>
                            <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
                            <ul className="right hide-on-med-and-down">
                                <li><Link to='/board'>Board</Link></li>
                                <li><Link to='/sampleui'>SampleUI</Link></li>
                            </ul>
                            <ul className="side-nav" id="mobile-demo" style={sideBarStyle}>
                                <li><img src="img/sidebar-title.jpg" style={imgStyle}/></li>
                                <li><Link to='/home'>Home</Link></li>
                                <li><Link to='/board'>Board</Link></li>
                                <li><Link to='/sampleui'>SampleUI</Link></li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div className="container">
                {this.props.children}
                </div>
            </div>

        );
    };

  
}



export default MainApp;