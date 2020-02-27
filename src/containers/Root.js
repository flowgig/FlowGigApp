// Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

// Actions
import { isLoggedIn } from 'actions/user';

// Components
import MainAppBar from 'components/MainAppBar';
import Routes from 'Routes';

// Stylesheets
import styles from 'containers/Root.module.scss';

class Root extends Component {

  componentDidMount(){
    this.setBodyClass();
  }

  componentDidUpdate(prevProps){
    if (this.props.user !== prevProps.user){
      this.setBodyClass();
    }
  }

  setBodyClass() {
    this.props.isLoggedIn() ? document.body.classList.remove(styles.loggedOut) : document.body.classList.add(styles.loggedOut);
  }

  render() {
    const { store, history } = this.props;
    return (
      <Provider store={store}>
        { this.props.isLoggedIn() ? <MainAppBar /> : null }
        <ConnectedRouter history={history}>
          <Routes />
        </ConnectedRouter>
      </Provider>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = {
  isLoggedIn
};

export default connect(mapStateToProps, mapDispatchToProps)(Root);
