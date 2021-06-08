import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { Provider } from 'react-redux'
import { BrowserRouter as Router} from 'react-router-dom'
import store from './store'
import Service from './service/service'
import { ContextProvider } from './context';

const  service = new Service()
ReactDOM.render(
  <Provider store={store}>
    <ContextProvider value={service}>
      <Router>
        <App />
      </Router>
    </ContextProvider>
  </Provider>,
  document.getElementById('root')
);


