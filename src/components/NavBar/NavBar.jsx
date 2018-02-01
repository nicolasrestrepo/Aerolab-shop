import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-flexbox-grid';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Chip from 'material-ui/Chip';
import Drawer from 'material-ui/Drawer';
import FontIcon from 'material-ui/FontIcon';
import MenuItem from 'material-ui/MenuItem';
// assets
import logoAerolab from '../../assets/aerolab-logo.svg';
import headerImg from '../../assets/header-x1.png'
import coin from '../../assets/icons/coin.svg';
import hamburger from '../../assets/icons/if_menu-alt_134216.svg'

import actions from '../../redux/actions'
//styles
import './NavBar.css';


class NavBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            categories: []
        }
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            categories: nextProps.categories
        })
    }    
    handleToggle = () => this.setState({ open: !this.state.open });

    handleClose = () => this.setState({ open: false });

    filterCategory = (category) => {
        if(this.props.currentLocation === "/"){
            this.props.actions.filterCategoryHome(category);
        }else{
            this.props.actions.filterCategoryHistory(category);
        }
    };
    
    allProducts = () => { 
        if(this.props.currentLocation === "/"){
            this.props.actions.loadAllRecentsHome()
        }else{ 
            this.props.actions.loadAllProductsHistory() 
    }
    };
    render() {
        const { open, categories } = this.state;
        return (
            <div>
                <header className="nav-bar">
                    <Row>

                        <Col xs={1} className="menu">
                            <div onClick={this.handleToggle}><img src={hamburger} alt="hamburger"/></div>
                        </Col>

                        <Col xs={7} className="logo">
                            <img src={logoAerolab} alt="logo" />
                        </Col>

                    {/*Menu offcanvas*/}
                        <Drawer
                            docked={false}
                            open={open}
                            onRequestChange={(open) => this.setState({ open })}
                        >
                            <Link to="/">
                                <MenuItem onClick={this.handleToggle}>Home</MenuItem>
                            </Link>
                            <Link to="/history">
                                <MenuItem onClick={this.handleToggle}>History</MenuItem>
                            </Link>
                            <div className="text-categories"> Categories </div>
                            <MenuItem 
                                onClick={() => (this.allProducts(),this.handleToggle())}
                                >
                                   All products
                            </MenuItem>
                            {categories.map((category, index) => (
                                <MenuItem key={index}
                                onClick={() => (this.filterCategory(category), this.handleToggle())}
                                >
                                    {category}
                                </MenuItem>)
                            )}       
                        </Drawer>
                    {/*Menu offcanvas*/}

                        <Col xs={4} className="info">
                            <p>{this.props.user.name}</p>
                            <Chip className="chip-info">
                                {this.props.user.points} <img src={coin} alt="coins" />
                            </Chip>
                        </Col>
                    </Row>
                </header>
                <img src={headerImg} alt="logo" className="imgHeader" />
            </div>
        )
    }

}

NavBar.defaultProps = {
    actions: {
        filterCategoryHome: () => {},
        filterCategoryHistory: () => {},
        loadAllRecentsHome: () => {},
        loadAllProductsHistory: () => {},
    },
    currentLocation: "/",
    user: {},
    categories: []
}

NavBar.propTypes = {
    actions: PropTypes.shape({
        filterCategoryHome: PropTypes.func,
        filterCategoryHistory: PropTypes.func,
        loadAllRecentsHome: PropTypes.func,
        loadAllProductsHistory: PropTypes.func
    }),
    currentLocation: PropTypes.string,
    user: PropTypes.object,
    categories: PropTypes.array
}



const mapStateToProps = (state) => ({ 
    categories: state.categories,
    currentLocation: state.currentLocation
})
const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);