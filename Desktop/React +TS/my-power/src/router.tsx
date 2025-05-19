import { Routes, Route } from "react-router-dom";
import WelcomePages from "./pages/WelcomePage";
import FormPages1 from "./pages/FirstFormPage";
import FormPages2 from "./pages/SecondFormPage";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<WelcomePages />} />
      <Route path="form-step-1" element={<FormPages1 />} />
      <Route path="form-step2" element={<FormPages2 />} />
    </Routes>
  );
}
