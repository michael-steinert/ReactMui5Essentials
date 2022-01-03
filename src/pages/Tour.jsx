import {BottomNavigation, Box, Container, Typography} from "@mui/material";
import QuiltedImageList from "../components/QuiltedImageList";
import CustomizedAccordion from "../components/CustomizedAccordion";
import Paper from "@mui/material/Paper";
import BasicModal from "../components/BasicModal";
import {useState} from "react";

const Tour = () => {
    const [value, setValue] = useState(0);

    return (
        <Container sx={{width: 900}}>
            <Typography variant={"h3"} component={"h1"} marginTop={3}>
                Explore the World
            </Typography>
            <Box marginTop={3} sx={{display: "flex"}}>
                <img
                    src={"https://media.timeout.com/images/105124791/750/422/image.jpg"}
                    alt={"World"}
                    height={325}
                />
                <QuiltedImageList/>
            </Box>
            <Typography variant={"h6"} component={"h4"} marginY={3}>
                About this Ticket
            </Typography>
            <Box>
                <Typography variant={"paragraph"} component={"p"} marginTop={3}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
                    voluptates rem quos delectus debitis earum modi, ipsum veritatis.
                    Perferendis officiis nobis, aut hic praesentium nulla vero, possimus
                    omnis reprehenderit blanditiis quis incidunt minima voluptatibus illum
                    quam corporis libero fugiat doloremque. Lorem ipsum dolor sit amet
                    consectetur, adipisicing elit. Exercitationem officiis commodi beatae
                    animi incidunt necessitatibus aut provident ad ex.
                </Typography>
            </Box>
            <Box marginY={3}>
                <Typography variant="h6" component="h4" marginBottom={3}>
                    Frequently Asked Questions
                </Typography>
                <CustomizedAccordion/>
            </Box>
            <Paper
                sx={{
                    position: "fixed",
                    bottom: 0,
                    left: 0,
                    right: 0
                }}
                elevation={3}
            >
                <BottomNavigation
                    showLabels={true}
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                >
                    <BasicModal/>
                </BottomNavigation>
            </Paper>
        </Container>
    );
}

export default Tour;