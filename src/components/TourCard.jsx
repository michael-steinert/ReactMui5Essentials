import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import {Box, createTheme, Rating, ThemeProvider, Typography} from "@mui/material";
import {AccessTime} from "@mui/icons-material";

const theme = createTheme({
    components: {
        MuiTypography: {
            variants: [
                {
                    props: {
                        variant: "body2"
                    },
                    style: {
                        fontSize: 11
                    }
                },
                {
                    props: {
                        variant: "body3"
                    },
                    style: {
                        fontSize: 9
                    }
                }
            ]
        }
    }
});

const TourCard = ({tour}) => {
    return (
        <Grid item={true} xs={3}>
            <ThemeProvider theme={theme}>
                <Paper elevation={3}>
                    <img
                        src={tour.image}
                        alt={tour.name}
                        className={"img"}
                    />
                    <Box paddingX={1}>
                        <Typography variant={"subtitle1"} component={"h2"}>
                            {tour.name}
                        </Typography>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center"
                            }}
                        >
                            <AccessTime sx={{width: 12.5}}/>
                            <Typography
                                variant={"body2"}
                                component={"p"}
                                marginLeft={0.5}
                            >
                                {tour.duration} Hours
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center"
                            }}
                            marginTop={2}
                        >
                            <Rating
                                name={"read-only"}
                                readOnly={true}
                                value={tour.rating}
                                precision={0.1}
                                size={"small"}
                            />
                            <Typography
                                variant={"body2"}
                                component={"p"}
                                marginLeft={0.5}
                            >
                                {tour.rating}
                            </Typography>
                            <Typography
                                variant={"body2"}
                                component={"p"}
                                marginLeft={1.5}
                            >
                                ({tour.numberOfViews} Reviews)
                            </Typography>
                        </Box>
                        <Box>
                            <Typography
                                variant={"h6"}
                                component={"h3"}
                                marginTop={0}
                            >
                                Price {tour.price}€
                            </Typography>
                        </Box>
                    </Box>
                </Paper>
            </ThemeProvider>
        </Grid>
    );
}

export default TourCard;