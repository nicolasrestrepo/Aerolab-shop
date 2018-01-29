
import { combineReducers } from 'redux';


import * as types from './actionTypes';

const initialState = {
    user:{},
    products: [],
    history: [],
    categories: []
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
        case types.FILTER_LOWEST_PRICE: 
            return state.sort((productA, productB) => productA.cost - productB.cost)
        case types.FILTER_HIGHEST_PRICE:    
            return state.sort((productA, productB) => productB.cost - productA.cost)
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

function categoriesReducer(state = initialState.categories, action ={}){
    switch(action.type){
        case types.SET_PRODUCTS:
            return action.payload.map(product => product.category)
                    .filter((item, pos, self) => self.indexOf(item) == pos)
        default: 
            return state;    
    }
}


const reducer = combineReducers({
    user: userReducer,
    products: productsReducer,
    history: historyReducer,
    categories: categoriesReducer
})

export default reducer;