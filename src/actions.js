import fetch from 'cross-fetch';

export const REQUEST_ITEMS = 'REQUEST_ITEMS';
export const RECEIVE_ITEMS = 'RECEIVE_ITEMS';
export const REQUEST_ITEM = 'REQUEST_ITEM';
export const RECEIVE_ITEM = 'RECEIVE_ITEM';
export const INVALIDATE_ITEM = 'INVALIDATE_ITEM';

export function selectItem(item) {
    return function (dispatch) {
        dispatch(requestItem());

        return fetch(item.url)
            .then(
                response => response.json(),
                error => console.log('An error occurred.', error)
            )
            .then(json =>
                dispatch(receiveItem(json))
            );
    }
}

export function invalidateItem() {
    return {
        type: INVALIDATE_ITEM
    }
}

function requestItem() {
    return {
        type: REQUEST_ITEM
    }
}

function receiveItem(json) {
    return {
        type: RECEIVE_ITEM,
        item: json
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
            );
    }
}