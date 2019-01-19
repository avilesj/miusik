import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo.jsx';
import Search from './Search.jsx';
import Footer from '../Footer.jsx';

let IndexPage = () => {
    return (
        <div id="index-page">
            <Logo />
            <Search />
            <Footer />
        </div>

    )
}

export default IndexPage;