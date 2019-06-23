import React, { Component } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {connect} from 'react-redux';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';

import routes from '../constants/routes';
import styles from './LoggedOut.module.scss';

class SignIn extends Component {
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
        <Grid item xs={false} sm={4} md={7} className={styles.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square className={styles.sideBar}>

          <div className={styles.paper}>
            <Avatar className={styles.avatar} >
              <LockOutlinedIcon/>
            </Avatar>

            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form className={styles.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label={<span>Remember me </span>}
                />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={styles.submit}
                >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link component={RouterLink} to={routes.SIGNUP} variant="body2">
                    Dont't have an account? Sign up
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
    user: state.user,
});

export default connect(mapStateToProps)(SignIn);
