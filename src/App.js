import React from 'react';
import { Layout } from 'antd';
// import HeaderComponent from './_components/_fragments/_header'
// import FooterComponent from './_components/_fragments/_footer';
import MainRoute from './Router';
const { Content } = Layout;
const App = () => {
  return (
      <Layout>
        {/* <HeaderComponent></HeaderComponent> */}
        <Content className="site-layout">
          <MainRoute path='/' />
        </Content>
        {/* <FooterComponent></FooterComponent> */}
      </Layout>
  );
};

export default App;