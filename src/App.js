//import './assets/css/App.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './router/Router.js';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Router/>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;