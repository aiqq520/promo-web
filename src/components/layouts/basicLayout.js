import React, { Component } from 'react'
import { Layout } from 'antd'

const { Header, Content, Footer } = Layout;

export default class BasicLayout extends Component {
  render() {
    return(
      <Layout style={{ minHeight: '100vh' }}>
        <Header></Header>
        <Content></Content>
        <Footer style={{ textAlign: 'center' }}>CINDA PROMO ©2020</Footer>
      </Layout>
    )
  }
}