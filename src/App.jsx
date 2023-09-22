//50-3
import "./App.css";
import Header from "./components/Header/Header"
import Shop from './components/Shop/Shop'
import NavBar from "./components/NavBar/NavBar";
import Contact from "./components/Contact/Contact";
function App() {
  return <div className="App">
    
    <NavBar></NavBar>
    <Header></Header>
    
    <Shop></Shop>
    <Contact></Contact>
  </div>;
}

export default App;



