import React, { Component } from 'react';
import * as serviceWorker from 'serviceWorker';
import { hydrate, render } from "react-dom";

import { AppContainer } from 'react-hot-loader';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Root from 'containers/Root';
import theme from 'theme';
import configureStore, {history} from 'utils/configureStore';

const store = configureStore();

class Main extends Component {
    render() {
        return (
          <ThemeProvider theme={theme}>
            <AppContainer>
              <Root store={store} history={history} />
            </AppContainer>
          </ThemeProvider>
      )
    }
}

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<Main />, rootElement);
} else {
  render(<Main />, rootElement);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
