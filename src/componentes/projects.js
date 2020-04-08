import React, { useState, useEffect } from 'react'
import {Typography, Grid, Container} from '@material-ui/core'
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import OutlinedCard from './card'
import makeStyles from './style'







const Projects = () => {
    const classes = makeStyles();
    let theme = createMuiTheme();
    theme = responsiveFontSizes(theme);


    const [ project, setProject ] = useState([]);

    useEffect(() => {
        // console.log('useEffect')
        getData()
    }, [])

    const getData = async () => {
        const data = await fetch('https://raw.githubusercontent.com/tamaramunoz/Portfolio-react/master/src/json/Projects.json')
        const infoProject = await data.json()
        // console.log(infoProject)
        setProject(infoProject)
    }

    return (
        <Container>
            <Grid>
            <ThemeProvider theme={theme}>
  
                <Typography className={classes.titleText} variant="h3">Proyectos en los que he participado recientemente.</Typography>
            </ThemeProvider>
                <div className={classes.projectsContainer}>
                    <OutlinedCard project={project} /> 
                </div>

            </Grid>
        </Container>
    );
}

export default Projects;