import "./App.css";
import NavBar from "./components/navBar/NavBar";
import SideBar from "./components/sidebar/SideBar";
import Content from "./components/content/Content";

import { useState } from "react";

function App() {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div className="App">
      <div className={`${openSidebar ? "hide" : ""} sidebar-container`}>
        <SideBar />
        <button
          className="hide-button"
          onClick={() => setOpenSidebar((prev) => !prev)}
        >
          <img src="./icon-hide-sidebar.svg" alt="hide sidebar" />
          <span>Hide Sidebar</span>
        </button>
      </div>
      {openSidebar && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="56"
          height="48"
          viewBox="0 0 56 48"
          fill="none"
          className="show-sidebar"
          onClick={() => setOpenSidebar((prev) => !prev)}
        >
          <path
            d="M0 0H32C45.2548 0 56 10.7452 56 24C56 37.2548 45.2548 48 32 48H0V0Z"
            fill="#635FC7"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M33.8154 23.4342C32.2491 20.7764 29.328 19 26 19C22.6706 19 19.7501 20.7776 18.1846 23.4342C17.9385 23.8519 17.9385 24.3703 18.1846 24.788C19.7509 27.4458 22.6719 29.2222 26 29.2222C29.3294 29.2222 32.2499 27.4446 33.8154 24.788C34.0615 24.3703 34.0615 23.8519 33.8154 23.4342ZM26 27.8889C23.9122 27.8889 22.2222 26.1992 22.2222 24.1111C22.2222 22.0233 23.9118 20.3333 26 20.3333C28.0878 20.3333 29.7778 22.0229 29.7778 24.1111C29.7778 26.1989 28.0882 27.8889 26 27.8889ZM26 27C27.5955 27 28.8889 25.7066 28.8889 24.1111C28.8889 22.5156 27.5955 21.2222 26 21.2222C25.5081 21.2222 25.045 21.3453 24.6396 21.5621L24.6405 21.5621C25.2975 21.5621 25.8301 22.0947 25.8301 22.7516C25.8301 23.4086 25.2975 23.9412 24.6405 23.9412C23.9836 23.9412 23.451 23.4086 23.451 22.7516L23.451 22.7507C23.2342 23.1561 23.1111 23.6192 23.1111 24.1111C23.1111 25.7066 24.4045 27 26 27Z"
            fill="white"
          />
        </svg>
      )}
      <div className={`${openSidebar ? "hide" : ""} navbar-content`}>
        <NavBar openSidebar={openSidebar} />
        <Content />
      </div>
    </div>
  );
}

export default App;
