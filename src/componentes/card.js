import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Grid, Container,CardActions,CardContent,CardHeader,CardMedia} from '@material-ui/core';


import Typography from '@material-ui/core/Typography';
import { Button } from 'react-bootstrap'


const useStyles = makeStyles({
    root: {
       
        fontSize: '4rem',
        fontfamily: 'Montserrat ',
        color: '#9b142b',
        marginTop: '20px',
        marginLeft: '0.5px',
        

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
    content: {
        marginTop: '30px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-betwen',
        direction: "row",
        minWidth:100,

    },
    media: {
        height: '25vh',
        paddingTop: '56.25%', // 16:9
 
      },

});

const OutlinedCard = (props) => {
    const classes = useStyles();

    return (
        <Container>

            <Grid md="12" spacing={5} container className={classes.content}>

                {props.project.map(item => {
                    return (
                        <Card key={item.id} className={classes.root} variant="outlined">
                            <CardHeader

                                title={item.title}
                                subheader={item.subtitle}
                            />
                            <CardMedia
                                className={classes.media}
                                image={item.logo}
                                title="Paella dish"
                            />
                            <CardContent >
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                   
                                </Typography>
                                <Typography variant="h5" component="h2">

                                </Typography>
                                <Typography className={classes.pos} color="textSecondary">
                           

                                </Typography>
                                <Typography variant="body2" component="p">
                               


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