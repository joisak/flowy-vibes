import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import About from './Pages/About/About';
import Contacts from './Pages/Contacts/Contacts';
import WelcomePage from './Pages/Welcome/Welcome';

function App() {
  return (
    <>
      <Switch>
        <Route path='/contacts' component={Contacts} />
        <Route path='/about' component={About} />
        <Route path='/' component={WelcomePage} />
      </Switch>
    </>
  );
}

export default App;
