import { Col, Image, Row } from 'antd';
import React from 'react';
const LinkComponent = () => {
    return (
        <Row className='header-position'>
            <Col span={6} >
                <Image preview={false} src={require('../../assets/img/logo.png')} />
            </Col>
            <Col span={16}>
                <Image preview={false} src={require('../../assets/img/logo.png')} />
            </Col>
            <Col span={2}>
                <Image preview={false} src={require('../../assets/img/logo.png')} />
            </Col>
        </Row>
    );
};

export default LinkComponent;