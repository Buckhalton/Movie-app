import styled from 'styled-components';
import {
    space,
    width,
    typography,
    color,
    layout,
    background,
    border,
    position,
    shadow,
    buttonStyle,
} from 'styled-system';

export const Button = styled.button`
    ${space}
    ${width}
    ${typography}
    ${color}
    ${layout}
    ${background}
    ${border}
    ${position}
    ${shadow}
    ${buttonStyle}
    -webkit-box-shadow: 0px 0px 40px -5px rgba(0,0,0,0.43);
    -moz-box-shadow: 0px 0px 40px -5px rgba(0,0,0,0.43);
    box-shadow: 0px 0px 40px -5px rgba(0,0,0,0.43);
    cursor: pointer;
`;

Button.defaultProps = {
    variant: 'primary',
    px: 4,
    py: 3,
    fontSize: 2,
    border: 'none',
    borderRadius: '10px',
    width: '100%',
};
