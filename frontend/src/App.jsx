import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import User from "./pages/User";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/admin" component={Admin} />
            <Route path="/user" component={User} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
