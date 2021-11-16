import "./App.css";
import CreateJob from "./components/CreateJob";
import JobListing from "./components/JobListing";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Redirect from "./components/Redirect";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<AboutUs />} />
        <Route exact path="/jobs" element={<JobListing />} />
        <Route exact path="/createJob" element={<CreateJob />} />
        <Route exact path="/jobCategory/:category" element={<JobListing />} />
        <Route exact path="*" element={<Redirect />} />
      </Routes>
    </Router>
  );
}

export default App;
