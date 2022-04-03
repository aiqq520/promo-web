import React from 'react'
import { Form, Input, Upload, Row, Col, Button } from 'antd'
import sample from '@/assets/images/sample.png'

const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 },
};

// const itemLayout = {
//   wrapperCol: { span: 14, offset: 4 }
// }

function FormElement(props) {
  // const [fileList, setFileList] = useState([])
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
    <div className="inquiry-wrap">
      <div className="inquiry-title">Sample Request</div>
      <div className="inquiry-img">
        <img src={sample} alt='' />
      </div>
      <div className="inquiry-info">
        We provide random samples for free with total of under $5. Just please absorb shipping charge(roughly $25), as they are sent out directly from our oversea office. If you need to imprint your logo / information on your item, please upload your artwork and may require a set up charge.
      </div>

      <div className="inquiry-form">
        <Form
          onSubmit={onSubmit}
          hideRequiredMark={true}
          {...formItemLayout}
        >
          <Form.Item label='First Name'>
            {getFieldDecorator('name', {
              rules: [{ required: true, message: 'please enter your first name' }]
            })(
              <Input />
            )}
          </Form.Item>

          <Form.Item label='Last Name'>
            {getFieldDecorator('lastName', {
              rules: [{ required: true, message: 'please enter your last name' }]
            })(
              <Input />
            )}
          </Form.Item>

          <Form.Item label='E-mail'>
            {getFieldDecorator('email', {
              rules: [{ required: true, message: 'please enter your email' }]
            })(
              <Input placeholder='Guest' />
            )}
          </Form.Item>

          <Form.Item label='Company Name'>
            {getFieldDecorator('company', {
              rules: [{ required: true, message: 'please enter your company name' }]
            })(
              <Input />
            )}
          </Form.Item>

          <Form.Item label='Shipping Address'>
            {getFieldDecorator('address', {
              rules: [{ required: true, message: 'please enter your address' }]
            })(
              <Input />
            )}
          </Form.Item>

          <Form.Item label='Zip/Postal Code'>
            {getFieldDecorator('code', {
              rules: [{ required: true, message: 'please enter your zip/postal code' }]
            })(
              <Input />
            )}
          </Form.Item>

          <Form.Item label='Phone'>
            {getFieldDecorator('phone', {
              rules: [{ required: true, message: 'please enter your phone' }]
            })(
              <Input />
            )}
          </Form.Item>

          <Form.Item label='Quantity'>
            {getFieldDecorator('quantity', {
              rules: [{ required: true, message: 'please enter your quantity' }]
            })(
              <Input />
            )}
          </Form.Item>

          <Form.Item label='Base Color of Item'>
            {getFieldDecorator('color', {
              rules: [{ required: true, message: 'please enter your base color of item' }]
            })(
              <Input />
            )}
          </Form.Item>

          <Form.Item label='Imprint Instructions:'>
            {getFieldDecorator('instruction', {
              rules: [{ required: true, message: 'please enter your imprint instructions' }]
            })(
              <Input />
            )}
          </Form.Item>

          <Form.Item label='Must In-hand Date:'>
            {getFieldDecorator('date', {
              rules: [{ required: true, message: 'please enter your in-hand date' }]
            })(
              <Input />
            )}
          </Form.Item>

          <Form.Item label='Upload Your Artwork'>
            {getFieldDecorator('file', {
              rules: [{ required: true, message: 'please upload your artworl' }]
            })(
              <Upload>
                <Button className='upload-btn'>Select the file</Button>
              </Upload>
            )}
          </Form.Item>

          <div className='info-upload'>Please compress multiple files into a rar or zip format, total file size should not exceed 2M (jpg|png|gif|rar|zip)</div>

          <Form.Item label='Remarks'>
            {getFieldDecorator('remarks', {
              rules: [{ required: true, message: 'please enter your remarks' }]
            })(
              <Input.TextArea rows={16} autoSize />
            )}
          </Form.Item>

          <div className="info-upload">
            Please indicate any special instructions (i.e. material needed, customization, etc.)<br />
            Note: We will review this sample request and get back to you in 24 hours. Thank you for your patience.
          </div>

          <Form.Item label='Code'>
            <Row gutter={8}>
              <Col span={12}>
                {getFieldDecorator('Code:', {
                  rules: [{ required: true, message: 'Please input the code you got!' }]
                })(
                  <Input />
                )}
              </Col>
              <Col span={12}>
                <Button type='primary' htmlType='submit' className='submit-btn'>Submit</Button>
              </Col>
            </Row>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default Form.create()(FormElement)
