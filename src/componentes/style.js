import { makeStyles } from '@material-ui/core'


const centeredStyleObj = {
    display: 'flex',
    alignItems: 'center',

}



export default makeStyles ({
 
    nav: {
        height:'3vh',
        flexDirection: 'row',
        ...centeredStyleObj

    },
    content:{
       height:'80vh',

  
    },
    text:{
        
        justifyContent: 'flex-end',
        ...centeredStyleObj,

    },
    title:{
        fontSize:'4rem',
        fontfamily: 'Montserrat ',
        color:'#9b142b',
    },
    cardContainer:{   
        fontfamily: 'Montserrat ',
        color:'#9b142b',
        marginLeft:'40px'

    },
   
    imgGridContainer:{
        width: '100%',
    },
    titleText:{
    fontfamily: 'Montserrat ',
    color:'#9b142b',
    justifyContent:'center',
    marginLeft:'10px',
    ...centeredStyleObj

    },
    projectsContainer:{
        height:'80vh',
    },
  
});