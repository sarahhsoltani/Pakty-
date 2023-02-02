import { Image } from 'antd';
import React from 'react';
import SliderContentComponent from './slider-content';
import './style.css'
const SliderComponent = () => {
    return (
        <>
            <Image width={'100%'} preview={false} src={require('../../../assets/img/slider-1.jpg')} />
           <SliderContentComponent></SliderContentComponent>
        </>
    );
};

export default SliderComponent;