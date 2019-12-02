import fetch from 'cross-fetch';

export const SELECT_ITEM = 'SELECT_ITEM';
export const REQUEST_ITEMS = 'REQUEST_ITEMS';
export const RECEIVE_ITEMS = 'RECEIVE_ITEMS';
export const INVALIDATE_ITEMS = 'INVALIDATE_ITEMS';

export function invalidateItems() {
    return {
        type: INVALIDATE_ITEMS
    }
}

export function selectItem(item) {
    return {
        type: SELECT_ITEM,
        item
    }
}

function requestItems() {
    return {
        type: REQUEST_ITEMS
    }
}

function receiveItems(json) {
    return {
        type: RECEIVE_ITEMS,
        items: json.results,
        receivedAt: Date.now()
    }
}

export function fetchItems() {
    return function (dispatch) {
        dispatch(requestItems());

        return fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&order=1`)
            .then(
                response => response.json(),
                error => console.log('An error occurred.', error)
            )
            .then(json =>
                dispatch(receiveItems(json))
            )
    }
}