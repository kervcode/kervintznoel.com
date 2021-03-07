import './App.css';
import Menu from "./components/Menu";
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Project_lists from './components/Project_list';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import detailsPage from './components/detailsPage';


function App() {
  return (
    <Router>
    <div className="App">
      <Menu />
      <Switch>
        <Route exact path="/" component={Header} />
        <Route exact path="/projects" component={Project_lists} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/projectdetails" component={detailsPage} />
      </Switch>   
      <Footer />
    </div>
    </Router>
  );
}

export default App;
