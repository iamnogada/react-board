import React from 'react';
import { BrowserRouter as Router, Link, Match, Miss } from 'react-router';

import ContactList from './ContactList';
import ActivityList from './ActivityList';
import ArticleList from './ArticleList';

class Board extends React.Component {

    constructor(pathname){
        super(pathname);
        
    }

    render() {
        const badgeStyle = {
            lineHeight:"20px"
        }

        return (
            <div >
                <div className="row">
                    <ul className="tabs">
                        <li className="tab col s3">
                            <a className="active" href="#contact">Contact
                            <span className="w3-badge w3-red" style={badgeStyle}>8</span>
                            </a></li>
                        <li className="tab col s3"><a href="#activity">Activity</a></li>
                        <li className="tab col s3"><a href="#article">article</a></li>
                    </ul>
                    <div id="contact" className="col s12"><ContactList /></div>
                    <div id="activity" className="col s12"><ActivityList /></div>
                    <div id="article" className="col s12"><ArticleList /></div>
                </div>
                
            </div>
        )
    }
}

export default Board;