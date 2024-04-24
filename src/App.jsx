import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Employees, NewEmployees } from "./Pages/Employees";
import { Header } from "./Components/Layout";


export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="employees">
          <Route path="new" element={<NewEmployees />} />
          <Route path="" index element={<Employees />} />
        </Route>
        <Route path="/" index element={<h1>Home</h1>} />
      </Routes>
    </BrowserRouter>
  )
}
