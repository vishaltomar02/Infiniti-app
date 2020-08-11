import React from 'react';
import { Route , Switch } from 'react-router-dom';
import AppTemplatePage from './AppTemplate';

function App(props) {
  return (
    <Switch>
      <Route path='/' component={AppTemplatePage}/>
    </Switch>
  );
}

export default App;
