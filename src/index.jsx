import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './lib/redux/store';
import App from './lib/components/app/App';
import './styles/reset.scss';
import './styles/global.scss';
import './styles/responsive.scss';

const rootComponent = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(
    rootComponent,
    document.getElementById('root'),
);
