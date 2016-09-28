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
                            <Link className="active" to={`${this.props.pathname}`}>Contact
                            <span className="w3-badge w3-red" style={badgeStyle}>8</span>
                            </Link></li>
                        <li className="tab col s3"><Link to={`${this.props.pathname}/activity`}>Activity</Link></li>
                        <li className="tab col s3"><Link to={`${this.props.pathname}/article`}>Article</Link></li>
                    </ul>
                    <Match exactly pattern={this.props.pathname} component={ ContactList } />
                    <Match pattern={`${this.props.pathname}/activity`} component={ ActivityList } />
                    <Match pattern={`${this.props.pathname}/article`} component={ ArticleList } />
                </div>
                
            </div>
        )
    }
}

export default Board;