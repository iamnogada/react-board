import React from 'react';
import { Link } from 'react-router';

import ContactList from './ContactList';
import ActivityList from './ActivityList';
import ArticleList from './ArticleList';

class Board extends React.Component {

    constructor(props){
        super(props);
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
                            <Link className="active" to={`/board/contact`}>Contact
                            <span className="w3-badge w3-red" style={badgeStyle}>8</span>
                            </Link></li>
                        <li className="tab col s3"><Link to={`/board/activity`}>Activity</Link></li>
                        <li className="tab col s3"><Link to={`/board/article`}>Article</Link></li>
                    </ul>                  
                </div>
                {this.props.children}                  
            </div>
        )
    }
}

export default Board;