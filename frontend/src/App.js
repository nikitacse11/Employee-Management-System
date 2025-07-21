import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignIn from './components/signIn/signIn.jsx';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn/>} />
        <Route path="/signin" element={<SignIn/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
