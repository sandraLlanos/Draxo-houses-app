import React, { useState } from 'react';
import { HouseItem } from './HouseItem';
import { useFetchHouses } from '../hooks/useFetchHouses';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import { ExpandMore } from '@material-ui/icons';
import Map from './map/Map';

const useStyles = makeStyles((theme) => ({
    root: {
        'max-width': '1366px',
        width: '100%',
        margin: '0 auto'
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    MuiAccordionSummary: {
        padding: '1em',
        background: '#2c3e50',
        'font-weight': 'bold',
        cursor: 'pointer',
        color: 'white',
    }
}));

export const HouseGrid = () => {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(0);
    const { data:houses, loading } = useFetchHouses();  
    
    return (
        <>            
            { loading && <p>Loading...</p>}
            <hr/>
            <div className={classes.root}>
                {  
                    Object.keys(houses).sort().map((key, index) => (
                        <Accordion  key={index} 
                                    expanded={index === expanded} 
                                    onChange={()=>{index === expanded ? setExpanded(-1):setExpanded(index)}}>
                            <AccordionSummary className={classes.MuiAccordionSummary} aria-controls="panel1a-content" id="panel1a-header" expandIcon={<ExpandMore />}>                               
                                <Typography className={classes.heading}>{key}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                {
                                    houses[key].map((element, indexElement) => (
                                        <HouseItem key={`element-${indexElement}`} {...element} />
                                    ))
                                }
                            </AccordionDetails>
                            <div>
                                <Map locations={houses[key]}/>
                            </div> 
                        </Accordion>
                    ))
                }
            </div>
        </>
    )
}

