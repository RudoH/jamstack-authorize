import React, { useEffect, useState } from 'react';
import { navigate } from 'gatsby'
import { Router } from '@reach/router'
import IdentityModal from 'react-netlify-identity-widget'
import Layout from '../components/Layout';
import Profile from '../components/Profile';
import RouteBase from '../components/RouteBase'
import RouteSecret from '../components/RouteSecret'
import RouteLogin from '../components/RouteLogin';

import 'react-netlify-identity-widget/styles.css'


const Dashboard = ({ location }) => {
    const [isVisible, setVisibility] = useState(true);

    useEffect(() => {
        if (location.pathname.match(/^\/dashboard\/?$/)) {
            navigate('/dashboard/login', { replace: true})
        }
    }, []);

    const showModal = () => setVisibility(!isVisible);
    return (
        <Layout>
            <Profile showModal={showModal} />
            <Router>
                <RouteBase path="/dashboard/base" />
                <RouteSecret path="/dashboard/secret" />
                <RouteLogin path="/dashboard/login" showModal={showModal} />
            </Router>
            <IdentityModal showDialog={isVisible} onCloseDialog={showModal}/>
        </Layout>
    )
};

export default Dashboard