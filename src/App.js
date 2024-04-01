import './App.css';
import Menu from "./components/Menu";
import About from './components/About';
import Contact2 from './components/Contact2';
import Footer from './components/Footer';
import Header from './components/Header';
import ProjectLists from './components/ProjectList';
import { Routes, Route } from 'react-router-dom';
import ThankYou from './components/ThankYou';
import DetailsPage from './components/detailsPage';



function App() {
  return (
      <div className="App">
        <Menu />
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/projects" element={<ProjectLists />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact2 />} />
          <Route path="/projects/:id" element={<DetailsPage />} />
          <Route path="/thankyou" element={<ThankYou />} />
        </Routes>
        <Footer />
      </div>
  );
}

export default App;
