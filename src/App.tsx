import { Routes, Route } from "react-router-dom"; // Import Routes and Route for routing
import Home from "./page/Home/Home";
import About from "./page/about/about";
import Contact from "./page/contact/Contact";
import Service from "./page/service/Service";
import Product from "./page/product/Product";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Service" element={<Service />} />
      <Route path="/Product" element={<Product />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
