import { Col, Row } from 'antd';
import React from 'react';
import CardComponent from '../../_molecules/card';
import ItemCardComponent from '../../_molecules/Item-card';
const OurShopComponent = () => {
    return (
        <CardComponent
            title='Our Shop'
            action='DISCOVER MORE'
            color='blue'
        >
            <Row>
                {new Array(4).fill(null).map((_, index) => {
                    return (
                        <Col key={index} span={6}>
                            <ItemCardComponent title='Side Table' description='Light single chair' price={145} src={require('../../../assets/img/card-image.jpg')}></ItemCardComponent>
                        </Col>
                    )
                })}
            </Row>
        </CardComponent>
    );
};

export default OurShopComponent;