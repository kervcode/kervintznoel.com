import './App.css';
import Menu from "./components/Menu";
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Project_lists from './components/Project_list';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import detailsPage from './components/detailsPage';



function App() {
  return (
    <Router>
      <div className="App">
        <Menu />
        <Switch>
          <Route exact path="/" component={Header} />
          <Route exact path="/projects" component={Project_lists} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects/:id" component={detailsPage} />
          
          <Route exact path="/contact" component={Contact} />
        </Switch>   
        <Footer />
      </div>
    </Router>
  );
}

export default App;
