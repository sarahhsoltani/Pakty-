import { Button, Col, Image, Layout, Menu, Row } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { useEffect, useState } from 'react';
import './style.css'
const HeaderComponent = () => {
  const { Header } = Layout;
  const logo = <Image preview={false} style={{ float: 'left' }} src={require('../../../assets/img/logo.png')}></Image>
  const navItem = [{ label: 'Inspiration', value: '' }, { label: 'Our Store', value: '' }, { label: 'Magazine', value: '' },{ label: 'Collections', value: '' },  { label: 'Solution', value: '' },
  { label: 'Become Pro', value: '' }, { label: '|', value: '' }, { label: 'Login', value: '' }]
  const [navbar, setNavbar] = useState(false)

  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  useEffect(() => {
    changeBackground()
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground)
  })

  return (
    <Header style={{
      position: 'fixed',
      top: 0,
      zIndex: 1,
      width: '100%',
    }} className={navbar ? 'normal' : 'header-custom'}>
      <Row>
        <Col span={4}>
          <div style={{
            width: 120,
            height: 31,
            margin: '16px 24px 16px 0',
          }}>{logo}</div>
        </Col>
        <Col span={14}>
          <Menu
            style={navbar ? { backgroundColor: '#fff', color: '#000' } : { backgroundColor: 'transparent', color: 'white' }}
            mode="horizontal"
            items={navItem.map((data, index) => ({
              key: index,
              label: data.label,
            }))}
          />
        </Col>
        <Col span={6}>
          <Row>
            <Col span={20}>
              <Row>
                <Col span={16}>
                  <Button className='pakty-btn-primary'>Design my project</Button>
                </Col>
                <Col span={8}>
                  <FeatherIcon
                    style={{
                      height: 31,
                      margin: '16px 24px 16px 24px',
                    }}
                    className={navbar ? '' : 'text-white'}
                    icon={'shopping-cart'}>

                  </FeatherIcon>
                </Col>
              </Row>
            </Col>
            <Col span={4}></Col>
          </Row>
        </Col>
      </Row>

    </Header>
  );
};
export default HeaderComponent;
