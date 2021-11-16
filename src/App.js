import React, { Suspense, useEffect, useState } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  withRouter,
  Redirect,
} from "react-router-dom";
import App from "./App";
import ChatScreen from "./Screens/ChatScreen";

class Root extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path = {"*"} element={<ChatScreen/>}></Route>
        </Routes>
      </BrowserRouter>
  
    );
  }
}

export default Root;
