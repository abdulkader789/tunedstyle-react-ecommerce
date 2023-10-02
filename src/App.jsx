//50-3
import React, { useEffect, useState } from 'react';

import "./App.css";
import Header from "./components/Header/Header"
import Shop from './components/Shop/Shop'
import NavBar from "./components/NavBar/NavBar";
import Contact from "./components/Contact/Contact";
import Loader from './components/Loader/Loader';
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching or any other asynchronous task
    setTimeout(() => {
      setIsLoading(false); // Set loading state to false when data is loaded
    }, 2000); // Simulated delay for demonstration
  }, []);
  return <div className="App">
    {
      isLoading ? <Loader></Loader> :
        <>
          <NavBar></NavBar>
          <Header></Header>

          <Shop></Shop>
          <Contact></Contact>
        </>

    }
  </div>;
}

export default App;



