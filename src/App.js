import { Box } from "@material-ui/core";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//components
// import Header from "./components/header";
// import Home from "./components/home/home";
// import DetailView from "./components/post/detailView";
// import CreateView from "./components/post/createView";
// import UpdateView from "./components/post/updateView";
import AppWithRouterAccess from "./AppWithRouterAccess";

const App = () => {
  return (
    <BrowserRouter>
      <AppWithRouterAccess />
      {/* <Header /> */}
      {/* <Box style={{marginTop: 64}}>
        <Switch>
           <Route exact path="/" component={Home} />
           <Route exact path="/details/:id" component={DetailView} />
           <Route exact path="/create" component={CreateView}/>
           <Route exact path="/update/:id" component={UpdateView}/>
        </Switch>
      </Box> */}
    </BrowserRouter>
  );
}

export default App;
