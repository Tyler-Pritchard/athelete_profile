import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/atheletes" className="navbar-brand">
            Tyler Pritchard
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/atheletes"} className="nav-link">
                Atheletes
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li>
          </div>
        </nav>
        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/atheletes"]} component={AtheletesList} />
            <Route exact path="/add" component={AddAthelete} />
            <Route path="/atheletes/:id" component={Athelete} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;