import React from 'react';
import { Route, Switch } from "react-router-dom";
import CepAdd from "./components/CepAdd";
import CepList from "./components/CepList";

export default function Routes(){
  return (
    <Switch>
      <Route exact path="/" component={CepList}/>
      <Route path="/add" component={CepAdd}/>
    </Switch>
  )
}
