import { Routes, Route } from "react-router-dom";
import WelcomePages from "./pages/WelcomePage";
import FirstFormPage from "./pages/FirstFormPage";
import SecondFormPage from "./pages/SecondFormPage";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<WelcomePages />} />
      <Route path="first-form-page" element={<FirstFormPage/>} />
      <Route path="second-form -pag" element={<SecondFormPage />} />
    </Routes>
  );
}
