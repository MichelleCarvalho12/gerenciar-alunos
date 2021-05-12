import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Novo from './pages/NovoAluno';

export default function Routes(){
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component = {NovoAluno}/>
      </Switch>
    </BrowserRouter>
  )
}