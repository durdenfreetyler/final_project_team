import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DashboardPage from "./components/dashboard/DashBoardPage";

function dash() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {/* add your main page component here */}
        </Route>
        <Route path="/dashboard">
          <DashboardPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default dash;
