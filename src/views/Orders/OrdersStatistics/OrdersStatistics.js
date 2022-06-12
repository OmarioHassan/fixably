import { useEffect, useState } from "react";
import axios from "axios";
import { Space, Table, Tag } from "antd";

function OrderStatistics() {
  const fetchData = (pageNumber) => {
    axios(`orders?page=${pageNumber}`).then((result) => {
      console.log(result.data);
      const data = result.data.results
        .sort((res1, res2) => (res1.status < res2.status ? 1 : -1))
        .map((res) => {
          return { ...res, key: res.id };
        });
      setOrders(() => data);
      setPagination(() => {
        return {
          ...pagination,
          current: result.data.page,
          total: Math.ceil(result.data.total / 10),
        };
      });
    });
  };
  const [orders, setOrders] = useState([]);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    total: 1,
    showSizeChanger: false,
  });
  useEffect(() => {
    fetchData(pagination.current);
  }, []);

  function get_tag(tag_name) {
    let color = tag_name.toLowerCase() === "laptop" ? "geekblue" : "green";

    if (tag_name.toLowerCase() === "phone") color = "warning";

    return <Tag color={color}>{tag_name.toUpperCase()}</Tag>;
  }
  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
      render: (text) => text,
    },
    {
      title: "Brand",
      dataIndex: "deviceBrand",
      key: "deviceBrand",
    },
    {
      title: "Manufacturer",
      dataIndex: "deviceManufacturer",
      key: "deviceManufacturer",
    },
    {
      title: "Type",
      key: "deviceType",
      dataIndex: "deviceType",
      render: (_, { deviceType }) => <>{get_tag(deviceType)}</>,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Technician",
      dataIndex: "technician",
      key: "technician",
    },
  ];

  const handleTableChange = ({ current, ...thing }) => {
    fetchData(current);
  };
  return (
    <Table
      columns={columns}
      dataSource={orders}
      pagination={pagination}
      onChange={handleTableChange}
    />
  );
}

export default OrderStatistics;
