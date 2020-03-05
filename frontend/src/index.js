import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css'
import './index.css';
import * as serviceWorker from './serviceWorker';
import Router from './Router';
import ContextProvider from './Context';
import "moment/locale/es"

ReactDOM.render(
<ContextProvider>
<Router />
</ContextProvider>, document.getElementById('root'));

serviceWorker.unregister();
