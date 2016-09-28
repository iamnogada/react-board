import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute, Redirect } from 'react-router';
import MainApp   from './MainApp';
import Welcome from './Welcome';
import { Board, ContactList, ActivityList, ArticleList } from './board';
import SampleUI from './sampleui/SampleUI';


const rootElement = document.getElementById('root');

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={MainApp}>
            <IndexRoute component={Welcome} />            
            <Route path="board" component={Board}>
                <IndexRoute component={ContactList} />               
                <Route path="contact" component={ContactList} />
                <Route path="activity" component={ActivityList} />  
                <Route path="article" component={ArticleList} />                  
            </Route>
            <Route path="sampleui" component={SampleUI}/>
        </Route>
    </Router>, rootElement
);