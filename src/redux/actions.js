import api from '../services/api';
import fetch from 'isomorphic-fetch';
import * as types from './actionTypes'

//actions load data

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

function setCopyHistory(history){
    return{
        type: types.SET_COPY_HISTORY,
        payload: history
    }
}

function setCurrentLocation(location){
    return{
        type: types.SET_CURRENT_LOCATION,
        payload: location
    }
}

// filter actions 

function orderPrice(order){
    return{
        type: types.ORDER_PRICE,
        payload: order
    }
}


function filterCategoryHomeParams(category, allProducts){
    return{
        type: types.FILTER_CATEGORY_HOME,
        payload:{
            category,
            allProducts
        }
    }
}
function filterCategoryHome(category){
    return (dispatch, getState) => {
        const state = getState();
        const allProducts = state.copyAllProducts;
        dispatch(filterCategoryHomeParams(category, allProducts))
    }
}

function filterCategoryHistoryParams(category, allProducts){
    return{
        type: types.FILTER_CATEGORY_HISTORY,
        payload:{
            category,
            allProducts
        }
    }
}

function filterCategoryHistory(category){
    return (dispatch, getState) => {
        const state = getState();
        const history = state.user.redeemHistory;
        dispatch(filterCategoryHistoryParams(category, history))
    }
}


function setAllRecentsHome(products){
    return{
        type: types.RECENTS_PRODUCTS,
        payload: products
    }
}
function loadAllRecentsHome(){
    return (dispatch, getState) => {
        const state = getState();
        const allProducts = state.copyAllProducts;
        dispatch(setAllRecentsHome(allProducts))
    }
}

function setAllProductsHistory(products){
    return{
        type: types.SET_ALL_PRODUCTS_HISTORY,
        payload: products
    }
}
function loadAllProductsHistory(){
    return (dispatch, getState) => {
        const state = getState();
        const allProducts = state.user.redeemHistory;
        dispatch(setAllProductsHistory(allProducts))
    }
}



// asynchronous actions

function loadUser() {
    return async (dispatch) => {
        const user = await api.user.get();
        dispatch(setUser(user));
        dispatch(setCopyHistory(user.redeemHistory))
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


export default {
    setUser,
    setProducts,
    setCopyHistory,
    orderPrice,
    loadAllRecentsHome,
    loadAllProductsHistory,
    filterCategoryHome,
    filterCategoryHistory,
    setCurrentLocation,
    loadUser,
    loadProducts
}

