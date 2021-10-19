import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Shared/Header/Header';
import Home from './components/Home/Home/Home';
import Services from './components/Home/Services/Services';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import Login from './components/Login/Login/Login';
import Register from './components/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';


function App() {
  return (
    <div className="App">  
       
       <AuthProvider>
       <BrowserRouter>
       <Header></Header>
          <Switch>
            <Route exact path='/'>
               <Home></Home> 
            </Route>
            <Route exact path='/home'>
               <Home></Home>
            </Route>
            <Route exact path='/login'>
                <Login></Login>
            </Route>
            <Route exact path='/register'>
               <Register></Register>
            </Route>
            <PrivateRoute exact path='/service/:serviceId'>
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
       </BrowserRouter>
       </AuthProvider>
    </div>
  );
}

export default App;
