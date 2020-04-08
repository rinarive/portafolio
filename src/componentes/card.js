import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card, Grid, Container} from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';

//import CustomizedButtons from './buttons'
import { Button } from 'react-bootstrap'


const useStyles = makeStyles({
    root: {
        minWidth: 275,
        fontSize:'4rem',
        fontfamily: 'Montserrat ',
        color:'#9b142b',
        marginTop: '20px',
        marginLeft: '0.5px'
        
       
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
 
    
    },
    content:{
        marginTop:'30px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        direction:"row",     
   
     },

});

const OutlinedCard = (props) => {
    const classes = useStyles();
  
    return (
        <Container>

        <Grid md="12" spacing={5} container className={classes.content}>
       
                {props.project.map(item => {
                    return (
                        <Card key={item.id}  className={classes.root} variant="outlined">
                            <CardContent >
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                 
        </Typography>
                                <Typography variant="h5" component="h2">
                                {item.title}
        </Typography>
                                <Typography className={classes.pos} color="textSecondary">
                                {item.subtitle}
        </Typography>
                                <Typography variant="body2" component="p">
                                {item.description}
        
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button href={item.url} variant="warning text-white">Learn more</Button>
                            </CardActions>
                        </Card>
                    );
                })}
         
     </Grid>
     </Container>

    );
};
export default OutlinedCard;