import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Pages/Home";
import Products from "./components/Pages/Products";
import Services from "./components/Pages/Services";
import SignUp from "./components/Pages/SignUp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faCheckSquare,
  faCoffee,
  faBars,
  faTimes,
  faPlane,
  faPlayCircle
} from "@fortawesome/free-solid-svg-icons";

library.add(
  fab,
  faCheckSquare,
  faCoffee,
  faBars,
  faTimes,
  faPlane,
  faPlayCircle
);

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/products" component={Products} />
          <Route path="/sign-up" component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}
