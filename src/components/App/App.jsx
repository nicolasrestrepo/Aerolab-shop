import React, { Component } from 'react';
import NavBar from '../NavBar';
import api from '../../services/api.js'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      products: []
    }
  }
  async componentDidMount(){
    const products = await api.product.get()
    console.log('products in app', products)
  }
  render() {
    return (
      <div >
        <NavBar />
      </div>
    );
  }
}
export default App;
