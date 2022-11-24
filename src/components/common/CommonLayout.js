import React from 'react';
import Footer from './Footer';
import Header from './Header';

const CommonLayout = ({ children }) => {
    return (
        <>
            <Header />
                <main>{children}</main>
            <Footer />
        </>
    );
};

export default CommonLayout;
