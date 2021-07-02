import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import HomeView from "./views/home/HomeView";
import RegisterLoginView from "./views/registerLogin/RegisterLoginView";
import SinglePostView from "./views/singlePost/SinglePostView";
import NewPostView from "./views/newPost/NewPostView";

function Routes() {
    return (
        <Router>
          <Switch>
            <Route path="/post/:post_id">
              <SinglePostView />
            </Route>
            <Route path="/new_post">
              <NewPostView />
            </Route>
            <Route path="/register_login">
              <RegisterLoginView />
            </Route>
            <Route path="/">
              <HomeView />
            </Route>
          </Switch>
        </Router>
    );
  }
  
  export default Routes;
  