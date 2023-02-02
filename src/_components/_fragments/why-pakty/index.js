import React from 'react';
import CardComponent from '../../_molecules/card';
const WhyPaktyComponent = () => {
    return (
        <CardComponent
            title='Why Pakty'
            subtitle="Do you think it's hard to find an aesthetic decoration at an affordable price? 

            With Packty, you can customize your budget. And enhance your decor with 3D furniture images visualized in augmented reality.
            "
            action='DISCOVER MORE'
            image={require('../../../assets/img/video.jpg')}
        >
        </CardComponent>
    );
};

export default WhyPaktyComponent;