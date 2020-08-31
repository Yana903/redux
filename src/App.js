import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import DialogsContainer from "./components/Dialogs/DialogsContainer"
import {BrowserRouter, Route} from "react-router-dom"

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Navbar />
      <div className="wrapperContent">
        <Route exect path="/dialogs" 
          render={() => <DialogsContainer />} />
        <Route path="/profile" 
          render={() => <Profile />}
        />
      </div>
    </div>
  );
}

export default App;
