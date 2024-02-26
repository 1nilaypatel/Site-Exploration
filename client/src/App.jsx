import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Sidebar } from './components';
import { Home, SignUp } from './pages';

export default function App() {
  return (
    <div>
      <Router>
        <Sidebar />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/sign-up"} element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  )
}
