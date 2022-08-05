import React from 'react';
import ReactDom from 'react-dom';
import { createMemoryHistory } from 'history';

import App from './App';

const mount = (el, { onNavigate }) => {

    console.log('onNavigate ', onNavigate);
    const history = createMemoryHistory();
    console.log('history ', history);
    history.listen(onNavigate);

    ReactDom.render(
        <App history={history} />,
        el
    );
};

if (process.env.NODE_ENV === 'development') {
    const devRoot = document.getElementById('_feed-dev-root');

    if (devRoot) {
        mount(devRoot);
    }
}

export { mount };