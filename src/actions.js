import fetch from 'cross-fetch';

export const SELECT_ITEM = 'SELECT_ITEM';
export const INVALIDATE_ITEM = 'INVALIDATE_ITEM';
export const REQUEST_ITEMS = 'REQUEST_ITEMS';
export const RECEIVE_ITEMS = 'RECEIVE_ITEMS';

export function selectItem(item) {
    return {
        type: SELECT_ITEM,
        item
    }
}

export function invalidateItem(item) {
    return {
        type: INVALIDATE_ITEM,
        item
    }
}

function requestItems(item) {
    return {
        type: REQUEST_ITEMS,
        item
    }
}

function receiveItems(item, json) {
    return {
        type: RECEIVE_ITEMS,
        item,
        items: json.results,
        receivedAt: Date.now()
    }
}

export function fetchItems(item) {
    return function (dispatch) {
        dispatch(requestItems(item));

        return fetch(`https://pokeapi.co/api/v2/pokemon?limit=100&order=1`)
            .then(
                response => response.json(),
                error => console.log('An error occurred.', error)
            )
            .then(json =>
                dispatch(receiveItems(item, json))
            )
    }
}

export function fetchItemsIfNeeded(item) {
    return (dispatch, getState) => {
        if (shouldFetchItems(getState(), item)) {
            return dispatch(fetchItems(item))
        } else {
            return Promise.resolve()
        }
    }
}