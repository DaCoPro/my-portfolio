import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import NavBar from '../../Components/NavBar/NavBar';
import Intro from '../Intro/Intro';
import Resume from '../Resume/Resume';
import Portfolio from '../Portfolio/Portfolio';
import Contact from '../Contact/Contact';

export default function App() {
  return ( 
    <Router>
      <main>
        <NavBar />
        <Switch >
          <Route path="/intro">
            <Intro /> 
          </Route>
          <Route path="/resume">
            <Resume /> 
          </Route>
          <Route path="/portfolio">
            <Portfolio /> 
          </Route>
          <Route path="/contact">
            <Contact /> 
          </Route>
          <Redirect to="/intro" />
        </Switch>
      </main>
    </Router> 
  );
}

