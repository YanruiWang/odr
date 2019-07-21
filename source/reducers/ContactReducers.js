import { combineReducers } from 'redux';
import {FETCH_RANDOM_USER} from '../actions/ContactActions'

let dataState = { data: [], loading:true };

const dataReducer = (state = dataState, action) => {
    switch (action.type) {
        case FETCH_RANDOM_USER:
            state = Object.assign({}, state, { data: action.data, loading:false });
            return state;
        default:
            return state;
    }
};

// Combine all the reducers
const ContactReducers = combineReducers({
    dataReducer
    // ,[ANOTHER REDUCER], [ANOTHER REDUCER] ....
})

export default ContactReducers;