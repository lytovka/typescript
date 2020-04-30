import React from 'react';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';



const App: React.FC = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route component={HomePage} path='/' exact/>
          <Route component={AboutPage} path='/about' exact/>
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
