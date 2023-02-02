import React from 'react';
import CardComponent from '../../_molecules/card';
import GalleryComponent from '../../_molecules/gallery';
const CollectionComponent = () => {
    return (
        <CardComponent
         title='Get inspired by our Collection'
         subtitle='Discover our latest work by categories'
         action='EXPLORE ALL'
         >
            <GalleryComponent></GalleryComponent>
        </CardComponent>
    );
};

export default CollectionComponent;