import { Route, Switch } from "wouter";
import Dashboard from "./pages/dashboard";
import Terminal from "./pages/terminal";
import Signals from "./pages/signals";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" component={Dashboard} />
      <Route path="/terminal" component={Terminal} />
      <Route path="/signals" component={Signals} />
    </Switch>
  );
}
