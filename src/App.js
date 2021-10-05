import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./AccessSystem/RestrictAccess/PrivateRoute";
import Home from "./Components/Home/Home";
import SignIn from "./AccessSystem/UserLogin/SignIn";
import SignUp from "./AccessSystem/UserRegister/SignUp";
import { useContext } from "./ContextApp/UseContext";
import { ProvidersApp } from "./ContextApp/UseContext";
import Paths from './Components/Home/Paths';

function App() {
  const { userLogin } = useContext();
  return (
    // <div className="App">
      <ProvidersApp>
        <Router>
          <PrivateRoute exact path="/" component={Home} />
          <Paths/>
          <Route exact path="/login" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
        </Router>
      </ProvidersApp>
    // </div>
  );
}

export default App;
