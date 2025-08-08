import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../Page/HomePage";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta pública */}
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};