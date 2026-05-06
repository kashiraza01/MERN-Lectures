import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import H from './components/Home';
import {About} from './components/About';
import Contact from './components/Contact';
import {Navbar} from './components/Navbar';
import "./App.css";

export default function App() {
    return (
        <Router>
            <Navbar />

            <Routes>
                <Route path="/" element={<H />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
}