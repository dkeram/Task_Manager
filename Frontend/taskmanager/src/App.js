import {Routes, Route} from 'react-router-dom';
import './App.css';
import LoginPage from './components/LoginPage';
import LogoutPage from './components/LogoutPage';
import Projects from './components/Projects';
import ProjectPostForm from './components/PostProjectForm';

function App() {
  return (
    <header>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/logout" element={<LogoutPage/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/new_project" element={<ProjectPostForm/>}/>
      </Routes>
    </header>
  );
}

export default App;