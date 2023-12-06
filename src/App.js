import './App.css';
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import Test from './pages/Test/Test';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to="test">Test</NavLink>
          </nav>
        </header>
        <main>
          <Routes>
            <Route index element={<Home />} />
            <Route path='test' element={<Test />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
