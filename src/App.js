import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import { HomePage } from "./pages/HomePage/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AboutPage } from "./pages/AboutPage/AboutPage";
import { Contact } from "./pages/Contact/Contact";
import { KnowUs } from "./pages/KnowUs/KnowUs";
import { Website } from "./pages/Website/Website";
import { Footer } from "./pages/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
        <Route path="/" element={<Website />} />

        <Route path="/about" element={<AboutPage />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/know-us" element={<KnowUs />} />
        {/* 
        <Route path="/*" element={<ErrorPage />} /> */}
         </Routes>
         <Footer/>
      </div>
      </BrowserRouter>
  );
}

export default App;
