import './App.css';
import SideBar from './components/SideBar';
import Home from './components/pages/Home';
import YouTube from './components/pages/YouTube';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/pages/About';
import Instructors from './components/pages/Instructors';


function App() {
  return (
    <div className="App">
    <Router>        
    <Switch>
    <Route path='/about'>        
    <SideBar/>
     <Instructors/>
      </Route> 
      <Route path='/youtube'>        
      <SideBar/>
       <YouTube/>
        </Route>
        <Route path='/'>
        <SideBar/>
        <Home/>
      </Route>
    </Switch>     
  </Router>

    </div>
  );
}

export default App;
