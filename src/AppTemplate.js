import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import SignUpPage from './SignUpPage';
import ContentPage from './ContentPage';

export default function AppTemplate(){
  return (
    <div className="app">
      <Switch>
        <Redirect exact from='/' to='/sign-up'/>
        <Route path='/sign-up' component={SignUpPage}/>
        <Route path='/content-page' component={ContentPage}/>
      </Switch>
    </div>
  );
}