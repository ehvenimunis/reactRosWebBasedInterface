import React, { Component } from "react";
import { Container } from "react-bootstrap"
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./Home"
import Map from "./Map"
import About from "./About"

class Body extends Component {
  render() {
        return ( 
        <Container> 
            <Router>
                <Switch>
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/map" exact component={Map}></Route>
                    <Route path="/about" exact component={About}></Route>
                </Switch>
            </Router>
            
        </Container>
        );
  }
}

export default Body;
