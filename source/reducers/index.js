import { combineReducers } from 'redux';
import {FETCH_RANDOM_USER, FETCH_RANDOM_USER_ERROR} from '../actions/'
import {fetchUser} from '../Contact/ContactRequest'

let dataState = { realData:[] };

const dataReducer = (state = dataState, action) => {
    switch (action.type) {
        case FETCH_RANDOM_USER:
            return {...state, realData: action.users};
        case FETCH_RANDOM_USER_ERROR:
            return {...state, realData: action.users, error: action.reason};
        default:
            return state;
    }
};

// Combine all the reducers
const rootReducer = combineReducers({
    dataReducer
});



export const getRandomUser = () => {
    return (dispatch) => {
        fetchUser()
            .then((users) => {
                dispatch({type: FETCH_RANDOM_USER, users})
            })
            .catch((reason) => {
                dispatch({type: FETCH_RANDOM_USER_ERROR, reason})
            })
    }
};

export default rootReducer;