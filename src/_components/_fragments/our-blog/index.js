import { Col, Row } from 'antd';
import React from 'react';
import BlogCardComponent from '../../_molecules/blog-card';
import CardComponent from '../../_molecules/card';
const OurBlogComponent = () => {
    return (
        <CardComponent
            title='Our blog'
            action='DISCOVER MORE'
        >
            <Row>
                {new Array(3).fill(null).map((_, index) => {
                    return (
                        <Col key={index} span={8}>
                            <BlogCardComponent
                                title='Lorem ipsum dolor sit amet consectetur. Fermentum.'
                                description='LStart decorating your dream with Packty. Originate and Inspire what you want just with one click'
                                src={require('../../../assets/img/img-cont.jpg')}
                            >

                            </BlogCardComponent>
                        </Col>
                    )
                })}
            </Row>
        </CardComponent>
    );
};

export default OurBlogComponent;