import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import Chip from 'material-ui/Chip';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

//styles
import './Filter.css';
function Filter(props) {
    const handleClick = () => {
        console.log('se le dio click al filter');
    }
    return (
        <Col xs={10} xsOffset={1} className="filter">
            <Row>
                <Col xs={1} className="quantity-products">
                    16 of 32 products 
                </Col>
                <Col xs={6} className="sort-by">
                    <div className="text">Sort by: </div>
                    <Chip  
                        onClick={handleClick}
                        className="chip-filter active">Most recent </Chip>
                    <Chip 
                        onClick={handleClick}
                        className="chip-filter desactive">Lowest price</Chip>
                    <Chip 
                        onClick={handleClick}
                        className="chip-filter desactive">Highest price</Chip>
                </Col>
                <Col xs={5} className="filter-category">
                    <SelectField
                        value="filter by category"
                        maxHeight={200}>
                        <MenuItem>prueba</MenuItem>
                        <MenuItem>prueba</MenuItem>
                        <MenuItem>prueba</MenuItem>
                    </SelectField>
                </Col>
            </Row>
        </Col>
    )
}

export default Filter;
