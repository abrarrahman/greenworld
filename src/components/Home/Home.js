import React from 'react';
import './Home.css'
import Slides from './Slides';

import image1 from '../../images/clothes.jpg';
import image2 from '../../images/bluedenim2.jpg';
import image3 from '../../images/dressshirts.jpg';
import image4 from '../../images/tshirts.jpg';

const slides = [
    {
        label: 'Quality Clothing',
        description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem neque doloribus recusandae quae!`,
        src: image1
    },
    {
        label: 'Denim Apparel',
        description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem neque doloribus recusandae quae!`,
        src: image2
    },
    {
        label: 'Formal Attire',
        description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem neque doloribus recusandae quae!`,
        src: image3
    },
    {
        label: 'Leisure Wear',
        description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem neque doloribus recusandae quae!`,
        src: image4
    }
];
const Home = () => {
    return(
        <div>
            <Slides slides={slides}/>
        </div>
    )
}

export default Home;