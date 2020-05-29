import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { toast } from 'react-toastify';
import Favicon from 'react-favicon';

import reducers from './reducers';
import App from './components/App';


toast.configure();

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
	<Provider store={store}>
		<Favicon url="./favicon.ico"/>
		<App />
	</Provider>,
	document.getElementById('root')
);
