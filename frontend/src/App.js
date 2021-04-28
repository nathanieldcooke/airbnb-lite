import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormModal/LoginFormModal";
import HomePage from "./components/HomePage/HomePage";
// import Navigation from "./components/Navigation";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import NavBar from "./components/NavBar/NavBar";
import ShowSpots from "./components/ShowSpots/ShowSpots";
import ShowSpot from "./components/ShowSpot/ShowSpot";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      {/* <Navigation isLoaded={isLoaded} /> */}
      <NavBar isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <HomePage isLoaded={isLoaded} />
          </Route>
          <Route path="/spots/:link">
            <ShowSpots />
          </Route>
          <Route path="/spot/:spotId">
            <ShowSpot />
            {/* <LoginFormPage /> */}
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;