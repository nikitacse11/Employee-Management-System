import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./components/signIn/signIn.jsx";
import AdminDasboard from "./components/dashboard/admin/adminDashboard.jsx";
import Employees from "./components/dashboard/admin/employee/employee.jsx";
import Layout from "./components/common/layout/layout.jsx";
import { ToastContainer } from "react-toastify";
import EmployeeDashboard from "./components/dashboard/employee/employeeDashboard.jsx";
import Todo from "./components/dashboard/employee/todo/todo.jsx";
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
        <Route
          path="/todo"
          element={
            <Layout>
              <Todo />
            </Layout>
          }
        ></Route>
        <Route
          path="/employee-dashboard"
          element={
              <Layout>
                <EmployeeDashboard />
              </Layout>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
