import React from 'react'
import { Container, Grid, Typography } from '@material-ui/core'
import makeStyles from './style';
import avatar from '../componentes/images/avatar.jpg'





const About = () => {

    const classes = makeStyles();


    return (
    <Container >
        <Grid md="12" direction="row-reverse" justify="center" alignItems="center" container className={classes.content}>
       
                <Grid  xs={12} md={4} className={classes.cardContainer}>
                <Typography className={classes.title}>About me</Typography>
                    <Typography >
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                        aut odit aut fugit, sed quia consequuntur magni dolores eos
                        qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.
                    </Typography>
                </Grid>
       
                <Grid xs={12} md={7} >

                    <img
                        width={400}
                        src={avatar}
                        alt="Avatar"
                        className={classes.imgGridContainer}
                        />
                </Grid>
            </Grid>
   
    </Container>


    )
}

export default About;

