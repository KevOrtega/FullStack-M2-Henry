import React from "react";

import Favorites from "./components/Favorites/Favorites";
import Buscador from "./components/Buscador/Buscador";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Movie from "./components/Movie/Movie";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Buscador} />
        <Route path="/favs" component={Favorites} />
        <Route path="/movie/:id" render={({match}) => <Movie match={match} />} />
      </Switch>
    </Router>
  );
}

export default App;
