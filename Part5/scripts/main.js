import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import ActorDetails from './actors/ActorDetails';
import Actors from './actors/Actors';
import App from './App';
import FilmDescription from './films/FilmDescription';
import Films from './films/Films';
import Home from './main/Home';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/films" component={Films}>
        <Route path="/films/:filmName" component={FilmDescription} />
      </Route>
      <Route path="/actors" component={Actors}>
        <Route path="/actors/:actorName" component={ActorDetails} />
      </Route>
    </Route>
  </Router>,
  document.querySelector("#app")
);
