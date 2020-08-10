import styled from 'styled-components';
import {
    space,
    width,
    typography,
    color,
    layout,
    flexbox,
    grid,
    background,
    border,
    position,
    shadow,
} from 'styled-system';

export const Box = styled.div`
    ${space}
    ${width}
    ${typography}
    ${color}
    ${layout}
    ${flexbox}
    ${grid}
    ${background}
    ${border}
    ${position}
    ${shadow}
`;
export const Row = styled(Box)`
    display: flex;
`;
export const Column = styled(Row)`
    flex-direction: column;
`;
