import React from 'react'
import Header from '@/components/header'
import { Form, Input, Button, Row, Col } from 'antd'
import './index.less'

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

function Register(props) {
  const { form: { getFieldDecorator } } = props

  const onSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  return (
    <section className='container'>
      <div className='register-section'>

        <div className='login-header'>
          <Header type='index' />
          <div className='logo'>
            <img src={''} alt='' />
            <span>CINDA PROMO</span>
          </div>
        </div>

        <div className='register-wrap'>
          <Form
            className='register-form'
            onSubmit={onSubmit}
            hideRequiredMark={true}
            {...formItemLayout}
          >
            <Form.Item label='E-mail'>
              {getFieldDecorator('email', {
                rules: [
                  {
                    type: 'email',
                    message: 'The input is not valid E-mail!',
                  },
                  {
                    required: true,
                    message: 'please enter your e-mail address'
                  }
                ]
              })(
                <Input placeholder='This email address will be used to sign into your account.' />
              )}
            </Form.Item>

            <Form.Item label='Password'>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'please enter your password' }]
              })(
                <Input type='password' placeholder='6-8 characters(A-Z,a-z,0-9 only)' />
              )}
            </Form.Item>

            <Form.Item label='Verify Password'>
              {getFieldDecorator('verfifyPwd', {
                rules: [
                  {
                    required: true,
                    message: 'please enter your password'
                  },
                  // ({ getFieldValue }) => ({
                  //   validator(rule, value) {
                  //     if (!value || getFieldValue('password') === value) {
                  //       return Promise.resolve();
                  //     }
                  //     return Promise.reject('The two passwords that you entered do not match!');
                  //   },
                  // }),
                ]
              })(
                <Input type='password' placeholder='6-8 characters(A-Z,a-z,0-9 only)' />
              )}
            </Form.Item>

            <Form.Item label='Question'>
              {getFieldDecorator('question', {
                rules: [{ required: true, message: 'please enter your question' }]
              })(
                <Input placeholder='You can get back your password through this way' />
              )}
            </Form.Item>

            <Form.Item label='Security Answer'>
              {getFieldDecorator('answer', {})(
                <Input />
              )}
            </Form.Item>

            <Form.Item label='First Name'>
              {getFieldDecorator('firstName', {})(
                <Input />
              )}
            </Form.Item>

            <Form.Item label='Last Name'>
              {getFieldDecorator('lastName', {})(
                <Input />
              )}
            </Form.Item>

            <Form.Item label='Compnay Name'>
              {getFieldDecorator('compnayName', {})(
                <Input />
              )}
            </Form.Item>

            <Form.Item label='ASI#/SAGE#/PPAI#'>
              {getFieldDecorator('code1', {})(
                <Input />
              )}
            </Form.Item>

            <Form.Item label='Address'>
              {getFieldDecorator('address', {})(
                <Input />
              )}
            </Form.Item>

            <Form.Item label='Zip/Postal Code'>
              {getFieldDecorator('code2', {})(
                <Input />
              )}
            </Form.Item>

            <Form.Item label='Phone'>
              {getFieldDecorator('phone', {})(
                <Input />
              )}
            </Form.Item>

            <Form.Item label='Code'>
              <Row gutter={8}>
                <Col span={12}>
                  {getFieldDecorator('code', {
                    rules: [{ required: true, message: 'Please input the code you got!' }]
                  })(
                    <Input />
                    )}
                </Col>
                <Col span={12}>
                    <Button type='primary' htmlType='submit' className='form-btn'>Sign in</Button>
                </Col>
              </Row>
            </Form.Item>
          </Form>
        </div>
      </div>
    </section>
  )
}

export default Form.create()(Register)
