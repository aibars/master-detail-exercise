import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import ItemsList from '../components/ItemsList';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

describe('ItemsList', () => {
    let store;
    let component;

    beforeEach(() => {
        store = mockStore({
            pokemons: {
                items: [{
                    name: '1',
                    url: 'url1'
                },
                {
                    name: '1',
                    url: 'url1'
                }],
                isFetching: false,
                lastUpdate: Date.now()
            }
        });

        store.dispatch = jest.fn();

        component = renderer.create(
            <Provider store={store}>
                <ItemsList items={[{
                    name: '1',
                    url: 'url1'
                },
                {
                    name: '1',
                    url: 'url1'
                }]} />
            </Provider>
        );

    });

    it('should render with given state from Redux store', () => {
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('should dispatch an action on clicking on a list element', () => {
        renderer.act(() => {
            component.root. findAllByType('li')[0].props.onClick();
        });
        expect(store.dispatch).toHaveBeenCalledTimes(1);
    });
});