import React from 'react';
import {AppBar, ThemeProvider, Toolbar, Typography} from '@material-ui/core';




function Navbar () {
    

    return (


        <div>
            <AppBar style={{ backgroundColor: '#FC2D1C' }}>
                <Toolbar>
                    <Typography variant='h6'>
                        F1
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    
    )
    }
    
export default Navbar;