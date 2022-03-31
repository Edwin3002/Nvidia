import React from 'react'
//acordion
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
//form
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import SearchIcon from '@mui/icons-material/Search';

import '../style/style.css'

export const Filter = () => {

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className='padreF'>
            <h2>Filters</h2>
            <div className='search'>

            <input placeholder='search'  className='input'/>
            <SearchIcon className='lupa'/>
            </div>
            <div>
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography sx={{ width: '23%', flexShrink: 0 }}>
                            General settings
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox />} label="Filter" />
                            <FormControlLabel control={<Checkbox />} label="Filter" />
                            <FormControlLabel control={<Checkbox />} label="Filter" />
                        </FormGroup>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2bh-content"
                        id="panel2bh-header"
                    >
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>Users</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <FormGroup>
                            <FormControlLabel control={<Checkbox />} label="Filter" />
                            <FormControlLabel control={<Checkbox />} label="Filter" />
                            <FormControlLabel control={<Checkbox />} label="Filter" />
                        </FormGroup>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3bh-content"
                        id="panel3bh-header"
                    >
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>
                            Advanced settings
                        </Typography>

                    </AccordionSummary>
                    <AccordionDetails>
                    <FormGroup>
                            <FormControlLabel control={<Checkbox />} label="Filter" />
                            <FormControlLabel control={<Checkbox />} label="Filter" />
                            <FormControlLabel control={<Checkbox />} label="Filter" />
                        </FormGroup>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel4bh-content"
                        id="panel4bh-header"
                    >
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>Personal data</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <FormGroup>
                            <FormControlLabel control={<Checkbox />} label="Filter" />
                            <FormControlLabel control={<Checkbox />} label="Filter" />
                            <FormControlLabel control={<Checkbox />} label="Filter" />
                        </FormGroup>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    )
}