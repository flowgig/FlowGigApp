// Dependencies
import React, { Component } from 'react';
import { Link as RouterLink } from 'react-router-dom';

// Material-UI Components
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import CreateIcon from '@material-ui/icons/Create';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

// Constants
import routes from '../constants/routes';

// Components
import TermsOfServiceDialog from './TermsOfServiceDialog';

// Stylesheets
import styles from './LoggedOut.module.scss';

class SignUp extends Component {
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
							<CreateIcon/>
						</Avatar>

						<Typography component="h1" variant="h5">
							Sign up
						</Typography>
						<form className={styles.form} noValidate>
							<TextField
								variant="outlined"
								margin="normal"
								required
								fullWidth
								id="name"
								label="Firstname Lastname"
								name="name"
								autoComplete="name"
								autoFocus
								/>
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
								label={<span>I agree to the </span>}
								className={styles.termsOfServiceLabel}
								/>
							<div className={styles.termsOfServiceLink}>
								<TermsOfServiceDialog/>
							</div>
							<Button
								type="submit"
								fullWidth
								variant="contained"
								color="primary"
								className={styles.submit}
								>
								Sign Up
							</Button>
							<Grid container>
								<Grid item>
									<Link component={RouterLink} to={routes.HOME} variant="body2">
										Already have an account? Sign in
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

export default SignUp;
