import React from 'react';
import theme from './theme.js';
import './App.css';
import { Box, PageContainer } from './Components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import LandingPage from './Pages/LandingPage.js';

function App() {
    return (
        <Router>
            <ThemeProvider theme={theme}>
                <PageContainer>
                    <Switch>
                        <Route path="/genres">
                            <div>
                                <Box
                                    color={[
                                        'darkError',
                                        'darkPurple',
                                        'darkBlue',
                                    ]}
                                >
                                    genres
                                </Box>
                            </div>
                        </Route>
                        <Route path="/movies/:movieId">
                            <div>users</div>
                        </Route>
                        <Route path="/" component={LandingPage} />
                    </Switch>
                </PageContainer>
            </ThemeProvider>
        </Router>
    );
}

export default App;
