import { Box } from '../index';
import { variant } from 'styled-system';
import styled from 'styled-components';

export const Text = styled(Box)(
    variant({
        prop: 'size',
        variants: {
            title: {
                fontSize: 8,
                color: 'white',
                fontWeight: 'bolder',
            },
            h1: {
                fontSize: 6,
                color: 'white',
                fontWeight: 'bolder',
            },
            h2: {
                fontSize: 5,
                color: 'white',
                fontWeight: 'bolder',
            },
            h3: {
                fontSize: 3,
                color: 'white',
                fontWeight: 'bolder',
            },
            h4: {
                fontSize: 2,
                color: 'white',
                fontWeight: 'bolder',
            },
            p: {
                fontSize: 2,
                color: 'white',
            },
            secondary: {
                fontSize: 0,
                color: 'white',
            },
        },
    })
);
