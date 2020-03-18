import React from 'react';

import { AboutPage } from './pages/AboutPage';
import { TodoPage } from './pages/TodoPage';
import { Navbar } from './components/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const App: React.FC = () => {


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Switch>
            <Route component={TodoPage} path="/" exact />
            <Route component={AboutPage} path="/about" exact />
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
