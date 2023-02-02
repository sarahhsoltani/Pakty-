import { Button, Col, Row } from 'antd';
import React from 'react';
import './style.css'
const SliderContentComponent = () => {
    return (
        <div className='slider-content'>
            <Row>
                <Col xs={24} lg={12} >
                        <div className='slider-title'>
                            Pakty your space in 3D
                        </div>
                        <div className='slider-text'>
                            <p>Visualize 3D furnitures in your project before shopping</p>
                        </div>
                        <div className='slider-action'>
                            <Button className='pakty-btn-primary'>Design my space</Button>
                        </div>
                </Col>
            </Row>

        </div>
    );
};

export default SliderContentComponent;