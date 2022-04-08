import './App.css';
import LoginPage from './pages/loginPage/loginPage';
import SignupPage from './pages/signupPage/signupPage';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/loginPage"  element={< LoginPage />} />
          <Route path="/signupPage"  element={< SignupPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
