import {Routes, Route} from 'react-router-dom';
import './App.css';
import LoginPage from './components/LoginPage';
import LogoutPage from './components/LogoutPage';

function App() {
  return (
    <header className="App-header">
      <Routes>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/logout" element={<LogoutPage/>}/>
      </Routes>
    </header>
  );
}

export default App;
