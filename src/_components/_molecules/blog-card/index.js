import { Image } from 'antd';
import React from 'react';
import './style.css'
const BlogCardComponent = (props) => {
    const { src, title, description } = props
    return (
        <div className='item-card'>
            <Image preview={false} className='rounded-top' src={src} />
            <div className='container'>
                <div className='card-body'>
                    <div className='title'> {title} </div>
                    <div className='description'> {description} </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCardComponent;