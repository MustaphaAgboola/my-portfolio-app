import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Components/Home/HomePage";
import Aboutme from "./Components/Home/Aboutme";
import Projects from "./Components/Home/Projects";
import ContactForm from "./Components/Home/ContactForm";
import NavBar from "./Components/Home/NavBar";
import Footer from "./Components/Home/Footer";

function App() {
  return (
    <div className=" h-screen bg-slate-800 text-gray-400">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<Aboutme />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/contactForm" element={<ContactForm />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
