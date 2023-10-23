import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ButtonPage from './pages/ButtonPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/button">
          <ButtonPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;