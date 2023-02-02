import { Image } from 'antd';
import React from 'react';
import CardComponent from '../../_molecules/card';
const AppFragmentComponent = () => {
    return (
        <CardComponent
         title='Pakty app is practical and easy to use.'
         subtitle='All you need to do is try and choose your design. We created a cozy and suitable atmosphere to work comfortably and explore your creative side.'
         action='EXPLORE ALL'
         color='green'
         >
            <Image preview={false} src={require('../../../assets/img/app-fragment.jpg')} />
        </CardComponent>
    );
};

export default AppFragmentComponent;