import { combineReducers } from 'redux';
import {FETCH_RANDOM_USER} from '../actions/'
import {fetchUser} from '../Contact/ContactRequest'

let dataState = { realData:[] };

const dataReducer = (state = dataState, action) => {
    switch (action.type) {
        case FETCH_RANDOM_USER:
            state = Object.assign({}, state, { realData: action.users});
            return state;
        default:
            return state;
    }
};

// Combine all the reducers
const rootReducer = combineReducers({
    dataReducer
    // ,[ANOTHER REDUCER], [ANOTHER REDUCER] ....
});



export const getRandomUser = () => {
    return (dispatch) => {
        fetchUser().then((users) => {
            dispatch({type: FETCH_RANDOM_USER, users})
        })
    }
};

export default rootReducer;