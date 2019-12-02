import { combineReducers } from 'redux';

import {
    RECEIVE_ITEM,
    REQUEST_ITEM,
    REQUEST_ITEMS,
    RECEIVE_ITEMS,
    INVALIDATE_ITEM
} from './actions';

function selectedItem(state = {
    isFetching: false,
    item: null
}, action) {
    switch (action.type) {
        case INVALIDATE_ITEM:
            return Object.assign({}, state, {
                item: null
            });
        case REQUEST_ITEM:
            return Object.assign({}, state, {
                isFetching: true
            });
        case RECEIVE_ITEM:
            return Object.assign({}, state, {
                item: action.item,
                isFetching: false
            });
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