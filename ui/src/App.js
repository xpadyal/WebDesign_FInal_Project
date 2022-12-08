import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import LogIn from './components/LogIn/LogIn';
import SignIn from './components/SignIn/SignIn';


function App() {
  return (
    <div className="App">
       <Router>
          <Routes>
            <Route path="/" exact element={<SignIn />}></Route>
            <Route path="/login" element={<LogIn />}></Route>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
