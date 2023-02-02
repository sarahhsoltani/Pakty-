import { Button, Col, Image, Row } from 'antd';
import React from 'react';
import './style.css'


const CardComponent = (props) => {
    const { children, color, title, subtitle, action, image } = props
    const colorChoice = color === 'green' ? { backgroundColor: '#E7FFF9' } : color === 'blue' ? { backgroundColor: '#F1F9FF' } : { backgroundColor: '#fff' }
    const cardDisplay = image ? 'card-part pt-0' : 'card-part text-center'
    return (
        <div className='card'
            style={colorChoice}>
            <Row>
                <Col span={image ? 12 : 0}>
                    <Image preview={false} src={image} />
                </Col>
                <Col span={image ? 12 : 24}>
                    <div className={cardDisplay}>
                        <div className={'card-title'}>{title}</div>
                        <div className={'card-sub'}>{subtitle}</div>
                        {image ?
                            <Row>
                                <Col span={12}>
                                    <Button size='large' block className='pakty-btn-primary'>{action}</Button>
                                </Col>
                                <Col span={12}></Col>
                            </Row> : null}
                    </div>
                </Col>
            </Row>

            {children}
            {!image ? <div className='card-part'>
                <Row>
                    <Col span={9}></Col>
                    <Col span={6}>
                        <Button size='large' block className='pakty-btn-primary'>{action}</Button>
                    </Col>
                    <Col span={9}></Col>
                </Row>
            </div> : null}
        </div>
    );
};

export default CardComponent;