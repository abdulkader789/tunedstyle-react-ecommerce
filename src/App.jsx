//50-3
import "./App.css";
import Header from "./components/Header/Header"
import Shop from './components/Shop/Shop'
import NavBar from "./components/NavBar/NavBar";
import Contact from "./components/Contact/Contact";
import { CartProvider } from './components/Cart/CartContext';
function App() {
  return <div className="App">
    <CartProvider>
      <NavBar></NavBar>
      <Header></Header>

      <Shop></Shop>
      <Contact></Contact>

    </CartProvider>
  </div>;
}

export default App;



