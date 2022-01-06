import React from 'react';
import { Link, Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import GreetingContainer from "../greeting/greeting_container";


class NavigationBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="nav-container">
                <div className="nav-bar">
                    <Link className="logo-container" to="/">
                        <img
                            className="logo"
                            src={window.logoURL}
                            alt="amazonian logo"
                        />
                    </Link>
                    <div className="us-flag-container">
                        <img className="us-flag-icon" src={window.usFlag} alt="us flag" />
                    </div>
                    <GreetingContainer />
                    <div>
                        <div>Returns</div>
                        
                    </div>
                    <div className="nav-cart">
                        <div className="nav-cart-icon"><i className="fas fa-shopping-cart"></i></div>
                        <div className="nav-cart-label">Cart</div>
                    </div>
                </div>
                <div className="sub-nav-bar">
                    <div className="sub-nav-all-link" >All</div>
                    <div>Find a Gift</div>
                    <div>Best Sellers</div>
                    <div>Amazon Basics</div>
                    <div>New Releases</div>
                    <div>Today's Deals</div>
                    <div>Customer Service</div>
                    <div>Prime</div>
                    <div>Books</div>
                    <div>Registry</div>
                    <div>Gift Cards</div>
                    <div>Toys & Games</div>
                    <div>Fashion</div>
                    <div>Kindle Books</div>
                    <div>Amazon Home</div>
                    <div>Shopper Toolkit</div>
                    <div>Pharmacy</div>
                    <div>Automotive</div>
                    <div>Sell</div>
                </div>
            </div>
        );
    }
};

export default withRouter(NavigationBar);