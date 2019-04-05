import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './views/shared/Layout';
import { Home } from './views/Home';
import { Login } from './views/Login';
import AuthService from './components/services/AuthService';

const loggedIn = new AuthService().loggedIn();

export const routes = <Layout>
    <Route path='/' component={Home as any} />
    <Route path='/Login' component={Login as any} />
</Layout>;
