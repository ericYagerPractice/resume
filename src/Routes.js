import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/UserStories" component={Home} />
        <Route
          render={function() {
            return <h1>Not Found</h1>;
          }}
        />
      </Switch>
    );
  }
}

export default Routes;
