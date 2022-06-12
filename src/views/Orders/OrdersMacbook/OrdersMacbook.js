import axios from "axios";
import { Button, Form, Input, message } from "antd";

function OrdersMacbook() {
  const createOrder = (orderData) => {
    axios.post(`orders/create`, orderData).then((result) => {
      message.success("Added Successfully");
    });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <br />
      <Form
        name="basic"
        labelCol={{
          span: 5,
        }}
        wrapperCol={{
          span: 12,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={createOrder}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Device Brand"
          name="DeviceBrand"
          rules={[
            {
              required: true,
              message: "Please input device brand!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Device Manufacturer"
          name="DeviceManufacturer"
          rules={[
            {
              required: true,
              message: "Please input device manufacturer!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Device Type"
          name="DeviceType"
          rules={[
            {
              required: true,
              message: "Please input device type!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default OrdersMacbook;
