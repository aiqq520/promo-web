import React, { Suspense } from 'react';
import { Layout, ConfigProvider, Spin } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import { connect } from 'dva';
import Footer from '@/components/footer'
import '@/utils/index'

class BasicLayout extends React.Component {

  componentDidMount() {
    const { dispatch } = this.props
    // 获取首页信息
    dispatch({
      type: 'global/init'
    })

    // 获取类目集合
    dispatch({
      type: 'global/fetch'
    })
  }

  render() {
    const { children } = this.props
    return (
      <ConfigProvider locale={zhCN}>
        <Suspense fallback={<div style={{ textAlign: 'center' }}><Spin></Spin></div>}>
          <Layout>
            {children}
            <Footer />
          </Layout>
        </Suspense>
      </ConfigProvider>
    )
  }
}

const mapStateToProps = (state) => { return {} }

export default connect(mapStateToProps)(BasicLayout);
