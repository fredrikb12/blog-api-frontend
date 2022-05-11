import { HashRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import Homepage from "./Homepage";

function RouteSwitch() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Homepage/>} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default RouteSwitch;
