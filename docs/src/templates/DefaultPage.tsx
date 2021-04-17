// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navbar from '../components/Navbar';

import '../styles/base.scss';

export default function(props: React.PropsWithChildren<{}>) {
    return (
        <>
            <Navbar />
            {props.children}
        </>
    );
}
