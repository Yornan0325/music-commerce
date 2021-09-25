import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { useState } from 'react';

import modules from './Modules';

function App() {
  const [currentTab, setCurrentTab] = useState('dashboard');
  return (
    <div className="App">
     <Router>
        <div className="App">
          <header className="App-header">
            <ul className="App-nav">
              {modules.map(module => ( 
                  <li key={module.name} className={currentTab === module.name ? 'active' : ''}>
                    <Link to={module.routeProps.path} onClick={() => setCurrentTab(module.name)}>{module.name}</Link>
                  </li>
              ))}
            </ul>
          </header>
          <div className="App-content">
            {modules.map(module => (
              <Route {...module.routeProps} key={module.name} />
            ))}
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
