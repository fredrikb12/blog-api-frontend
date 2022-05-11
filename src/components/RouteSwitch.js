import { HashRouter, Routes, Route } from "react-router-dom";
import App from "../App";

function RouteSwitch() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<h1>Homepage?</h1>} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default RouteSwitch;
