import React, { Fragment, useState } from 'react';
import Bootstrap  from './images/icons/bootstrapIcon';
import Css from './images/icons/cssIcon';
import ReactIcone from './images/icons/reactIcon'
import { Carousel } from 'react-bootstrap'


const Skills = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Fragment>
            <div className="contact-container">
        

                <div>
               

                    <div className="carousel-contact responsive">
                        <Carousel activeIndex={index} onSelect={handleSelect}>

                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={Bootstrap }
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3 className="contactCard">Correo</h3>
                                    <a 
                                        href="https://mail.google.com/mail/u/0/#inbox" 
                                        target="blank"
                                    > tami.skt@gmail.com </a>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={Css}
                                    alt="Second slide"
                                />
                                <Carousel.Caption>
                                    <h3 className="contactCard">GitHub</h3>
                                    <a 
                                        href="https://github.com/tamaramunoz" 
                                        target="blank"
                                    > /tamaramunoz </a>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={ReactIcone }
                                    alt="Third slide"
                                />
                                <Carousel.Caption>
                                    <h3 className="contactCard">LinkedIn</h3>
                                    <a href="https://www.linkedin.com/in/tamara-munoz-zamora/" target="blank"> /tamara-munoz-zamora </a>
                                </Carousel.Caption>
                            </Carousel.Item>
                            
                        </Carousel>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Skills;