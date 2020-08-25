import React from 'react';
import theme from './theme.js';
import { Box, ContainerBox } from './Components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

function App() {
    return (
        <Router>
            <ThemeProvider theme={theme}>
                <ContainerBox>
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
                                    Genres
                                </Box>
                            </div>
                        </Route>
                        <Route path="/movies/:movieId">
                            <div>users</div>
                        </Route>
                        <Route path="/">
                            <div>home</div>
                        </Route>
                    </Switch>
                </ContainerBox>
            </ThemeProvider>
        </Router>
    );
}

export default App;
