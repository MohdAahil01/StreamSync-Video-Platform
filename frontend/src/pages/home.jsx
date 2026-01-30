import React, { useContext, useState } from 'react';
import withAuth from '../utils/withAuth';
import { useNavigate } from 'react-router-dom';
import { Button, IconButton, TextField, AppBar, Toolbar, Typography, Box, Container } from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import { AuthContext } from '../contexts/AuthContext';
import LogoutIcon from '@mui/icons-material/Logout';

function HomeComponent() {
    let navigate = useNavigate();
    const [meetingCode, setMeetingCode] = useState("");

    const { addToUserHistory } = useContext(AuthContext);
    let handleJoinVideoCall = async () => {
        await addToUserHistory(meetingCode)
        navigate(`/${meetingCode}`)
    }

    return (
        <Box sx={{ minHeight: '100vh', background: "radial-gradient(circle at 10% 20%, rgb(30, 30, 50) 0%, rgb(18, 18, 18) 90.2%)" }}>
            <AppBar position="static" color="transparent" elevation={0} sx={{ backdropFilter: "blur(10px)" }}>
                <Toolbar sx={{ justifyContent: "space-between" }}>
                    <Typography variant="h5" component="div" sx={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, background: "linear-gradient(to right, #8338ec, #3a86ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                        StreamSync
                    </Typography>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Button
                            startIcon={<RestoreIcon />}
                            onClick={() => navigate("/history")}
                            color="inherit"
                            sx={{ fontFamily: "'Inter', sans-serif" }}
                        >
                            History
                        </Button>
                        <Button
                            startIcon={<LogoutIcon />}
                            onClick={() => {
                                localStorage.removeItem("token")
                                navigate("/auth")
                            }}
                            color="inherit"
                            sx={{ fontFamily: "'Inter', sans-serif" }}
                        >
                            Logout
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>

            <Container maxWidth="lg" sx={{ display: 'flex', alignItems: 'center', height: '85vh', justifyContent: 'space-between' }}>
                <Box sx={{ maxWidth: '600px' }}>
                    <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 700, lineHeight: 1.2 }}>
                        Provide Quality Video Call Just Like Quality Education
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mt: 4 }}>
                        <TextField
                            onChange={e => setMeetingCode(e.target.value)}
                            label="Meeting Code"
                            variant="outlined"
                            sx={{
                                input: { color: 'white' },
                                label: { color: 'gray' },
                                fieldset: { borderColor: 'rgba(255,255,255,0.2)' }
                            }}
                        />
                        <Button onClick={handleJoinVideoCall} variant='contained' size="large">Join Call</Button>
                    </Box>
                </Box>
                <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                    <img src='/logo3.png' alt="Logo" style={{ maxWidth: '400px', width: '100%' }} />
                </Box>
            </Container>
        </Box>
    )
}

export default withAuth(HomeComponent)