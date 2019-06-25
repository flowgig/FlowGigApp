import React, { Component } from 'react';
import {connect} from 'react-redux';
import clsx from 'clsx';

import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';

import { mainListItems, secondaryListItems } from './ListItems';

import styles from './MainAppBar.module.scss';

class MainAppBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuId: 'primary-search-account-menu',
      mobileMenuId: 'primary-search-account-menu-mobile',
      isMenuOpen: false,
      isMobileMenuOpen: false,
      anchorEl: null,
      mobileMoreAnchorEl: null,
      isDrawerOpen: false
    };
    //  this.handleTermsOfAgreementLinkClick = this.handleTermsOfAgreementLinkClick.bind(this);
    this.handleMenuClose = this.handleMenuClose.bind(this);
    this.handleMobileMenuClose = this.handleMobileMenuClose.bind(this);
    this.handleMobileMenuOpen = this.handleMobileMenuOpen.bind(this);
    this.handleProfileMenuOpen = this.handleProfileMenuOpen.bind(this);
    this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
    this.handleDrawerClose = this.handleDrawerClose.bind(this);
  }

  handleDrawerOpen(){
    this.setState({
      isDrawerOpen: true
    });
  };
  handleDrawerClose(){
    this.setState({
      isDrawerOpen: false
    });
  };

  setAnchorEl(element){
    this.setState({
      anchorEl: element,
      isMenuOpen: element ? true : false
    });
  }

  setMobileMoreAnchorEl(element){
    this.setState({
      mobileMoreAnchorEl: element,
      isMobileMenuOpen: element ? true : false
    });
  }

  handleProfileMenuOpen(event) {
    this.setAnchorEl(event.currentTarget);
  }

  handleMobileMenuClose() {
    this.setMobileMoreAnchorEl(null);
  }

  handleMenuClose() {
    this.setAnchorEl(null);
    this.handleMobileMenuClose();
  }

  handleMobileMenuOpen(event) {
    this.setMobileMoreAnchorEl(event.currentTarget);
  }

  renderMenu(){
    return (
      <Menu
        anchorEl={this.state.anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id={this.state.menuId}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={this.state.isMenuOpen}
        onClose={this.handleMenuClose}
        >
        <MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={this.handleMenuClose}>My account</MenuItem>
      </Menu>
    );
  }

  renderMobileMenu(){
    return (
      <Menu
        anchorEl={this.state.mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id={this.state.mobileMenuId}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={this.state.isMobileMenuOpen}
        onClose={this.handleMobileMenuClose}
        >
        <MenuItem>
          <IconButton aria-label="Show 4 new mails" color="inherit">
            <Badge badgeContent={4} color="primary">
              <MailIcon />
            </Badge>
          </IconButton>
          <p>Messages</p>
        </MenuItem>
        <MenuItem>
          <IconButton aria-label="Show 11 new notifications" color="inherit">
            <Badge badgeContent={11} color="primary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <p>Notifications</p>
        </MenuItem>
        <MenuItem onClick={this.handleProfileMenuOpen}>
          <IconButton
            aria-label="Account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
            >
            <AccountCircle />
          </IconButton>
          <p>Profile</p>
        </MenuItem>
      </Menu>
    );
  }

  render() {
    return (
      <div className={styles.grow}>
        <AppBar position="absolute" className={clsx(styles.appBar, this.state.isDrawerOpen && styles.appBarShift)}>
          <Toolbar>
            <IconButton
              edge="start"
              className={clsx(styles.menuButton, this.state.isDrawerOpen && styles.menuButtonHidden)}
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              >
              <MenuIcon />
            </IconButton>
            <Typography className={styles.title} variant="h6" noWrap>
              FlowGig
            </Typography>
            <div className={styles.grow} />
            <div className={styles.sectionDesktop}>
              <IconButton aria-label="Show 4 new mails" color="inherit">
                <Badge badgeContent={4} color="primary">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton aria-label="Show 17 new notifications" color="inherit">
                <Badge badgeContent={17} color="primary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                edge="end"
                aria-label="Account of current user"
                aria-controls={this.state.menuId}
                aria-haspopup="true"
                onClick={this.handleProfileMenuOpen}
                color="inherit"
                >
                <AccountCircle />
              </IconButton>
            </div>
            <div className={styles.sectionMobile}>
              <IconButton
                aria-label="Show more"
                aria-controls={this.state.mobileMenuId}
                aria-haspopup="true"
                onClick={this.handleMobileMenuOpen}
                color="inherit"
                >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: clsx(styles.drawerPaper, !this.state.isDrawerOpen && styles.drawerPaperClose),
          }}
          open={this.state.isDrawerOpen}
          >
          <div className={styles.toolbarIcon}>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List>{mainListItems}</List>
          <Divider />
          <List>{secondaryListItems}</List>
        </Drawer>
        {this.renderMobileMenu()}
        {this.renderMenu()}
      </div>
    );
  }
}

export default connect(null)(MainAppBar);
