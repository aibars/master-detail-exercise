import { combineReducers } from 'redux';

import {
    RECEIVE_ITEM,
    REQUEST_ITEM,
    REQUEST_ITEMS,
    RECEIVE_ITEMS
} from './actions';

function selectedItem(state = {}, action) {
    switch (action.type) {
        case REQUEST_ITEM:
            return {
                isFetching: true,
                item: null
            };
        case RECEIVE_ITEM:
            return {
                isFetching: false,
                item: action.item
            };
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