import { Link, Route } from "react-router-dom";
import NavBar from "./common/NavBar";
import Home from "./home/Home";

export default function Router() {
  return (
    <div>
      <NavBar></NavBar>
      <Route exact path="/">
        <Home></Home>
      </Route>
      {/* <Route path="/">
      <Login></Login>
    </Route> */}
    </div>
  );
}
