import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Shared/Header/Header';
import Home from './components/Home/Home/Home';
import Services from './components/Home/Services/Services';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';


function App() {
  return (
    <div className="App">  
       
       <BrowserRouter>
       <Header></Header>
          <Switch>
            <Route exact path='/'>
               <Home></Home> 
            </Route>
            <Route exact path='/home'>
               <Home></Home>
            </Route>
            <Route exact path='/service/:serviceId'>
              <ServiceDetails></ServiceDetails>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
       </BrowserRouter>
    </div>
  );
}

export default App;
