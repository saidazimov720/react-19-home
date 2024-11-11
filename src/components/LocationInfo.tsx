import React from 'react';
import {Typography, Grid, Card, CardContent } from '@mui/material';

const locations = [
    { id: 1, title: 'Location 1', description: 'Lorem ipsum dolor sit amet', mapUrl: 'https://maps.google.com/' },
];

const LocationInfo: React.FC = () => {
    return (
        <Grid container spacing={3}>
            {locations.map((location) => (
                <Grid item xs={12} sm={6} md={4} key={location.id}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5">{location.title}</Typography>
                            <Typography variant="body2">{location.description}</Typography>
                            <iframe 
                                title='Locate'
                                src={location.mapUrl}
                                width="100%"
                                height="200"
                                loading="lazy"
                            ></iframe>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default LocationInfo;
