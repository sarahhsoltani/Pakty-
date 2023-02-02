import React from 'react';
import { Button, Col, Image, Input, Layout, List, Row } from 'antd';
import './style.css'
import FeatherIcon from 'feather-icons-react/build/FeatherIcon';
const { Footer } = Layout;

const FooterComponent = () => {
    return (
        <Footer className='custom-footer'>
            <Row align={'middle'}>
                <Col span={6}>
                    <Image preview={false} width={112} src={require('../../../assets/img/light-logo.png')}></Image>
                    <p>
                        pakty@gmail.com <br />
                        15 rue du meuble, Tunis 2015 <br />
                        +216 25 26 27 26
                    </p>
                    <Row>
                        <Col span={8}>
                        </Col>
                        <Col span={8}></Col>
                        <Col span={8}></Col>
                    </Row>
                </Col>
                <Col span={4}>
                    <List>
                        <List.Item className='footer-item footer-item-title'>About</List.Item>
                        <List.Item className='footer-item'>Inspiration</List.Item>
                        <List.Item className='footer-item'>Magazine</List.Item>
                        <List.Item className='footer-item'>Store</List.Item>
                    </List>
                </Col>
                <Col span={4}>
                    <List>
                        <List.Item className='footer-item footer-item-title'>Company</List.Item>
                        <List.Item className='footer-item'>Solution</List.Item>
                        <List.Item className='footer-item'>Contact Us</List.Item>
                        <List.Item className='footer-item'>FAQ</List.Item>
                    </List>
                </Col>
                <Col span={4}>
                    <List>
                        <List.Item className='footer-item footer-item-title'>Support</List.Item>
                        <List.Item className='footer-item'>Account</List.Item>
                        <List.Item className='footer-item'>Terms & conditions</List.Item>
                        <List.Item className='footer-item'>Privacy policy</List.Item>
                    </List>
                </Col>
                <Col span={6}>
                    <List>
                        <List.Item className='footer-item footer-item-title'>Subscribe Now</List.Item>
                        <List.Item className='footer-item'>
                            <Row gutter={10} align={'middle'}>
                                <Col span={18}>
                                    <Input
                                        className='newsletter'
                                        size="small"
                                        placeholder="Your Email"
                                        prefix={<FeatherIcon className='text-green' icon={'mail'} />}
                                    />
                                </Col>
                                <Col span={6}>
                                    <Button className='pakty-btn-primary'>
                                        <FeatherIcon className='text-white' icon='arrow-right' />
                                    </Button>
                                </Col>
                            </Row>
                        </List.Item>
                    </List>
                </Col>
            </Row>
        </Footer>
    );
};

export default FooterComponent;