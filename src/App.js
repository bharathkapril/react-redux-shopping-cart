import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import DataComponent from "./components/DataComponent";
import NavbarComponent from "./components/NavbarComponent";
import HomeComponent from "./components/HomeComponent";
import CartComponent from "./components/CartComponent";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavbarComponent />}>
            <Route path="/" element={<HomeComponent />} />
            <Route path="/product" element={<DataComponent />} />
            <Route path="/cart" element={<CartComponent />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
