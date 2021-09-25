import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PrivateRoute from "./AccessSystem/RestrictAccess/PrivateRoute";
import Home from "./Components/Home/Home";
// import SignInForm from "./Components/UserRegister/SignInForm";
import SignIn from "./AccessSystem/UserLogin/SignIn";
import SignUp from "./AccessSystem/UserRegister/SignUp";
import { useContext } from "./ContextApp/UseContext";
import { ProvidersApp} from "./ContextApp/UseContext";
 

  function App() {
    const { userLogin } = useContext();
    return (
      <div className="App">
        <ProvidersApp>
          <BrowserRouter>
            <Switch>
              <PrivateRoute exact path="/" component={Home} />
              <Route exact path="/login" component={SignIn} />
              <Route exact path="/signup" component={SignUp} />
            </Switch>
          </BrowserRouter>
        </ProvidersApp>
      </div>
    );
  }

export default App;
