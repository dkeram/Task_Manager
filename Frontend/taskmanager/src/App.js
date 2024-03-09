import {Routes, Route} from 'react-router-dom';
import './App.css';
import LoginPage from './components/LoginPage';
import LogoutPage from './components/LogoutPage';
import Projects from './components/Projects';
import ProjectPostForm from './components/PostProjectForm';
import Layout from './components/Layout';
import UserRegistration from './components/UserRegistration';
import NewTask from './components/NewTask';
import MyTasks from './components/MyTasks';

function App() {
  return (
    <header>
      <Layout>
        <Routes>
          <Route path="/" element={<LoginPage/>}/>
          <Route path="/logout" element={<LogoutPage/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/new_project" element={<ProjectPostForm/>}/>
          <Route path="/user_registration" element={<UserRegistration/>}/>
          <Route path="/new_task" element={<NewTask/>}/>
          <Route path="/mytasks" element={<MyTasks/>}/>
        </Routes>
      </Layout>
    </header>
  );
}

export default App;