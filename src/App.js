import "./App.css";
import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import NavBar from "./layout/navigation/NavBar/NavBar";
import OrderStatistics from "./views/Orders/OrdersStatistics/OrdersStatistics";
import IPhoneOrders from "./views/Orders/IPhoneOrders/IPhoneOrders";
import Invoices from "./views/Orders/Invoices/Invoices";
import OrdersMacbook from "./views/Orders/OrdersMacbook/OrdersMacbook";

function App() {
  useEffect(() => {});
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<OrderStatistics />} />
          <Route path="/iphone_orders" element={<IPhoneOrders />} />
          <Route path="/invoices" element={<Invoices />} />
          <Route path="/order_macbook" element={<OrdersMacbook />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
