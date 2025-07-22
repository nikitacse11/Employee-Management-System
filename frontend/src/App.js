import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignIn from './components/signIn/signIn.jsx';
import AdminDasboard from './components/dashboard/admin/adminDashboard.jsx';
import EmployeeDashboard from './components/dashboard/employee/employeeDashboard.jsx';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn/>} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/admin-dashboard" element={<AdminDasboard />} />
        <Route path="/employee-dashboard" element={<EmployeeDashboard />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
