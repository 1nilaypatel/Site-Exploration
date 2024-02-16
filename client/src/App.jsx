import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar.jsx';
import { Home, Settings, SignUp } from './pages';

export default function App() {
  return (
    <div>
      <Router>
        <Sidebar/>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/sign-up"} element={<SignUp />} />
          <Route path={"/user-settings/:id"} element={<Settings />} />
        </Routes>
      </Router>
    </div>
  )
}
