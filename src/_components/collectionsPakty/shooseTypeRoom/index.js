import React from 'react'
import './style.css'
import { Col, Row,Image } from 'antd';
 function ShooseTypeRoom() {
  return (
    <>
   
   <div className='container'>
   <p className='text-shoose pt-5'>Choose the type of the room :</p>
   
   <Row  >
    <Col  lg={3}><p className='box-items-one me-lg-2 '>All rooms</p></Col>
    <Col lg={3}><p className='box-items-two me-lg-2 ' > <Image  className='img-rooms'  preview={false} src={require('../../../assets/img/living-rooms.png')} />Living room</p></Col>
    <Col lg={3}><p className='box-items-two img-bedrooms me-lg-2 '><Image  className='img-rooms'  preview={false} src={require('../../../assets/img/bedroom.png')} />Bedroom</p></Col>
    <Col lg={3}><p className='box-items-two img-bedrooms  me-lg-2'><Image  className='img-rooms'  preview={false} src={require('../../../assets/img/living-rooms.png')} />Kitchen</p></Col>
    <Col lg={3}><p className='box-items-two  me-lg-2'><Image  className='img-rooms'  preview={false} src={require('../../../assets/img/living-rooms.png')} />Dining room</p></Col>
    <Col lg={3}><p className='inline' >...</p></Col>
    <Col lg={3} ></Col>
    <Col lg={3}><p className='para-shape'><Image  className='shape '   preview={false} src={require('../../../assets/img/shape.png')} /></p></Col>
   </Row>
   <div>
    <p className='badget'>Your badget</p>
   </div>
   <div className='filter-price'>
    <div className='d-flex justify-content-between'>
        <p>$0</p>
        <p>$1000</p>
    </div>
   

    <div className='divv'>
       
       <input className="range" type="range"   min="0" max="1000" />
   </div>
   </div>
   </div>
</>
  )
}
export default ShooseTypeRoom