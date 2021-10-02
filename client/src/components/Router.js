import { Link, Route } from "react-router-dom";
import NavBar from "./common/NavBar";
import Home from "./home/Home";
import Login from "./login/Login";

export default function Navigation() {
  return (
    <div className="col-lg-12">
      <Route exact path="/home">
        <Home></Home>
      </Route>
      <Route path="/">
      <Home></Home>
    </Route>
    </div>
  );
}
