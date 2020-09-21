import React from 'react';
import './css/Header.css';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function Header() {
    return (
        <div className="header">
            <Link to="/">
                <div className="logo">
                    <img src="https://img.icons8.com/color/48/000000/airbnb.png" />
                    <h4>airbnb</h4>
                </div>
            </Link>

            <div className="header__center">
                <input type="text"/>
                <SearchIcon />
            </div>

            <div className="header__right">
                <p>Become a host</p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <AccountCircleIcon />
            </div>
        </div>
    )
}

export default Header;
