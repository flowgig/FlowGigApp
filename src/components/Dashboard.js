// Dependencies
import React, { Component } from 'react';
import {connect} from 'react-redux';

// Material-UI Components
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';

// Stylesheets
import styles from 'components/LoggedOut.module.scss';

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
