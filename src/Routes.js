// Dependencies
import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Switch, Route } from 'react-router';

// Constants
import routes from './constants/routes';

// Actions
import { isLoggedIn } from './actions/user';

// Components
import App from './containers/App';
import DashboardPage from './containers/DashboardPage';
import DraggablePage from './containers/DraggablePage';
import GigsPage from './containers/GigsPage';
import SignInPage from './containers/SignInPage';
import SignUpPage from './containers/SignUpPage';

class Routes extends Component {
  renderLoggedInRoutes(){
    return(
      <React.Fragment>
        <Route path={routes.DRAGGABLE} component={DraggablePage} />
        <Route path={routes.GIGS} component={GigsPage} />
        <Route exact path={routes.HOME} component={DashboardPage} />
      </React.Fragment>
    );
  }
  renderLoggedOutRoutes(){
    return(
      <React.Fragment>
        <Route path={routes.SIGNUP} component={SignUpPage} />
        <Route exact path={routes.HOME} component={SignInPage} />
      </React.Fragment>
    );
  }
  render() {
    return(
      <App>
        <Switch>
          { this.props.isLoggedIn() ? this.renderLoggedInRoutes() : this.renderLoggedOutRoutes() }
        </Switch>
      </App>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = {
  isLoggedIn
};

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
