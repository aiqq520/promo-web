import React, { Component } from 'react'
import { Form, Input, Button } from 'antd'
import { Link } from 'react-router-dom'
import Header from '@/components/header'
import './index.less'

class Login extends Component {

  onSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <section className='container'>
        <div className='login-section'>

          <div className='login-header'>
            <Header type='index' />
            <div className='logo'>
              <img src={''} alt='' />
              <span>CINDA PROMO</span>
            </div>
          </div>

          <div className='login-wrap'>
            <Form
              className='login-form'
              layout='vertical'
              onSubmit={this.onSubmit}
              hideRequiredMark={true}
            >
              <Form.Item label='E-mail :'>
                {getFieldDecorator('email', {
                  rules: [{ required: true, message: 'please enter your e-mail address' }]
                })(
                  <Input placeholder='E-mail Address' />
                )}
              </Form.Item>

              <Form.Item label='Password :'>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: 'please enter your password' }]
                })(
                  <Input type='password' placeholder='Password' />
                )}
              </Form.Item>

              <Form.Item className='special'>
                <Button type='primary' className='form-btn' htmlType='submit'>Sign In</Button>
              </Form.Item>

              <div className='form-link'>
                <Link className='link' to={'/register'}>Forget Password?</Link>
                <Link className='link' to={'/register'}>Join Free</Link>
              </div>
            </Form>
          </div>

        </div>
      </section>
    )
  }
}

export default Form.create()(Login)
