import { Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/dashboard/dashboard";
import Cart from "./components/cart/cart";
import FoodDetails from "./components/food-details/food-details";


const routes = () => {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/food-details" element={<FoodDetails/>}/>
        </Routes>
    </div>
  );
};
export default routes;