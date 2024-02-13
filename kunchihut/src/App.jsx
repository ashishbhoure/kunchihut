import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import Contact from "./pages/contact";
import Project from "./pages/project";
import "./index.css";

function App() {
  return (
    <>
      <div>
        <h1 className="text-orange-600  underline"> hello </h1>
        <Header />
        <Footer />
        <Contact />
        <Project />
      </div>
    </>
  );
}

export default App;
