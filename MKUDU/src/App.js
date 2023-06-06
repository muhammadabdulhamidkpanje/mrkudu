import logo from './logo.svg';
import Header from './header';
import Homepage from './homepage';
import Assignment from './Asssignment';
import Footer from './footer/footer';
import {   Routes, Route, BrowserRouter,} from 'react-router-dom';
import './App.css';
import AboutUs from './about-us';
import ContactUS from './contact-us';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path="/about-us" element={<AboutUs/>} />
      <Route path="/contact-us" element={<ContactUS/>} />
      <Route path="/assignment" element={<Assignment />} />
    </Routes>
    <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
