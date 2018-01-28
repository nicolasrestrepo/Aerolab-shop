
import { combineReducers } from 'redux';


import * as types from './actionTypes';

const initialState = {
    user:{},
    products: [],
    history: []
}


function userReducer(state = initialState.user, action = {}){
    switch(action.type){
        case types.SET_USER:
            return Object.assign({}, action.payload)
        default:
            return state        
    }
}

function productsReducer(state = initialState.products, action = {}){
    switch(action.type){
        case types.SET_PRODUCTS:
            return state.concat(action.payload)
        default:     
           return state        
    }
}

function historyReducer(state = initialState.history, action = {}){
    switch(action.type){
        case types.SET_HISTORY:
            return state.concat(action.payload)
        default:
            return state;        
    }
}


const reducer = combineReducers({
    user: userReducer,
    products: productsReducer,
    history: historyReducer
})

export default reducer;