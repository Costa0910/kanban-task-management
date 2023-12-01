import "./App.css";
import NavBar from "./components/navBar/NavBar";
import SideBar from "./components/sidebar/SideBar";
import Content from "./components/content/Content";

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <SideBar />
      </div>
      <div className="nav-bar-content">
        <NavBar />
        <Content />
      </div>
    </div>
  );
}

export default App;
