import React, { Component } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {connect} from 'react-redux';

import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';

import routes from '../constants/routes';
import styles from './LoggedOut.module.scss';

class Dasboard extends Component {
  constructor(props) {
    super(props);
    this.state = { showTermsOfAgreement: false };
    this.handleTermsOfAgreementLinkClick = this.handleTermsOfAgreementLinkClick.bind(this);
  }

  handleTermsOfAgreementLinkClick() {
    this.setState({
      showTermsOfAgreement: true
    })
  }

  render() {
    return (
      <Grid container component="main" className={styles.mainContainer}>
        <CssBaseline />
        Dashboard
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
    user: state.user,
});

export default connect(mapStateToProps)(Dasboard);
