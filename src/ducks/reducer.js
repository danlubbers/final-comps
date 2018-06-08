import axios from "axios";

// Set initialState
const initialState = {
    user: null,
    allProducts: []
}

// Create our Action types with const and variable is ALL CAPS!
const GET_USER_INFO = 'GET_USER_INFO';
const ALL_PRODUCTS = 'ALL_PRODUCTS';

// Action Creator Functions return a 'type' and 'payload'

// Action Creator for AUTH0
export function getUser() {
    let userData = axios.get('/auth/me').then(res => {
        return res.data;
    }); 
    return {
        type: GET_USER_INFO,
        payload: userData
    }
}

// Action Creator to getAllProducts for Category Page
export function getAllProducts() {
    let products = axios.get(`/api/getAllProducts`).then(res => {
        console.log('test', res.data)
        return res.data
    }); 
        return { 
            type: ALL_PRODUCTS,
            payload: products
    }   
}

// Add the function reducer with the parameters 'state' set to equal initialState and 'action'
export default function reducer(state=initialState, action) {
    // console.log(action)
    switch(action.type) {
        // Add our action types to our reducer
        case GET_USER_INFO + '_FULFILLED':
        // Use Object.assign to get the previous value of state and update it's property on the payload.
            return Object.assign({}, state, {user: action.payload})
        // '_FULFILLED, fulfills the promise, otherwise redux will not return the Array
        case ALL_PRODUCTS + '_FULFILLED':
        // console.log('test2')
            return Object.assign( {}, state, {allProducts: action.payload});
        default:
            return state;
    }
}