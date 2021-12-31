
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/HomePage/Home/Home';
import Appointments from './pages/Appointment/Appointments/Appointments';
import  LogIn from './pages/SignIn/LogIn/LogIn'
import Navigation from './pages/Shared/Navigation/Navigation';
import Register from './pages/SignIn/Register/Register';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './pages/SignIn/PrivateRoute/PrivateRoute';
import DashBoard from './pages/Dashboard/DashBoard/DashBoard';
function App() {
  return (
    <div className="App">
         <AuthProvider>
         <Router>
           <Navigation></Navigation>
             <Switch>
                  <Route exact path="/">
                    <Home></Home>
                  </Route>
                  <Route path="/home">
                    <Home></Home>
                  </Route>
                  <Route path="/register">
                    <Register></Register>
                  </Route>
                  <Route path="/login">
                    <LogIn></LogIn>
                  </Route>
                  <PrivateRoute path="/appointment">
                    <Appointments/>
                  </PrivateRoute>
                  <PrivateRoute path="/dashboard">
                    <DashBoard/>
                  </PrivateRoute>
                </Switch>
         </Router>
         </AuthProvider>
    </div>
  );
}

export default App;
