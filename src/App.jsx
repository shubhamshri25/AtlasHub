import { Routes, Route, Navigate } from "react-router";
import AppLayout from "./components/layout/AppLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Country from "./pages/Country";
import CountryDetails from "./components/layout/CountryDetails";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/country" element={<Country />} />
          <Route path="/country/:id" element={<CountryDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
