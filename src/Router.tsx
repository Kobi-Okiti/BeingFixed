import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layouts";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="*" element={<p>Not Found Go back Home</p>} />
      </Route>
    </Routes>
  );
}
