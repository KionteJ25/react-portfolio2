import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Project/Projects";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Switch>
        <Route component={ Home } path='/' exact />
        <Route component={ About } path='/about' />
        <Route component={ Projects } path='/projects' />
      </Switch>
    <Footer />
    </BrowserRouter>
  );
}

export default App;