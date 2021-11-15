import "./App.css";
import CreateJob from "./components/CreateJob";
import JobListing from "./components/JobListing";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <JobListing />
      {/* <CreateJob /> */}
    </>
  );
}

export default App;
