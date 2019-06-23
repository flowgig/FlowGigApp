import React, { Component } from 'react';
import {connect} from 'react-redux';

import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import MainAppBar from '../components/MainAppBar';

import Routes from '../Routes';

import styles from './Root.module.scss';


class Root extends Component {
  constructor(props) {
    super(props);
    this.props.history.listen((location, action) => {
      this.setBodyClass(location);
      this.setState({
        isLoggedOut: this.isLoggedOut()
      });
    });
    this.state = {
      isLoggedOut: false
    }
  }

  componentDidMount(){
    this.setBodyClass();
    this.setState({
      isLoggedOut: this.isLoggedOut()
    });
  }

  setBodyClass(location) {
    this.isLoggedOut(location) ? document.body.classList.add(styles.loggedOut) : document.body.classList.remove(styles.loggedOut);
  }

  isLoggedOut(location) {
    const pathName = location && location.pathname ? location.pathname : window.location.pathname;
    const loggedOutPaths = ["signin", "signup"];
    return loggedOutPaths.some(
      loggedOutPath => pathName.includes(loggedOutPath)
    );
  }

  render() {
    const { store, history } = this.props;
    return (
      <Provider store={store}>
        { this.state.isLoggedOut ? null : <MainAppBar /> }
        <ConnectedRouter history={history}>
          <Routes />
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default connect(null)(Root);
