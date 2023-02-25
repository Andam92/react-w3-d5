import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Sidebar from "./Components/Sidebar.jsx";
import Main from "./Components/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AlbumDetails from "./Components/AlbumDetails";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Container fluid className="text-start">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/details/:id" element={<AlbumDetails />}></Route>
          </Routes>{" "}
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
