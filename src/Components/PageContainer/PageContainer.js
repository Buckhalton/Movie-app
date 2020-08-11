import React from 'react';
import { ContainerBox } from '../index';
import PropTypes from 'prop-types';

export const PageContainer = ({ children, ...props }) => {
    //This page will contain header/Footer, and all other components that will need to be visible on all pages.
    return <ContainerBox padding="10%">{children}</ContainerBox>;
};

PageContainer.propTypes = {
    children: PropTypes.node,
};
