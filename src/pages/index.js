import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout'

const App = () => (
    <Layout>
        <h1>This app is the shizz</h1>
        <p>Log in to find out why...</p>
        <Link to="/dashboard">Go to the dashboard</Link>
    </Layout>
)

export default App;