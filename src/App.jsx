import "./App.css";
import { Footer } from "./components/Footer";
import Nav from "./components/Nav";
import About from "./pages/about_page/About";
import { Route, Routes } from "react-router";
import Home from "./pages/home_page/Home";
import { Contact } from "./pages/contact/Contact";
import { SignUp } from "./pages/sign_up/SignUp";
import { DeliveryInfo } from "./pages/delivery_info/DeliveryInfo";
import { Collection } from "./pages/collection_page/Collection";
import { MyOrders } from "./pages/orders/MyOrders";
import { ProductPage } from "./pages/productPage/ProductPage";

function App() {
  return (
    <div className="w-[85%] mx-auto md:w-[75%] md:mx-auto  ">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/delivery-info" element={<DeliveryInfo />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/my-orders" element={<MyOrders />} />
        <Route path="/product-page/:id" element={<ProductPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
