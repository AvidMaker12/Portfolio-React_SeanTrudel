import './styles/w3css-master/w3.css';
import './styles/styles.css';

import Header from './components/Header';
import Footer from './components/Footer';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./routes/Home";
import About from "./routes/About";
import Projects from "./routes/Projects";
import Education from "./routes/Education";

function App() {

  return (
    <div className="page">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );

}

export default App;