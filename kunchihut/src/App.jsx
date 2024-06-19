import "./App.css";
import Footer from "./components/footer";
import Contact from "./pages/contact";
import Project from "./pages/project";
import "./index.css";
import NavBar from "./components/NavBar";
import Home from "./pages/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { useEffect } from "react";
import { Helmet } from "react-helmet";

function App() {
  return (
    <Router>
      <Helmet>
        <title>HOME - Mahima Singh</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
    // <>
    //   <div>
    //     <Home />
    //     <NavBar />
    //     <Footer />
    //     <Contact />
    //     <Project />
    //   </div>
    // </>
  );
}

export default App;
