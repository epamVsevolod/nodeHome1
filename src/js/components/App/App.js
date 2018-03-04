import React from 'react';
import { Router, Route, Switch } from 'react-router';
// import { BrowserRouter } from 'react-router-dom';
import Game from '../Game';
import Statistics from '../Statistics';

const App = () => (
    <Switch>
        <Route exact path="/game" component={Game}/>
        <Route path="/div" component={Statistics}/>
    </Switch>
);
export default App;
