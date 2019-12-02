import { combineReducers } from 'redux';

import {
    SELECT_ITEM,
    REQUEST_ITEMS,
    RECEIVE_ITEMS
} from './actions';

function selectedItem(state = {}, action) {
    switch (action.type) {
        case SELECT_ITEM:
            return action.item;
        default:
            return state;
    }
}


function pokemons(
    state = {
        isFetching: false,
        items: []
    },
    action
) {
    switch (action.type) {
        case REQUEST_ITEMS:
            return Object.assign({}, state, {
                items: [],
                isFetching: true
            });
        case RECEIVE_ITEMS:
            return Object.assign({}, state, {
                isFetching: false,
                items: action.items,
                lastUpdated: action.receivedAt
            });
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    pokemons,
    selectedItem
})

export default rootReducer;