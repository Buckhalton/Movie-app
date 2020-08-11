import styled from 'styled-components';
import { Box } from '../index';

export const ContainerBox = styled(Box)`
    height: 100vh;
    background: #642b73; /* fallback for old browsers */
    background: -webkit-linear-gradient(
        to right,
        #c6426e,
        #642b73
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
        to right,
        #c6426e,
        #642b73
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;
