import './App.css';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Project_lists from './components/Project_list';


function App() {
  return (
    <div className="App">
      <Header />
      <Project_lists />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
