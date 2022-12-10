import './App.css';
import Navbar from './components/Navbar.js';
import Marketplace from './components/Marketplace';
import Profile from './components/Profile';
import SellNFT from './components/SellNFT';
import NFTPage from './components/NFTpage';
import LogIn from './components/LogIn/LogIn';
import SignIn from './components/SignIn/SignIn';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Router>
      <Routes>
          <Route path="/" element={<Marketplace />}></Route>
          <Route path="/nftPage" element={<NFTPage />}></Route>        
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/sellNFT" element={<SellNFT />}></Route>  
          <Route path='/LogIn' element={<LogIn/>}></Route>     
          <Route path='/SignIn' element={<SignIn/>}></Route>        
        </Routes>
        </Router>
    </div>
  );
}

export default App;
