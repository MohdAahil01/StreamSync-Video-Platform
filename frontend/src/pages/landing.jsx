import React from 'react';
import "../App.css";
import { Link, useNavigate } from 'react-router-dom';
import { Box, Button, Container, Typography, AppBar, Toolbar } from '@mui/material';

export default function LandingPage() {
    const router = useNavigate();

    return (
        <div className='landingPageContainer'>
            <AppBar position="static" color="transparent" elevation={0} sx={{ backdropFilter: "blur(10px)" }}>
                <Toolbar sx={{ justifyContent: "space-between" }}>
                    <Typography variant="h5" component="div" sx={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, background: "linear-gradient(to right, #8338ec, #3a86ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                        StreamSync
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                        <Typography
                            onClick={() => router("/aljk23")}
                            sx={{ cursor: 'pointer', fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
                        >
                            Join as Guest
                        </Typography>
                        <Typography
                            onClick={() => router("/auth")}
                            sx={{ cursor: 'pointer', fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
                        >
                            Register
                        </Typography>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => router("/auth")}
                            sx={{ borderRadius: '20px' }}
                        >
                            Login
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>

            <Container maxWidth="lg" sx={{ display: 'flex', alignItems: 'center', height: '85vh', justifyContent: 'space-between' }}>
                <Box sx={{ maxWidth: '600px' }}>
                    <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 800, lineHeight: 1.2 }}>
                        <span style={{ color: "#ff9839" }}>Connect</span> with your loved Ones
                    </Typography>
                    <Typography variant="h6" component="p" sx={{ mb: 4, color: 'text.secondary' }}>
                        Cover a distance by StreamSync Video Call. High quality, low latency, and secure.
                    </Typography>
                    <Button
                        component={Link}
                        to="/auth"
                        variant="contained"
                        size="large"
                        sx={{
                            borderRadius: '30px',
                            padding: '12px 36px',
                            fontSize: '1.2rem',
                            textTransform: 'none'
                        }}
                    >
                        Get Started
                    </Button>
                </Box>
                <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                    <img src="/mobile.png" alt="Mobile View" style={{ maxHeight: '70vh', width: 'auto' }} />
                </Box>
            </Container>
        </div>
    )
}