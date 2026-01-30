import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, Typography, IconButton, Grid, Box, AppBar, Toolbar, Container } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import withAuth from '../utils/withAuth';

function History() {
    const { getHistoryOfUser } = useContext(AuthContext);
    const [meetings, setMeetings] = useState([])
    const routeTo = useNavigate();

    useEffect(() => {
        const fetchHistory = async () => {
            try {
                const history = await getHistoryOfUser();
                setMeetings(history);
            } catch {
                // IMPLEMENT SNACKBAR
            }
        }
        fetchHistory();
    }, [])

    let formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, "0");
        const month = (date.getMonth() + 1).toString().padStart(2, "0")
        const year = date.getFullYear();
        return `${day}/${month}/${year}`
    }

    return (
        <Box sx={{ minHeight: '100vh', background: "#121212" }}>
            <AppBar position="static" color="transparent" elevation={0} sx={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                <Toolbar>
                    <IconButton onClick={() => routeTo("/home")} edge="start" color="inherit" aria-label="home" sx={{ mr: 2 }}>
                        <HomeIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontFamily: "'Outfit', sans-serif", fontWeight: 600 }}>
                        Meeting History
                    </Typography>
                </Toolbar>
            </AppBar>

            <Container maxWidth="md" sx={{ mt: 4 }}>
                <Grid container spacing={3}>
                    {meetings.length !== 0 ? meetings.map((e, i) => (
                        <Grid item xs={12} sm={6} md={4} key={i}>
                            <Card sx={{ background: "#1E1E2E", color: "white", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.05)" }}>
                                <CardContent>
                                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                        <VideoCallIcon sx={{ color: "#8338ec", mr: 1 }} />
                                        <Typography sx={{ fontWeight: 600 }}>
                                            Code: {e.meetingCode}
                                        </Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <CalendarMonthIcon sx={{ color: "gray", mr: 1, fontSize: "1rem" }} />
                                        <Typography variant="body2" color="text.secondary">
                                            {formatDate(e.date)}
                                        </Typography>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                    )) : (
                        <Grid item xs={12}>
                            <Typography variant="body1" align="center" color="text.secondary">
                                No meeting history found.
                            </Typography>
                        </Grid>
                    )}
                </Grid>
            </Container>
        </Box>
    )
}

export default withAuth(History);