import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Home from './pages/home';
import Login from './pages/login';
import NotFound from './pages/not-found';
import Register from './pages/register';

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
