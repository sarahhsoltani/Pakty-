import React from 'react'
import { Image } from 'antd';
import './style.css'
import SliderContentComponent from './sliderContent';
import ShooseTypeRoom from './shooseTypeRoom';
import CollectionsGallery from './collectionsGallery';

 function DetailsCollectionsComponent() {
  return (
    <>
    <Image width={'100%'}   preview={false} src={require('../../assets/img/ext.jpg')} />
   <SliderContentComponent/>
   <ShooseTypeRoom/>
   <CollectionsGallery/>
</>
  )
}
export default DetailsCollectionsComponent