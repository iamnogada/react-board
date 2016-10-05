import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import { Router, Route, browserHistory, IndexRoute, Redirect } from 'react-router';
import boardReducer from './reducer/board'
import MainApp   from './MainApp';
import Welcome from './Welcome';
import { Board, ContactList, ActivityList, ArticleList } from './board';
import SampleUI from './sampleui/SampleUI';

// Acton & Store Test
//import * as actions from './action/boardAction';

const middleware = [ thunk ]
//middleware.push(createLogger());

const store = createStore(
  boardReducer,
  applyMiddleware(...middleware)
)

/* Test Code for store
console.log(store.getState());
store.subscribe(()=> console.log(store.getState()));
store.dispatch(actions.getContacts(0));*/

const rootElement = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
    <Router history={browserHistory}>
        <Route component={MainApp}>
            <Route path="/" component={Welcome} />
            <Route  path="board" component={Board} >
                <IndexRoute component={ContactList} />
                <Route path="contact" component={ContactList} />
                <Route path="activity" component={ActivityList} />
                <Route path="article" component={ArticleList} />
            </Route>
            <Route path="sampleui" component={SampleUI} />
        </Route>
    </Router>
    </Provider>, rootElement
);