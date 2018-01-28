import api from '../services/api';
import fetch from 'isomorphic-fetch';
import * as types from './actionTypes'

//actions

function setUser(user){
    return {
        type: types.SET_USER,
        payload: user
    }
}

function setProducts(products){
    return{
        type: types.SET_PRODUCTS,
        payload: products
    }
}

function setHistory(history){
    return{
        type: types.SET_HISTORY,
        payload: history
    }
}

// asynchronous actions

function loadUser() {
    return async (dispatch) => {
        const user = await api.user.get();
        dispatch(setUser(user));
        return user;
    }
}

function loadProducts(){
    return async (dispatch) => {
        const products = await api.product.get();
        dispatch(setProducts(products));
        return products;
    }
}

function loadHistory(){
    return async (dispatch) => {
        const history = await api.history.get();
        dispatch(setHistory(history));
        return history;
    }
}


export default {
    setUser,
    setProducts,
    setHistory,

    loadUser,
    loadProducts,
    loadHistory
}

