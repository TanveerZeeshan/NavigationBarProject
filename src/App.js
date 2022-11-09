import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import "./App.css";
import About from "./Pages/About";
import Help from "./Pages/Help";
import MainHeader from "./Components/MainHeader";
import PageNotFound from "./Pages/PageNotFound";
import LocationComp from "./Components/LocationComp";
import Contacts from "./Components/Contacts";
import LocationDetail from "./Components/LocationDetail";
import Ourlocations from "./Pages/Ourlocations";



function App() {
  return (
    <div className="App">
      <MainHeader /> 
      
      <main>
        <Routes>
          <Route path="/ProjectNav" element={<Home/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
      
          <Route path="/about" element={<About />} />
          <Route path="/help" element={<Help />}>
            <Route path="location" element={<LocationComp />}/>
            <Route path="contacts" element={<Contacts />} />
          </Route>
          <Route path="ourlocation" element={<Ourlocations/>}/>
          <Route path="/ourlocation/:name" element={<LocationDetail/>}/>

          <Route path="/*" element={<PageNotFound/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
