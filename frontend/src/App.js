import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./components/signIn/signIn.jsx";
import AdminDasboard from "./components/dashboard/admin/adminDashboard.jsx";
import Employees from "./components/dashboard/admin/employee/employee.jsx";
import Layout from "./components/common/layout/layout.jsx";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signin" element={<SignIn />} />
        <Route
          path="/admin-dashboard"
          element={
            <Layout>
              <AdminDasboard />
            </Layout>
          }
        />
        <Route
          path="/employees"
          element={
            <Layout>
              <Employees />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
