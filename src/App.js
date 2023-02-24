import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Sidebar from "./Components/Sidebar.jsx";
import Main from "./Components/Main";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
