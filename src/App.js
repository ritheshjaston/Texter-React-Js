import lgo from './Mr3W.gif';
import './App.css';
import React from "react";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home';
import Texter from './components/Text';
import About from './components/About';
import Constact from './components/Contact';
import Hometab from './components/Hometab';
function App() {

  // const [handler, sethandler] = useState("uppercase");
  return (
    <Router>
      <Home logo={lgo} />
      
      <Routes>
        <Route path='/' element={<Hometab/>}>
        </Route>
        <Route path='/upper' element={<Texter title={"Uppercase Convert"} placehold={"Enter Text Here"} handler={"upper"} />}>
        </Route>
        <Route path='/lower' element={<Texter title={"Lowercase Convert"} placehold={"Enter Text Here"} handler={"lower"} />}>
        </Route>
        <Route path='/convertxml' element={<Texter title={"HTML To XML Convert"} placehold={"Enter Html code Here"} handler={"xml"} />}>
        </Route>
        <Route path='/converthtml' element={<Texter title={"XML To HTML Convert"} placehold={"Enter Xml code Here"} handler={"html"} />}>
        </Route>
        <Route path='/about' element={<About/>}>
        </Route>
        <Route path='/contact' element={<Constact/>}>
        </Route>
        
      </Routes>
    </Router>
  );
}

export default App;
