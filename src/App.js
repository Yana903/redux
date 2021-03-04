import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import DialogsContainer from "./components/Dialogs/DialogsContainer"
import {BrowserRouter, Route} from "react-router-dom"
import UsersContainer from "./components/Users/UsersContainer"
import ProfileContainer from "./components/Profile/ProfileContainer"

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Navbar />
      <div className="wrapperContent">
        <Route exect path="/dialogs" 
          render={() => <DialogsContainer />} />

        <Route path="/profile" 
          render={() => <ProfileContainer />}
        />

        <Route path="/users" 
          render={() => <UsersContainer />}
        />
      </div>
    </div>
  );
}

export default App;
