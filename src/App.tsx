import React from 'react';
import './App.css';
import HeaderComponent from './component/HeaderComponent';
import {
   Router, Route, Switch
} from 'react-router-dom';
import HomeComponent from "./component/HomeComponent";
import AboutComponent from "./component/AboutComponent";
import GalleryComponent from "./component/GalleryComponent";
import history from './services/history';


function App() {
  return (
    <div className="App">
      <HeaderComponent/>
      <Router history={history}>
          <Switch>
              <Route exact={true} path='/home' >
                  <HomeComponent/>
              </Route>
              <Route exact={true} path='/about'>
                  <AboutComponent/>
              </Route>
              <Route exact={true} path='/gallery'>
                  <GalleryComponent/>
              </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
