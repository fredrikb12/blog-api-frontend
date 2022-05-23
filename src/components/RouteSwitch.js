import { HashRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import About from "./About/About";
import Archive from "./Archive/Archive";
import Homepage from "./Homepage";
import Post from "./Post";

function RouteSwitch() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Homepage />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/about" element={<About />} />
          <Route path="/posts/:postId" element={<Post />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default RouteSwitch;
