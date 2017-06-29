import * as React from 'react';
import {Switch, Route, Redirect, Link} from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h2>Home</h2>
      <p><Link to="/">Home</Link></p>
      <p><Link to="/hello">Hello</Link></p>
      <p><Link to="/hi">Hi</Link></p>
    </div>
  );
};

const Hello = () => {
  return (
    <div>
      <h2>Hello</h2>
      <p><Link to="/">Home</Link></p>
      <p><Link to="/hello">Hello</Link></p>
      <p><Link to="/hi">Hi</Link></p>
    </div>
  );
};

class App extends React.Component<{}, {}> {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/hello" component={Hello} />
        <Redirect from="*" to="/" />
      </Switch>
    );
  }
}

export default App;
