import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignIn from './components/signIn/signIn.jsx';
import AdminDasboard from './components/dashboard/admin/adminDashboard.jsx';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn/>} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/admin-dashboard" element={<AdminDasboard />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
