import {Routes, Route} from 'react-router-dom';
import './App.css';
import LoginPage from './components/LoginPage';
import LogoutPage from './components/LogoutPage';
import Projects from './components/Projects';

function App() {
  return (
    <header>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/logout" element={<LogoutPage/>}/>
        <Route path="/projects" element={<Projects/>}/>
      </Routes>
    </header>
  );
}

export default App;