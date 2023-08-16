import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
const Login = () => {
  return (
    <div className='flex place-content-center items-center h-screen'>
    <Form
      name="normal_login"
      className="login-form flex items-center flex-col"
      initialValues={{
        remember: true,
      }}
    >
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your E-mail!',
          },
          {
            type: 'email',
            message: 'Please enter valid email-address'
          }
        ]}
        validateTrigger={['onBlur']}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>

      <Form.Item className='w-64'>
        <Button type="primary" htmlType="submit" className="login-form-button flex flex-col w-full items-center bg-blue-400 px-7">
          Log in
        </Button>
        <p className='py-1 flex justify-center'>Or<a href="" className=' text-blue-300 px-2 justify-center'>register now!</a></p>
      </Form.Item>
    </Form>
    </div>
  );
};
export default Login;