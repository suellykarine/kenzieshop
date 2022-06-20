import "./App.css";

import { Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import PageCart from "./pages/cart";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/cart">
            <PageCart />
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
