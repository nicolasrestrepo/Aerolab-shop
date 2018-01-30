import React, {Component} from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Chip from 'material-ui/Chip';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import actions from '../../redux/actions'

//styles
import './Filter.css';
class Filter extends Component{

    constructor(props){
        super(props)
        this.state = {
            value: 5,
            categories: [],
            activeFilter: 'recent'
        }
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            categories: nextProps.categories
        })
    }   
    changeActive = (active) => {
        this.setState({
            activeFilter: active
        })
    }
    //accion for get recents products from copy products 
    recents = (recent) => this.props.actions.loadAllRecents()


    orderPrice = (order) => this.props.actions.orderPrice(order)

    handleChange = (event, index, value) => {
         this.props.actions.filterCategory({value})
         this.setState({value})
    };
render(){
    const { value, categories, activeFilter } = this.state;
    return (
        <Col xs={10} xsOffset={1} className="filter">
            <Row>
                <Col xs={1} className="quantity-products">
                    16 of 32 products
                </Col>
                <Col xs={6} className="sort-by">
                    <div className="text">Sort by: </div>
                    <Chip
                        onClick={() => (this.recents(), this.changeActive('recent'))}
                        className={`chip-filter ${activeFilter === 'recent' ? 'active' : ''}`}>Most recent </Chip>
                    <Chip
                        onClick={() => (this.orderPrice('lowest'), this.changeActive('lowest'))}
                        className={`chip-filter ${activeFilter === 'lowest' ? 'active' : ''}`}>Lowest price</Chip>

                    <Chip    
                        onClick={() => (this.orderPrice('highest'), this.changeActive('highest'))}
                        className={`chip-filter ${activeFilter === 'highest' ? 'active' : ''}`}>Highest price</Chip>
                </Col>
                <Col xs={5} className="filter-category">
                    <SelectField
                        value={value}
                        onChange={this.handleChange}
                        maxHeight={200}
                    >
                    {categories.map((category, index) => <MenuItem key={index} value={category} primaryText={category}/>) }
                    </SelectField>
                </Col>
            </Row>
        </Col>
    )
}

}

const mapStateToProps = (state) => ({
    categories: state.categories
})

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

