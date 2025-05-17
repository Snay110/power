import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import WelcomePages from "./pages/WelcomePage";
import FormPages1 from "./pages/FormStep1";
import FormPages2 from "./pages/FormStep2";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="welcome" element={<WelcomePages />} />
        <Route path="form-step-1" element={<FormPages1 />} />
        <Route path="form-step2" element={<FormPages2 />} />
      </Routes>
    </BrowserRouter>
  );
}
