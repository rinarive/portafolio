import React from 'react';
import { Container } from '@material-ui/core'
import { Button } from 'react-bootstrap'

import desktop from '../componentes/images/desktop.jpg';



const Home = () => {

  return (

<Container >
      <div s className="profile">
        <div class="card bg-none text-white">
          <img
            src={desktop}
            alt="Desktop"
            className="card-img"
          />
          <div class="card-img-overlay" variant="bottom">
            <h1 className="name" >RENA RIVERO</h1>
            <h2 class="second">Front-end Developer</h2>
            <Button className="about" href='/about' variant="warning text-white">About me</Button>
          </div>
        </div>
      </div>
    </Container>

  );
}


export default Home;