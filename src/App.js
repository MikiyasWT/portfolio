import Nav from "./components/Nav";
import AboutUs from "./pages/AboutUs";
//to apply global styles
import GlobalStyle from "./styles/GlobalStyle";
import ContactMe from "./pages/ContactMe";
import MyWork from "./pages/MyWork";
import { BrowserRouter,Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      
      <GlobalStyle />
      <Nav />
      
        <Routes>
          <Route exact path="/"  element={ <AboutUs />} />

          <Route path="/work" element={ <MyWork /> }  />

          <Route path="/contact" element={ <ContactMe />} />
            
        </Routes>
      
    </div>
  );
}

export default App;
