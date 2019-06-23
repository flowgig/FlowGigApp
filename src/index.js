import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Root from './containers/Root';
import theme from './theme';
import { configureStore, history } from './store/configureStore';

const store = configureStore();


render(
  <ThemeProvider theme={theme}>
    <AppContainer>
      <Root store={store} history={history} />
    </AppContainer>
  </ThemeProvider>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    const NextRoot = require('./containers/Root').default;
    render(
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppContainer>
          <NextRoot store={store} history={history} />
        </AppContainer>
      </ThemeProvider>,
      document.getElementById('root')
    );
  });
}
