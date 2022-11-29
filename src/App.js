import logo from './logo.svg';
import './App.css';
import {Outlet} from 'react-router-dom'
import Blog from './pages/Blog'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
        <Blog />
      <Outlet></Outlet>
    </div>
  );
}

export default App;
