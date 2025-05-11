import React from "react";
import { AppBar, Toolbar, Typography, Button, Box, styled } from "@mui/material";
// import DarkMode from "../DarkMode";
import Fire from "../assets/fire.png";
import Star from "../assets/star.png";
import Party from "../assets/partying-face.png";

const NavbarContainer = styled(AppBar)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    boxShadow: theme.shadows[3],
    padding: theme.spacing(0, 2),
}));

const NavLinks = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(2),
}));

const NavButton = styled(Button)(({ theme }) => ({
    color: theme.palette.text.primary,
    textTransform: "none",
    fontWeight: 500,
    "&:hover": {
        backgroundColor: "transparent",
        opacity: 0.8,
    },
}));

export function Navbar() {
    return (
        <NavbarContainer position ="static">
            <Toolbar sx={{ justifyContent: "space-between" }}>
                <Typography variant="h5" component="h1" fontWeight="bold">
                    MovieManiac
                </Typography>

                <NavLinks>
                    {/*<DarkMode />*/}
                    <NavButton href ="#popular">
                        Popular
                        <img src={Fire} alt="fire emoji" style={{ marginLeft: 8, height: 20 }} />
                    </NavButton>
                    <NavButton href ="#top_rated">
                        Top Rated
                        <img src={Star} alt="star emoji" style={{ marginLeft: 8, height: 20 }} />
                    </NavButton>
                    <NavButton href ="#upcoming">
                        Upcoming
                        <img src={Party} alt="party face emoji" style={{ marginLeft: 8, height: 20 }} />
                    </NavButton>
                </NavLinks>
            </Toolbar>
        </NavbarContainer>
    );
}