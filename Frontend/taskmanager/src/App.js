import {Routes, Route} from 'react-router-dom';
import './App.css';
import LoginPage from './components/LoginPage';
import LogoutPage from './components/LogoutPage';
import Projects from './components/Projects';
import ProjectPostForm from './components/PostProjectForm';
import Layout from './components/Layout';

function App() {
  return (
    <header>
      <Layout>
        <Routes>
          <Route path="/" element={<LoginPage/>}/>
          <Route path="/logout" element={<LogoutPage/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/new_project" element={<ProjectPostForm/>}/>
        </Routes>
      </Layout>
    </header>
  );
}

export default App;