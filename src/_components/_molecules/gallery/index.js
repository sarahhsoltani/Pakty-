import { Image } from 'antd';
import './style.css'
import React from 'react';
const GalleryComponent = () => {
    return (
        <div className='row'>
            {new Array(3).fill(null).map((_, index) => {
                return (
                    <div className='column' key={index} span={8} >
                        <Image preview={false} className='item rounded' width='100%' height={index % 2 === 0 ? 350 : 440} src={require('../../../assets/img/img-cont.jpg')}></Image>
                        <Image preview={false} className='item rounded' width='100%' height={index % 2 === 1 ? 350 : 440} src={require('../../../assets/img/img-cont.jpg')}></Image>
                    </div>)
            })}
        </div>
    );
};

export default GalleryComponent;