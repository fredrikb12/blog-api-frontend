import { HashRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import About from "./About";
import Archive from "./Archive";
import Homepage from "./Homepage";

function RouteSwitch() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Homepage />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/about" element={<About/>} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default RouteSwitch;
