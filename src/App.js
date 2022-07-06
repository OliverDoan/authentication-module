import { Route, Routes } from 'react-router-dom';
import './App.css';
import Form from './pages/form';
import NotFound from './pages/not-found';

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
