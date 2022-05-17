import "./App.css";
import { HashRouter, Route } from "react-router-dom";
import Tutorial from "./routes/Tutorial";
import Reference from "./routes/Reference";
import Practice from "./routes/Practice";
import Home from "./routes/Home";

function App() {
  return (
    <HashRouter>
      <Route path="/tutorial" component={Tutorial} />
      <Route path="/reference" component={Reference} />
      <Route path="/practice" component={Practice} />
      <Route path="/home" component={Home} />
    </HashRouter>
  );
}

export default App;
