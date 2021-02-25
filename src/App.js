import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import './App.css';
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Project/Projects";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import bImage from "./images/bImage.jpg";


function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <div style={{
      backgroundImage: `url(${bImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'auto 100%',
      backgroundPosition: 'center',
      padding: '10px',
      height: '100vh',
      display: 'flex'
    }}>
      <Switch>
        <Route component={ Home } path='/' exact />
        <Route component={ About } path='/about' />
        <Route component={ Projects } path='/projects' />
      </Switch>
</div>
    <Footer />
    </BrowserRouter>
  );
}

export default App;