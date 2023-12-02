import "./App.css";
import NavBar from "./components/navBar/NavBar";
import SideBar from "./components/sidebar/SideBar";
import Content from "./components/content/Content";

//modal
import Modal from "./components/modal/Modal";

import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <div className="sidebar">
        <SideBar />
      </div>
      <div className="navbar-content">
        <NavBar />
        <button
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            setIsOpen(true);
            console.log(isOpen);
          }}
        >
          Open
        </button>
        <Modal handleClose={() => setIsOpen(false)} isOpen={isOpen}>
          This is Modal Content!
        </Modal>
        <Content />
      </div>
    </div>
  );
}

export default App;
