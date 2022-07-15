import { useContext } from "react";
import About from "./components/about/about";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/intro";
import ProductList from "./components/productList/productList";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./reducer";


const App = () => {

  const theme = useContext(ThemeContext)
  const darkModeOn = theme.state.darkMode
  

  return <div style={{backgroundColor: darkModeOn ? "#333" : "white", color: darkModeOn && "white"}}>
    <Toggle />
    <Intro />
    <About />
    <ProductList />
    <Contact />
    </div>;
};

export default App;