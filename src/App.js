import "./styles.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import HomeComponent from "./pages/HomeComponent";
import AccountComponent from "./pages/AccountComponent";
import CardComponent from "./pages/CardComponent";

export default function App() {
  return (
    <div className="ui container">
      <h2>Protected Routes</h2>
      <Router>
        <Switch>
          <Route path="/" exact component={HomeComponent} />
          <Route path="/cards" component={CardComponent} />
          <Route path="/accounts" component={AccountComponent} />
        </Switch>
      </Router>
    </div>
  );
}
