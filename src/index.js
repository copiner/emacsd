import React from 'react'
import { render } from 'react-dom'
import App from './containers'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'

let div = document.createElement('div');
div.setAttribute('id', 'app');
document.body.appendChild(div);
const mountNode = document.getElementById('app');

const store = configureStore();

// store.subscribe(() =>
//   console.log(store.getState())
// );

render(
    <AppContainer>
        <Provider store={store}>
            <App/>
        </Provider>
    </AppContainer>,
    mountNode
);

// console.log(module.hot);
// console.log(process.env.NODE_ENV);
if(module.hot && process.env.NODE_ENV !== 'production') {
    module.hot.accept();
}
