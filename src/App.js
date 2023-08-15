import './App.css';
import Sidebar from './Layout/Sidebar/Side-bar';
import Navbar from './Layout/Navbar/Nav-bar';
import Content from './Layout/Content/Content';
import { useState } from 'react';
import { useEffect } from 'react';


function App() {
  const [sideNav, setSideNav] = useState();

  let toggleSideNav = function (toggle) {
    setSideNav(toggle);
  }
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  useEffect(() => {
    width < 600 && handleSideNavToggle();
  }, [width]);

  function handleSideNavToggle() {
    console.log("toggle it");
  }

  return (
    <div className="App">

      <Sidebar onHide={sideNav} size={width} />
      <Navbar toggleSideNav={toggleSideNav} size={width} />

      <Content onHide={sideNav} size={width} />





    </div>
  );
}

export default App;
