import React from 'react';
import CardComponent from '../../_molecules/card';
const BecomeProComponent = () => {
    const sub = <p>Do you think it's hard to find an aesthetic decoration at an affordable price?

        With Packty, you can customize your budget. And enhance your decor with 3D furniture images visualized in augmented reality.</p>
    return (
        <CardComponent
            title='You are pro ? join us !'
            subtitle={sub}
            action='become pro'
            image={require('../../../assets/img/video.jpg')}
            color='blue'
        >
        </CardComponent>
    );
};

export default BecomeProComponent;