import React from "react";

import { useNavigate } from "react-router-dom";

import "antd/dist/antd.min.css";
import { Menu } from "antd";
import {
  LaptopOutlined,
  BarChartOutlined,
  MobileOutlined,
  FileProtectOutlined,
} from "@ant-design/icons";

const menuItems = [
  {
    key: "/",
    icon: <BarChartOutlined />,
    label: "Orders Statistics",
  },
  {
    key: "iphone_orders",
    icon: <MobileOutlined />,
    label: "IPhone Orders",
  },
  {
    key: "invoices",
    icon: <FileProtectOutlined />,
    label: "Invoices",
  },
  {
    key: "order_macbook",
    icon: <LaptopOutlined />,
    label: "Order MacBook",
  },
];
const NavBar = () => {
  const navigate = useNavigate();

  return (
    <Menu
      mode="horizontal"
      defaultSelectedKeys={["/"]}
      onClick={(e) => {
        navigate(e.key);
      }}
      items={menuItems}
    />
  );
};

export default NavBar;
