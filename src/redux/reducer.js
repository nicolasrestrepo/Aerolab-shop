
import { combineReducers } from 'redux';


import * as types from './actionTypes';

const initialState = {
    user:{},
    copyHistory: [],
    products: [],
    copyAllProducts: [],
    categories: [],
    currentLocation: ''
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
            return state.concat(action.payload);
        case types.ORDER_PRICE:    
            if(action.payload === 'lowest'){
                return state.map(pro => pro).sort((productA, productB) => productA.cost - productB.cost);
            } 
            return state.map(pro => pro).sort((productA, productB) => productB.cost - productA.cost);
        case types.FILTER_CATEGORY_HOME: 
            return action.payload.allProducts.filter(product => product.category == action.payload.category);   
        case types.RECENTS_PRODUCTS:
            return action.payload.map(pro => pro);     
        default:     
           return state        
    }
}
function copyAllProductsReducer(state = initialState.copyAllProducts, action = {}){
    switch(action.type){
        case types.SET_PRODUCTS:
        return state.concat(action.payload)
        default: 
            return state
    }
}

function copyHistoryReducer(state = initialState.copyHistory, action = {}){
    console.log('action.type in reducer copyHistory', action.payload)
    switch(action.type){
        case types.SET_COPY_HISTORY:
            return action.payload.map(pro => pro)
        case  types.FILTER_CATEGORY_HISTORY:
            return action.payload.allProducts.filter(product => product.category == action.payload.category);  
        case types.SET_ALL_PRODUCTS_HISTORY:
            return action.payload.map(pro => pro);  
        default: 
            return state    
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

function currentLocationReducer(state = initialState.currentLocation, action = {}){
    switch(action.type){
        case types.SET_CURRENT_LOCATION: 
            return action.payload
        default: 
            return state;    
    }
}

const reducer = combineReducers({
    user: userReducer,
    products: productsReducer,
    currentLocation: currentLocationReducer,
    copyHistory: copyHistoryReducer,
    copyAllProducts: copyAllProductsReducer,
    categories: categoriesReducer
})

export default reducer;