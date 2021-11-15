import "./App.css";
import CreateJob from "./components/CreateJob";
import JobListing from "./components/JobListing";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <JobListing />
      {/* <CreateJob /> */}
    </div>
  );
}

export default App;
