
import Component from 'core/Component';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import Icon from '../Icon';

export default class MenuDesktop extends Component {
  static defaultProps = {
    isOpen: true,
  };

  static propTypes = {
    isOpen: PropTypes.bool,
    handleToggle: PropTypes.func,
  };

  render() {
    const { props } = this;

    return (
      <div>
        <div className={ `menu-desktop ${ props.isOpen ? 'menu-desktop--open' : 'menu-desktop--close' }` }>
          <div className="menu-desktop__wrapper">
            <div className="menu-desktop__header">
              <img src="/img/Badge-White.png" className="menu-desktop__logo" />
              <a onClick={ props.handleToggle } >
                <Icon name="bars" className="menu-desktop__toggle" onClick={ props.handleToggle } />
              </a>
            </div>
            <p className="menu-desktop__title">MENU</p>
              <Link className="menu-desktop__item" to="/">
                <img className="menu-desktop__icon" src="/img/Home-icon@2x.png" />
                <span className="menu-desktop__item-label active" >Overview</span>
              </Link>
              <Link className="menu-desktop__item" to="/movement">
                <img className="menu-desktop__icon" src="/img/Analytics-icon@2x.png" />
                <span className="menu-desktop__item-label" >Movement</span>
              </Link>
              {/*
              <Link className="menu-desktop__item" to="/top">
                <img className="menu-desktop__icon" src="/img/Ratings-icon@2x.png" />
                <span className="menu-desktop__item-label">Top 100</span>
              </Link>
              */}
              <Link className="menu-desktop__item" to="/masternode">
                <img className="menu-desktop__icon" src="/img/Customers-icon@2x.png" />
                <span className="menu-desktop__item-label">Masternode</span>
              </Link>
              <Link className="menu-desktop__item" to="/coin">
                <img className="menu-desktop__icon" src="/img/Market-icon@2x.png" />
                <span className="menu-desktop__item-label" >Coin Info</span>
              </Link>
              {/*
              <Link className="menu-desktop__item" to="/faq">
                <img className="menu-desktop__icon" src="/img/Jobs-icon@2x.png" />
                <span className="menu-desktop__item-label">FAQ</span>
              </Link>
              */}
              <Link className="menu-desktop__item" to="/api">
                <img className="menu-desktop__icon" src="/img/Support-icon@2x.png" />
                <span className="menu-desktop__item-label">API</span>
              </Link>
            </div>
        </div>
      </div>
    )
  }
}