import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Slides = ({slides}) => {
    //console.log('slides.js',src);
    return(
        <div>
           <Carousel className="center w-80">
                {
                    slides.map((slide)=>{
                        return <Carousel.Item key={slide.src}>
                            <img
                            className="d-block w-100"
                            src= {slide.src}
                            alt={slide.label}
                            height='500px'
                            />
                            <Carousel.Caption className='bg-black-50'>
                            <h3 className="green f2">{slide.label}</h3>
                            <p>{slide.description}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    })
                }
            </Carousel>
        </div>
    )
}

export default Slides;