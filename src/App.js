import Nav from "./components/Nav";
import AboutUs from "./pages/AboutUs";
//to apply global styles
import GlobalStyle from "./styles/GlobalStyle";
import ContactMe from "./pages/ContactMe";
import MyWork from "./pages/MyWork";
import { BrowserRouter,Routes, Route, useLocation} from "react-router-dom"
import MovieDetail from "./pages/MovieDetail";
import {AnimatePresence} from "framer-motion"

function App() {
  const location = useLocation();
  return (
    <div className="App">
      
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route exact path="/"  element={ <AboutUs />} />

          <Route exact path="/work" element={ <MyWork /> }  />
          
          <Route path="/work/:id" element={ <MovieDetail /> }  />

          <Route path="/contact" element={ <ContactMe />} />
            
        </Routes>
        </AnimatePresence>
    </div>
  );
}

export default App;
