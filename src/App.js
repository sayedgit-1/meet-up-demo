import { Route, Switch } from "react-router-dom";

import AllMeetups from "./pages/AllMeetups";
import Favorities from "./pages/Favorities";
import NewMeetup from "./pages/NewMeetup";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact={true}>
          <AllMeetups />
        </Route>
        <Route path="/new-meetup">
          <NewMeetup />
        </Route>
        <Route path="/favorites">
          <Favorities />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
