import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import AuthProvider from './contexts/Authprovider';
import Home from './Pages/Home/Home';
import Manage from './Pages/Manage/Manage';
import Myorders from './Pages/Myorders/Myorders';
import Service from './Pages/Newservice/Service';
import Order from './Pages/Orders/Order';
import Footer from './Pages/shared/Footer/Footer';
import Header from './Pages/shared/Header/Header';
import Login from './Pages/shared/Login/Login';
import PrivateRoute from './Pages/shared/Login/PrivateRoute/PrivateRoute';
import Notfound from './Pages/shared/Notfound/Notfound';
import Places from './Places/Places';

function App() {

  return (
    <div className="App">
      <AuthProvider>
        <Router>
        <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              {/* <Register></Register> */}
            </Route>
            <Route path="/places">
              <Places></Places>
            </Route>
            <PrivateRoute path="/orders/:orderId">
              <Order></Order>
            </PrivateRoute>
            <Route path="/about">
              {/* <About></About> */}
            </Route>
            <Route path="/article">
              {/* <Article></Article> */}
            </Route>
            <PrivateRoute path="/myorders">
              <Myorders></Myorders>
            </PrivateRoute>
            <PrivateRoute path="/manage">
              <Manage></Manage>
            </PrivateRoute>
            <PrivateRoute path="/service">
              <Service></Service>
            </PrivateRoute>
            <Route path="*">
              <Notfound></Notfound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
