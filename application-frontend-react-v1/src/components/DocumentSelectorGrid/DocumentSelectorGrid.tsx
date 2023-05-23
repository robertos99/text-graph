import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';



export default function DocumentSelectorGrid({ children }) {
    return (
        <Box sx={{ width: '100%' }}>
            <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {React.Children.map(children, (child, index) => {
                    return (
                        <Grid item xs={4}>
                                    {child}
                        </Grid>
                    );
                }
                )
                }
            </Grid>
        </Box>
    );
}
