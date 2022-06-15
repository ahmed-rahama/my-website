import './App.css';
import { Routes, Route } from 'react-router-dom';
import AboutMe from './component/aboutme/AboutMe';
import Home from './component/home/Home';
import Contact from './component/contact/Contact';
import Navbar from './component/navbar/Navbar';
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <ToastContainer />
    </div>
  );
}

export default App;
