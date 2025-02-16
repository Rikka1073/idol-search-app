import { BrowserRouter, Route, Routes } from "react-router";
import Home from "../pages/Home";
import Groupe from "../pages/Groupe";

const PageRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Groupe />} />
      </Routes>
    </BrowserRouter>
  );
};

export default PageRoute;
