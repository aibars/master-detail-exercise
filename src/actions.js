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

        //In this case, the API url is public and constant. However, I assumed that the url changes across the different
        //environments. 
        var url = process.env.REACT_APP_API_URL.replace('{LIMIT}', process.env.REACT_APP_LIST_SIZE);
        return fetch(url)
            .then(
                response => response.json(),
                error => console.log('An error occurred.', error)
            )
            .then(json =>
                dispatch(receiveItems(json))
            );
    }
}