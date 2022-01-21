import React, { Suspense } from 'react';
import { Layout, ConfigProvider, Spin } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import Footer from '@/components/footer'
import '@/utils/index'

function BasicLayout(props) {
  return (
    <ConfigProvider locale={zhCN}>
      <Suspense fallback={<div style={{ textAlign: 'center' }}><Spin></Spin></div>}>
        <Layout>
          {props.children}
          <Footer />
        </Layout>
      </Suspense>
    </ConfigProvider>
  );
}

export default BasicLayout;
