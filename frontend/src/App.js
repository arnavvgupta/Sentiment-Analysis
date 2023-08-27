import Youtube from "./components/Youtube";
import "./App.css";
import Aboutpage from "./components/Aboutpage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Facebook from "./components/Facebook"
import Choosemedia from "./components/Choosemedia";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Aboutpage />} />
          <Route exact path="/urlAnalyser" element={<Choosemedia />} />
          <Route exact path="/urlAnalyser/youtube" element={<Youtube />} />
          <Route exact path="/urlAnalyser/facebook" element={<Facebook />} />
          {/* <Route exact path="/urlAnalyser/instagram" element={<Homepage />} />
          <Route exact path="/urlAnalyser/twitter" element={<Homepage />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
