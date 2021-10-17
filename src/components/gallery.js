import React from 'react';
import Carousel from 'react-gallery-carousel';
import Gallery1 from '../assets/images/gallery-1.jpeg';
import Gallery1Landscape from '../assets/images/gallery-1-landscape.jpeg';
import Gallery2 from '../assets/images/gallery-2.jpg';
import Gallery2Landscape from '../assets/images/gallery-2-landscape.jpeg';
import Gallery3 from '../assets/images/gallery-3.jpg';
import Gallery3Landscape from '../assets/images/gallery-3-landscape.jpeg';
import Gallery4 from '../assets/images/gallery-4.jpg';
import Gallery4Landscape from '../assets/images/gallery-4-landscape.jpeg';
import Gallery5 from '../assets/images/gallery-5.jpeg';
import Gallery5Landscape from '../assets/images/gallery-5-landscape.jpeg';
import Gallery6 from '../assets/images/gallery-6.jpg';
import Gallery6Landscape from '../assets/images/gallery-6-landscape.jpeg';
import Gallery7 from '../assets/images/gallery-7.jpg';
import Gallery7Landscape from '../assets/images/gallery-7-landscape.jpeg';
import { useScrollAnim, useWindowDimensions } from './utils/function';

const imgGallery = [
    { src: Gallery1 },
    { src: Gallery2 },
    { src: Gallery3 },
    { src: Gallery4 },
    { src: Gallery5 },
    { src: Gallery6 },
    { src: Gallery7 }
]
const imgGalleryLandscape = [
    { src: Gallery1Landscape },
    { src: Gallery2Landscape },
    { src: Gallery3Landscape },
    { src: Gallery4Landscape },
    { src: Gallery5Landscape },
    { src: Gallery6Landscape },
    { src: Gallery7Landscape },
]

const Gallery = () => {
    const [trigger, anim] = useScrollAnim()
    const { height, width } = useWindowDimensions();
    return (
        <section className="gallery-section" ref={trigger}>
            {/* <div className="py-5"> */}
            <div className="content">
                <h1 className={`title ${anim(1)}`}>Gallery</h1>
                <Carousel className={`gallery-container ${anim(2)}`} images={width < 576 ? imgGallery : imgGalleryLandscape} hasIndexBoard={false} />
            </div>
            {/* </div> */}
        </section>
    )
}

export default Gallery