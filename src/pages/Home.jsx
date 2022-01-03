import cities from "../data.json";
import React from "react";
import {Container, Grid, Typography} from "@mui/material";
import TourCard from "../components/TourCard";

const Home = () => {
    return (
        <Container sx={{marginY: 5}}>
            {
                cities?.map((city) => {
                    return (
                        <React.Fragment>
                            <Typography
                                variant={"h4"}
                                component={"h2"}
                                marginTop={5}
                                marginBottom={3}
                            >
                                Top {city.name} Tours
                            </Typography>
                            <Grid container={true} spacing={5}>
                                {
                                    city.tours.map((tour, index) => {
                                        return (
                                            <TourCard tour={tour} key={index}/>
                                        );
                                    })
                                }
                            </Grid>
                        </React.Fragment>
                    );
                })
            }
        </Container>
    );
}

export default Home;