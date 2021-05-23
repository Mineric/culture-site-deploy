import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Cards from './components/Cards';

import ScrollToTop from './scrollTop';
import Footer from './components/Footer';

import Anime from './components/Manga/index';
import JRock from './components/JRock/index';
import JPop from './components/JPop/index';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <ScrollToTop />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/categories' component={Cards} />
          {/* <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} /> */}
          <Route path='/Footer' component={Footer} />
        </Switch>

        <Switch>
          <Route path='/Anime/index' component={Anime} />
          <Route path='/JRock/index' component={JRock} /> 
          <Route path='/JPop/index' component={JPop} /> 
        </Switch>
        
      </Router>
    </>
  );
}

export default App;
