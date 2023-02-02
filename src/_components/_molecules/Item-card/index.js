import { Col, Image, Row } from 'antd';
import React from 'react';
import './style.css'
const ItemCardComponent = (props) => {
    const { src, title, description, price } = props
    return (
        <div className='item-card'>
            <div className='container'>
                <Row className='image'>
                    <Col span={6}></Col>
                    <Col span={12}>
                        <Image preview={false} height={150} src={src} />
                    </Col>
                    <Col span={6}></Col>
                </Row>
                <div className='card-body'>
                    <div className='title'> {title} </div>
                    <div className='description'> {description} </div>
                    <div className='price'> {price} </div>
                </div>
            </div>
        </div>
    );
};

export default ItemCardComponent;