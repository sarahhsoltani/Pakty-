import React from 'react'
import { Image } from 'antd';
import { HeartOutlined } from '@ant-design/icons';
import './style.css'
function CollectionsGallery() {
  return (
    <div className='container mb-5'>
         <div className='row'>
            {new Array(3).fill(null).map((_, index) => {
                return (
                    
                    <div className='column' key={index} span={8} >
                        
                        <div class="card">
                        <HeartOutlined className='icons-like' />
                        <Image preview={false} className='item rounded' width='100%' height={index % 2 === 0 ? 350 : 440} src={require('../../../assets/img/img-cont.jpg')}></Image>
                        </div>
                        <div class="card">
                        <HeartOutlined className='icons-like' />
                        <Image preview={false} className='item rounded' width='100%' height={index % 2 === 1 ? 350 : 440} src={require('../../../assets/img/Im_container.png')}></Image>
                        </div>
                    </div>)
            })}
        </div>
    </div>
  )
}
export default CollectionsGallery