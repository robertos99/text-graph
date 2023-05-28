import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';


export default function DocumentSelectorGrid({ children }) {
    return (
        <Box sx={{ width: '100%' }}>
            <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {React.Children.map(children, (child, index) => {
                    return (
                        <Grid item xs={4}>
                                    {child}
                        </Grid>
                    );})
                }
            </Grid>
        </Box>
    );
}
