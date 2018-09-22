import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import Layout from './component/Layout/Layout';
import CssBaseline from '@material-ui/core/CssBaseline';

const app = document.getElementById('app');
ReactDOM.render(
    <Fragment>
        <CssBaseline/>
        <Layout/>
    </Fragment>, app);
