import React from 'react'
// nav
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import '../style/style.css'

export const Cards = () => {

    // nav
    const [value, setValue] = React.useState('one');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    }
    return (
        <div className='padreC'>
            <nav>
                <Box sx={{ width: '100%' }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        textColor="secondary"
                        indicatorColor="secondary"
                        aria-label="secondary tabs example"
                    >
                        <Tab value="one" label="Item One" />
                        <Tab value="two" label="Item Two" />
                        <Tab value="three" label="Item Three" />
                    </Tabs>
                </Box>
            </nav>
            <div >
                <h2>Gtc 2022</h2>
                <h4>Gtc 2022</h4>
                <p>
                    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.
                </p>
                <p>Nvidia</p>
                <p> <b>Industry</b> All industries</p>
                <p> <b>Primary Topic</b> Al Strategy for Business Leaders</p>
            </div>
            <div >
                <h2>Gtc 2022</h2>
                <h4>Gtc 2022</h4>
                <p>
                    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.
                </p>
                <p>Nvidia</p>
                <p> <b>Industry</b> All industries</p>
                <p> <b>Primary Topic</b> Al Strategy for Business Leaders</p>
            </div>
            <div >
                <h2>Gtc 2022</h2>
                <h4>Gtc 2022</h4>
                <p>
                    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.
                </p>
                <p>Nvidia</p>
                <p> <b>Industry</b> All industries</p>
                <p> <b>Primary Topic</b> Al Strategy for Business Leaders</p>
            </div>
        </div>
    )
}
