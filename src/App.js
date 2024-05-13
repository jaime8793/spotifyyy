import logo from "./logo.svg";
import "./App.css";
import Navbar from "./navbar";
import GetItems from "./topTracks";

function App() {
  return (
    <div className="App">
      <Navbar />
      <GetItems />
    </div>
  );
}

export default App;
