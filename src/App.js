import React from 'react';
import './CSS/App.css';
import Header from './Header.js';
import Home from './Home.js'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    //BEM naming convention used
    <Router>
      <div className="App">
      <Switch>
          <Route Path= "/checkout">
            <Header></Header>
            <h1> Check out here</h1>
          </Route>
        </Switch>
        <Switch>
          <Route Path="/">      {/*Setting header and home as default route (default statement is a lways at bottom) */}
            {/* Header */} <Header />
            {/* Home */} <Home />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
