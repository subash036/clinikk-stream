import { Route, Switch } from "react-router-dom";
import Audio from "./audio/Audio";
import NavBar from "./common/nav/NavBar";
import Home from "./home/Home";
import Counter from "./RND/Counter";

export default function Navigation() {
  return (
    <div className="col-lg-12">
      {/* <NavBar /> */}
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/video" component={Home}>
          <Home></Home>
        </Route>
        <Route path="/audio">
          <Audio></Audio>
        </Route>
        <Route path="/RND">
          <Counter></Counter>
        </Route>
      </Switch>
    </div>
  );
}
