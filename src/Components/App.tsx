import React from 'react';
import './App.css';
import HomePageContainer from "../Containers/HomePageContainer";
import ErrorModalContainer from "../Containers/ErrorModalContainer";
import { Switch, Route } from "react-router-dom";
import ContactDetailPageContainer from "../Containers/ContactDetailPageContainer";

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={HomePageContainer}/>
        <Route exact path="/:contactId" component={ContactDetailPageContainer}/>
      </Switch>
      <ErrorModalContainer/>
    </React.Fragment>
  );
}

export default App;
