import {combineReducers} from 'redux';
import {FETCH_RANDOM_USER, FETCH_RANDOM_USER_ERROR} from '../actions/'
import {fetchUser} from '../Contact/ContactRequest'

let dataState = { contacts:[] };

const dataReducer = (state = dataState, action) => {
    switch (action.type) {
        case FETCH_RANDOM_USER:
            return {...state.contacts, contacts: action.payload.users};
        case FETCH_RANDOM_USER_ERROR:
            return {...state.contacts, contacts: [], error: action.payload.reason};
        default:
            return state;
    }
};

// Combine all the reducers
const rootReducer = combineReducers({
    data: dataReducer,
});

export const getRandomUser = () => (dispatch) => {

    fetchUser()
        .then((users) => {
            dispatch({type: FETCH_RANDOM_USER, payload: {users}})
        })
        .catch((reason) => {
            dispatch({type: FETCH_RANDOM_USER_ERROR, payload: {reason}})
        })

};

export default rootReducer;