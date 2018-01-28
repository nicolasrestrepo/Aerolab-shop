// dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import actions from '../redux/actions'

// components
import NavBar from './NavBar';
import Content from './Content';

class App extends Component {

    constructor(props){
        super(props)
        this.state = {
            user:{}
        }
    }

    componentDidMount() {
        this.props.actions.loadUser();
        this.props.actions.loadProducts();
    }

    componentWillReceiveProps(nextProps){
        console.log('nextProps in App', nextProps);
        if(this.state.user !== nextProps.user){
            this.setState({
                user: nextProps.user
            })
        }
    }
    render() {
        return (
            <MuiThemeProvider>
                <NavBar user={this.state.user}/>
                <Content body={this.props.children} />
            </MuiThemeProvider>
        )
    }

}

App.propTypes = {
    children: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    user: state.user
})

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
})


export default connect(mapStateToProps, mapDispatchToProps)(App);

