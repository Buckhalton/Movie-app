import React from 'react';
import { Box, Column, Row, Text, Button } from '../Components';

const LandingPage = ({ history }) => {
    return (
        <Box margin={0} padding={0} height="100%">
            <Column height="50%" alignItems="center" justifyContent="center">
                <Box justifyContent="center" height="35%" width="75%">
                    <Row justifyContent="center">
                        <Text size="title">Movie Randomizer</Text>
                    </Row>
                    <Row justifyContent="center" mt={3}>
                        <Text size="p">
                            Bored during quarantine? Or do you feel like you've
                            already seen every movie on Netflix? This app will
                            suggest a random movie on Netflix, based on your
                            selected genre(s).
                        </Text>
                    </Row>
                    <Row mt={4} justifyContent="center">
                        <Button
                            onClick={() => history.push('/genres')}
                            variant="primary"
                            width={['100%', '30%']}
                        >
                            Begin
                        </Button>
                    </Row>
                </Box>
            </Column>
        </Box>
    );
};

export default LandingPage;
