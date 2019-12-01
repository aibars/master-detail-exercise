import { combineReducers } from 'redux';

import {
    SELECT_ITEM,
    INVALIDATE_ITEM,
    REQUEST_ITEMS,
    RECEIVE_ITEMS
} from './actions';

function selectedItem(state, action) {
    switch (action.type) {
        case SELECT_ITEM:
            return action.item;
        default:
            return state;
    }
}


function items(
    state = {
        isFetching: false,
        didInvalidate: false,
        items: []
    },
    action
) {
    switch (action.type) {
        case INVALIDATE_ITEM:
            return Object.assign({}, state, { didInvalidate: true });
        case REQUEST_ITEMS:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            });
        case RECEIVE_ITEMS:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                items: action.items,
                lastUpdated: action.receivedAt
            });
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    items,
    selectedItem
})

export default rootReducer;