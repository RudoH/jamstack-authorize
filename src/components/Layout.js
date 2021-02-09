import React from 'react';
import { Link } from 'gatsby';
import { IdentityContextProvider } from 'react-netlify-identity-widget'

import './layout.css'

const Layout = ({ children }) => {
    return (
        <IdentityContextProvider url="https://flamboyant-kalam-ceb86e.netlify.app">
        <header>
            <Link to="/">JAMStack Apperoni</Link>
        </header>
        <main>{children}</main>
    </IdentityContextProvider>
    )
}

export default Layout