import React, { Component } from 'react';
// services
import api from '../../services/api.js';

// components
import NavBar from '../NavBar';
import ProductCard from '../ProductCard';
import Filter from '../Filter';

//styles
import { Row } from 'react-materialize';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      products: [],
      user:{}
    }
  }
  async componentDidMount(){
    const [
      products,
      user,
    ] = await Promise.all([
      api.product.get(),
      api.user.get()
    ])

    this.setState({
      products,
      user
    })
  }
  render() {
    const { products, user } = this.state;
    console.log('user', user)
    return (
      <div>
        <NavBar user={user}/>
        <Filter />
        <Row>
          { products.map(product => 
            <ProductCard key={product._id} {...product}/> 
          )}
        </Row>
      </div>
    );
  }
}
export default App;
